// Esperar a que el HTML esté completamente cargado para iniciar la app
document.addEventListener("DOMContentLoaded", () => {
  renderizarHome();
});

/**
 * Muestra la lista de los 5 destinos climáticos (Vista Home)
 */
function renderizarHome() {
  const contenedorHome = document.getElementById("contenedor-home");
  const seccionDetalle = document.getElementById("seccion-detalle");
  
  if (!contenedorHome) return;
  
  // Hacer visible el Home y ocultar la sección de detalles
  contenedorHome.style.display = "grid";
  if (seccionDetalle) seccionDetalle.style.display = "none";
  
  contenedorHome.innerHTML = ""; // Limpiar la vista antes de renderizar

  // Recorrer el arreglo de lugares para crear las tarjetas dinámicamente
  lugares.forEach(lugar => {
    const card = document.createElement("div");
    card.className = "clima-card";
    card.innerHTML = `
      <h3>${lugar.nombre}</h3>
      <p class="temp">${lugar.tempActual}°C</p>
      <p class="estado">${lugar.estadoActual}</p>
      <button class="btn-ver" data-id="${lugar.id}">Ver Detalles Semanales</button>
    `;
    
    // Escuchar el click en el botón para cambiar de vista
    card.querySelector(".btn-ver").addEventListener("click", (e) => {
      const idLugar = e.target.getAttribute("data-id");
      mostrarDetalleLugar(idLugar);
    });

    contenedorHome.appendChild(card);
  });
}

/**
 * Cambia la interfaz para enseñar el desglose y las estadísticas calculadas del lugar seleccionado
 */
function mostrarDetalleLugar(id) {
  const contenedorHome = document.getElementById("contenedor-home");
  const seccionDetalle = document.getElementById("seccion-detalle");
  
  if (!seccionDetalle) return;

  // Buscar el objeto del lugar seleccionado usando su ID
  const lugar = obtenerLugarPorId(id);
  if (!lugar) return;

  // Ocultar el Home y mostrar la sección de detalles
  contenedorHome.style.display = "none";
  seccionDetalle.style.display = "block";

  // LINEA CORREGIDA: Invocar la función de cálculo matemático sin errores de tipeo
  const stats = calcularEstadisticas(lugar.pronosticoSemanal);

  // Construir el desglose de días por tipo de clima en formato HTML
  let desgloseClimasHTML = "";
  for (const clima in stats.conteo) {
    desgloseClimasHTML += `<li>${clima}: ${stats.conteo[clima]} día(s)</li>`;
  }

  // Inyectar toda la información dinámica en el contenedor de detalles
  seccionDetalle.innerHTML = `
    <button id="btn-volver">← Volver al Inicio</button>
    <h2>Detalles: ${lugar.nombre}</h2>
    <p><strong>Estado Actual:</strong> ${lugar.estadoActual} (${lugar.tempActual}°C)</p>
    
    <div class="bloque-pronostico">
      <h3>Pronóstico Diario</h3>
      <div class="grilla-dias">
        ${lugar.pronosticoSemanal.map(d => `
          <div class="dia-item">
            <h4>${d.dia}</h4>
            <p>${d.estado}</p>
            <span>Min: ${d.min}°C / Max: ${d.max}°C</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="bloque-estadisticas">
      <h3>Estadísticas de la Semana</h3>
      <p><strong>Temperatura Máxima Alcanzada:</strong> ${stats.maxima}°C</p>
      <p><strong>Temperatura Mínima Registrada:</strong> ${stats.minima}°C</p>
      <p><strong>Temperatura Promedio Semanal:</strong> ${stats.promedio}°C</p>
      
      <h4>Distribución de Estados Atmosféricos:</h4>
      <ul>${desgloseClimasHTML}</ul>

      <div class="resumen-caja">
        <p><em>"${stats.resumen}"</em></p>
      </div>
    </div>
  `;

  // Asignar el evento al botón de regreso para volver a la pantalla principal
  document.getElementById("btn-volver").addEventListener("click", renderizarHome);
}