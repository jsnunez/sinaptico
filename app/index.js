import  express  from "express";
import cookieParser from 'cookie-parser';
import multer from "multer";
//Fix para __direname
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {methods as authentication} from "./controllers/authentication.controller.js"
import {methods as authorization} from "./middlewares/authorization.js";

// Configuración de almacenamiento con multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'app/public/logos'); // Carpeta donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
        const empresaNombre = req.body.nombre; // Obtener el nombre de la empresa
        const fileExtension = path.extname(file.originalname); // Obtener la extensión del archivo (e.g., .jpg, .png)
        
       
        cb(null, empresaNombre+fileExtension); // Asignar el nuevo nombre al archivo
    }
});

const upload = multer({ storage: storage });

//Server
const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto",app.get("port"));

//Configuración
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cookieParser())


//Rutas
app.get("/",authorization.soloPublico, (req,res)=> res.sendFile(__dirname + "/pages/login.html"));
app.get("/register",authorization.soloPublico,(req,res)=> res.sendFile(__dirname + "/pages/register.html"));
app.get("/crearentidad",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/admin/crearentidad.html"));

app.get("/helice",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/admin/helice.html"));

app.post("/api/login",authentication.login);
app.post("/api/register",authentication.register);


// Ruta para manejar el formulario de subida
app.post('/upload', upload.single('logo'), (req, res) => {
    const nombre = req.body.nombre; // Nombre de la empresa
    const logo = req.file; // Archivo subido

    // Mostrar los detalles en consola
    console.log(`Nombre de la empresa: ${nombre}`);
    console.log(`Archivo subido: ${logo.filename}`);

    // Responder al cliente
    res.send('Logo subido con éxito.');
});