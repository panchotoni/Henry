function saludar(saludo) { //ESTO ES UNA FUNCION QUE DENTRO TIENE OTRA
  // var saludo = "Hola"
  return function (nombre) {
    console.log(saludo + " " + nombre);
  };
}

var saludarHola = saludar("Hola"); //AQUI SE INVOCA UNA LA FUNCION SALUDAR CON EL PARAMETRO (HOLA), ES DECIR QUE SALUDARHOLA QUEDRIA SIENDO OTRA FUNCION, Y EN LA QUE SE GUARDA EL VALOR DE HOLA:
                                   // function (nombre) {
                                   //console.log(saludo + " " + nombre);
                                   //};
var saludarHello = saludar("Hello");

// saludo = Hola
// saludarHola = function (nombre) {
//     console.log(saludo + " " + nombre);
// };

saludarHola("Jorge");
saludarHola("Ezequiel");
saludarHola("Lucila");
saludarHello("George");

//******************************************************** */

function crearContador() {
  var count = 0;

  return function () {
    count++;
    return count;
  };
}

var contador1 = crearContador();
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());

var contador2 = crearContador();
console.log(contador2());
console.log(contador2());
console.log(contador2());

// CONTADOR 1 ==========> count = 5
// function () {
//     count++;
//     return count;
//   };

//BIND, CALL Y APPLY!

var persona = {
    nombre: "Ivan",
    apellido: "Escalante",
  };

  var logNombre = function () {
    console.log(this.nombre); //EL CONTEXTO DE ESTA FUNCION ES GLOBAL EN UN PRINCIPIO. SI HACEMOS DE ESTA FORMA CON THIS NO NOS REFERIMOS AL OBJETO PERSONA 
  };

  logNombre();

  var logNombrePersona = logNombre.bind(persona); //BIND ES UN METODO QUE RETORNA OTRA FUNCION,EN ESTE CASO LOGNOMBRE Y REMPLAZA EL VALOR THE THIS DE LA FUNCION POR EL PARAMETRO QUE PASAMOS
                            // var logNombre = function () {
                            //     console.log(persona.nombre); 
                            // };
  // el primer parametro de bind es el this!
  logNombrePersona();

 // BIND DEVUELVE UNA FUNCION!