/*let nombre = prompt("Hola, ¿Como te llamas?");
console.log(nombre);

let apellido = prompt("¿Cual es tu apellido?");
console.log(apellido);

let edad = prompt("¿Que edad tenes?");
console.log(edad);*/

/*if (edad >= 18) {
  alert("¡¡Bienvenido!!");
  let numero = prompt("¿Decime un numero del 0 al 10?");
  for (numero; numero < 10; numero++) {
    if (numero <= 4) {
      alert("Es menor que 5");
      break;
    } else if (numero > 5) {
      console.log(numero);
    }
  }
} else if (edad < 18) {
  alert("Sos muy chico para entrar.");
}*/

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

/*function anoNacimiento() {
  const edadNacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));
  return edadNacimiento;
}

function anoActual() {
  const edadActual = parseInt(prompt("Ingresa en que año estamos"));
  return edadActual;
}

function numeroElección() {
  const numeroElección = parseInt(prompt("Ingresa un numero"));
  return numeroElección;
}

function resta(anoNacimiento, anoActual) {
  const resta = anoActual - anoNacimiento;
  return resta;
}

function sumaNumero(resta, numeroElección) {
  const sumaNumero = resta + numeroElección;
  return sumaNumero;
}

const ano1 = anoNacimiento();
const ano2 = anoActual();
const num1 = numeroElección();

const restaNumeros = resta(ano1, ano2);
const resultadoFinal = sumaNumero(restaNumeros);

console.log(resultadoFinal);*/

/*Aca empieza Trabajo final*/

function bienvenida() {
  const darBienvenida = alert("¡Hola Bienvenido a ¿Que hago?");
  const ayuda = prompt("¿En que te ayudamos hoy?");
  return darBienvenida;
}
bienvenida();

function sexo() {
  const pregSex = prompt("¿Sos hombre o sos mujer?");
  if (pregSex == "hombre") {
    alert("Podes Ingresar");
  } else if (pregSex == "mujer") {
    alert("Podes Ingresar");
  }
}
sexo();
