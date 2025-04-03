
document.getElementById("cerrarSesion").addEventListener("click",()=>{
  document.cookie ='jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.location.href = "/"
})
document.getElementById("estado").addEventListener("click",()=>{
  console.log("hola");
var entidades= document.getElementById("entidades");
entidades.style.display="none";
var listado= document.getElementById("listado");
listado.style.display="flex";

})

// Función para obtener el valor de una cookie por su nombre
function obtenerCookie(nombre) {
  const nombreCookie = `${nombre}=`;
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      
      if (cookie.indexOf(nombreCookie) === 0) {
          return cookie.substring(nombreCookie.length, cookie.length);
      }
  }
  
  return null; // Retorna null si no se encuentra la cookie
}

// Ejemplo de cómo leer la cookie "usuario"
const usuario = obtenerCookie("user");

document.getElementById('bienvenido').innerText = "Bienvenido  " + usuario;
