var tamañoTotal = 30;
var contenedor = []

function hashAbrigos(dni, nombre) {
    return (nombre.length + dni) % 30
}

var persona1 = {
    dni: 1578787214,
    nombre: "Agustin",
    abrigo: 'negro'
}

var persona2 = {
    dni: 87972412,
    nombre: "Fernando",
    abrigo: 'rojo'
}

var persona3 = {
    dni: 999999999,
    nombre: "Luis",
    abrigo: 'azul'
}

var posicion = hashAbrigos(persona1.dni, persona1.nombre)
contenedor[posicion] = persona1.abrigo

var posicion = hashAbrigos(persona1.dni, persona1.nombre)
contenedor[posicion] = persona2.abrigo

var posicion = hashAbrigos(persona3.dni, persona3.nombre)
contenedor[posicion] = persona3.abrigo

console.log(contenedor);
