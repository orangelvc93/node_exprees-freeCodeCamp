function saludar(nombre) {
    return `Hola! Bienvenidos a ${nombre}`
}


function saludarHolaMundo() {
    return "Hola Mundo!";
}

/* 
module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo; */

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo,
}