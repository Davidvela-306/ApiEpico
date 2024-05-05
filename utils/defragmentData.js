function formatearFecha(fechaString) {
  // Crear un objeto Date a partir de la cadena de fecha
  const fecha = new Date(fechaString);

  // Obtener el año, mes y día de forma separada
  const anio = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript empiezan en 0
  const dia = String(fecha.getDate()).padStart(2, "0");

  // Construir la fecha formateada
  const fechaFormateada = `${anio}/${mes}/${dia}`;

  return fechaFormateada;
}
export default formatearFecha