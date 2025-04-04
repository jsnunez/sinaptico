
document.getElementById("cerrarSesion").addEventListener("click",()=>{
  document.cookie ='jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.location.href = "/"
})
document.getElementById("estado").addEventListener("click",()=>{
var entidades= document.getElementById("entidades");
entidades.style.display="none";
var listado= document.getElementById("listado");
listado.style.display="flex";

})
document.getElementById("empresas").addEventListener("click",()=>{
var entidades= document.getElementById("entidades");
entidades.style.display="none";
var listado= document.getElementById("listado");
listado.style.display="flex";

})
document.getElementById("crearEntidad").addEventListener("click",()=>{
  showModal();
  
  })
  document.getElementById("CerrarModal").addEventListener("click",()=>{
    closeModal();
    
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

function showModal() {
  document.getElementById("modalCrerEntidad").style.display = "block";
}

function closeModal() {
  document.getElementById("modalCrerEntidad").style.display = "none";
}