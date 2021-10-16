// apenas carga la pagina se activa este codigo
document.addEventListener('DOMContentLoaded', function() {
  // Resalta el Div Actual segun el boton al que se presiona
  mostrarSeccion();
  // inicia la otra función, la cual se activara cuando se de click
  eventListeners();
});
// inicia en la pagina 0
let pagina = 0;
function eventListeners() {
  cambiarSeccion();
}
// esta se activa apenas se abre el documento
function mostrarSeccion() {

  // Eliminar mostrar-seccion de la sección anterior
  const seccionAnterior = document.querySelector('.mostrar-seccion');
  if( seccionAnterior ) {
      seccionAnterior.classList.remove('mostrar-seccion');
  }
  // muestra la sección a la que se de click
  const seccionActual = document.querySelector(`#paso-${pagina}`);
  seccionActual.classList.add('mostrar-seccion');

  // Eliminar la clase de actual en el boton anteriormente presionado
  const botonAnterior = document.querySelector('.menu a.actual');
  if(botonAnterior) {
      botonAnterior.classList.remove('actual');
  }
 
  // Resalta el boton Actual que se seleccionó
  const boton = document.querySelector(`[data-paso="${pagina}"]`);
  boton.classList.add('actual');
}
// se activa al dar click
function cambiarSeccion() {
  // llama todos los botones
  const enlaces = document.querySelectorAll('.menu a');
  // según el botón presionado, muestra el código
  enlaces.forEach( enlace => {
      enlace.addEventListener('click', e => {
          e.preventDefault();
          pagina = parseInt(e.target.dataset.paso);

          // Llamar la función de mostrar sección
          mostrarSeccion();

      })
  })
}