let nombre = prompt("Hola, ¿Como te llamas?");
console.log(nombre);

let apellido = prompt("¿Cual es tu apellido?");
console.log(apellido);

let edad = prompt("¿Que edad tenes?");
console.log(edad);

if (edad >= 18) {
  alert("¡¡Bienvenido!!");
} else if (edad < 18) {
  alert("Sos muy chico para entrar.");
}

/*let edadFutura = prompt("¿Elegí un numero del 0 al 10?");
let sumaEdades = parseInt(edad) + parseInt(edadFutura);
console.log(sumaEdades);*/

/*alert(
  "Vos te llamas " +
    nombre +
    " " +
    apellido +
    " y tenes " +
    edad +
    " años,en " +
    edadFutura +
    " años vas a tener," +
    sumaEdades +
    ""
);*/
