//Declaracion y almacenamiento de una variable a una funcion asincrona 
const datosJson = async function obtenerDatos(){
    //Declaracion de la variable donde se guardara el objeto del request al fetch
    let datos;
    //Manejo de errores con try - catch
    try {
        datos = await fetch("https://api.chucknorris.io/jokes/random")
        datos = await datos.json()
        console.log(datos)
    } catch (error) {
        console.log("Error: ", error)   
    }
    return datos; //Retorno de la variable
}
//Exportacion por default - CommonJS
module.exports = datosJson; 
