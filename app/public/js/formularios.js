// Función para cambiar el formulario según el tipo de entidad seleccionado
function changeForm(entityType) {
    const extraFieldsContainer = document.getElementById('extra-fields');
    const userDetailsContainer = document.getElementById('datos-entidad');
  
    // Limpiar campos existentes antes de agregar nuevos
    extraFieldsContainer.innerHTML = '';
    userDetailsContainer.innerHTML = '';
  
    if (entityType === 'Empresa') {
      // Campos específicos para "Empresa"
      userDetailsContainer.innerHTML = `
      <h1> Datos de la empresa</h1>
           <div class="input-box">
      <span class="details">Razón Social</span>
      <input type="text" id="razon-social" name="razon-social" placeholder="Ingrese la razón social" required>
  </div>
  
  <div class="input-box">
      <span class="details">Número de Identificación</span>
      <input type="text" id="num-identificacion" name="num-identificacion" placeholder="Ingrese el número de identificación" required>
  </div>
  
  <div class="input-box">
      <span class="details">Tipo de Entidad</span>
      <select id="tipo-entidad" name="tipo-entidad" required>
          <option value="Sociedad Anónima">Sociedad Anónima</option>
          <option value="Sociedad Limitada">Sociedad Limitada</option>
          <option value="Persona Natural">Persona Natural</option>
          <!-- Agregar más opciones según sea necesario -->
      </select>
  </div>
  
  <div class="input-box">
      <span class="details">Naturaleza Jurídica</span>
      <select id="naturaleza-juridica" name="naturaleza-juridica" required>
          <option value="Privada">Privada</option>
          <option value="Pública">Pública</option>
          <option value="Mixta">Mixta</option>
      </select>
  </div>
  
  <div class="input-box">
      <span class="details">Actividad Económica</span>
      <input type="text" id="actividad-economica" name="actividad-economica" placeholder="Ingrese la actividad económica" required>
  </div>
  <div class="input-box">
  <!-- Correo de Contacto -->
  <label for="correo">Correo de Contacto:</label>
  <input type="email" id="correo" name="correo" required><br><br>
  </div>
  <div class="input-box">
  <!-- Teléfono -->
  <label for="telefono">Teléfono:</label>
  <input type="tel" id="telefono" name="telefono" required><br><br>
  </div>
  <div class="input-box">
  <!-- Fecha de Constitución -->
  <label for="fecha-constitucion">Fecha de Constitución:</label>
  <input type="date" id="fecha-constitucion" name="fecha-constitucion" required><br><br>
  </div>
  <div class="input-box">
  <!-- Departamento -->
  <label for="departamento">Departamento:</label>
  <input type="text" id="departamento" name="departamento" required><br><br>
  </div>
  <div class="input-box">
  <!-- Ciudad -->
  <label for="ciudad">Ciudad:</label>
  <input type="text" id="ciudad" name="ciudad" required><br><br>
  </div>
  <div class="input-box">
  <!-- Dirección -->
  <label for="direccion">Dirección:</label>
  <input type="text" id="direccion" name="direccion" required><br><br>
  </div>
    <div class="input-box">
            <label for="logo">Logo de la Empresa (subir archivo):</label>
            <input type="file" id="logo" name="logo" accept="image/*" required>
        </div>
      <h1>   Datos de Contacto</h1>
<div class="input-box">
      </div>

    <div class="input-box">
      <span class="details">Nombre de completo contacto</span>
      <input type="text" id="nombreContacto" name="nombreContacto" placeholder="Ingrese el nombre completo" required>
  </div>
  
    <div class="input-box">
      <span class="details">Cargo Persona</span>
      <input type="text" id="CargoPersona" name="cargoPersona" placeholder="Ingrese el cargo" required>
  </div>
      <div class="input-box">
      <span class="details">Correo electronico</span>
      <input type="email" id="correo" name="correo" placeholder="Ingrese el correo" required>
  </div>
    </div>
      <div class="input-box">
      <span class="details">telefono de contacto</span>
      <input type="tel" id="telefonoContacto" name="telefonoContacto" placeholder="Ingrese el numero de telefono" required>
  </div>
  <div class="input-box">
  <!-- Facebook -->
  <label for="facebook">Facebook:</label>
  <input type="url" id="facebook" name="facebook"><br><br>
  </div>
  <div class="input-box">
  <!-- Instagram -->
  <label for="instagram">Instagram:</label>
  <input type="url" id="instagram" name="instagram"><br><br>
  </div>
  <div class="input-box">
  <!-- Página Web -->
  <label for="paginaweb">Página Web:</label>
  <input type="url" id="paginaweb" name="paginaweb"><br><br>
  </div>
  <div class="input-box">
 
  <div class="input-box"></div>
  
        `;
        extraFieldsContainer.innerHTML = ``
    } else if (entityType === 'universidad') {
      extraFieldsContainer.innerHTML = `
            <div class="input-box">
                <span class="details">Nombre de la universidad</span>
                <input type="text" placeholder="Ingrese el nombre de la universidad" required>
            </div>
            <div class="input-box">
                <span class="details">Año de fundación</span>
                <input type="text" placeholder="Ingrese el año de fundación" required>
            </div>
            <div class="input-box">
                <span class="details">Dirección</span>
                <input type="text" placeholder="Ingrese la dirección de la universidad" required>
            </div>
        `;
    } else if (entityType === 'emprendimiento') {
      extraFieldsContainer.innerHTML = `
            <div class="input-box">
                <span class="details">Nombre del emprendimiento</span>
                <input type="text" placeholder="Ingrese el nombre del emprendimiento" required>
            </div>
            <div class="input-box">
                <span class="details">Sector</span>
                <input type="text" placeholder="Ingrese el sector del emprendimiento" required>
            </div>
            <div class="input-box">
                <span class="details">Año de inicio</span>
                <input type="text" placeholder="Ingrese el año de inicio" required>
            </div>
        `;
    } else if (entityType === 'startup') {
      extraFieldsContainer.innerHTML = `
            <div class="input-box">
                <span class="details">Nombre de la startup</span>
                <input type="text" placeholder="Ingrese el nombre de la startup" required>
            </div>
            <div class="input-box">
                <span class="details">Modelo de negocio</span>
                <input type="text" placeholder="Ingrese el modelo de negocio" required>
            </div>
            <div class="input-box">
                <span class="details">Fecha de lanzamiento</span>
                <input type="date" placeholder="Ingrese la fecha de lanzamiento" required>
            </div>
        `;
    } else if (entityType === 'otro') {
      extraFieldsContainer.innerHTML = `
            <div class="input-box">
                <span class="details">Descripción</span>
                <input type="text" placeholder="Ingrese una breve descripción" required>
            </div>
        `;
    }
  }
  // Inicializar el formulario con "Empresa" al cargar la página
window.onload = function () {
    changeForm('Empresa');
  };
  