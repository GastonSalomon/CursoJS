/*Aca empieza Trabajo final*/

const queComo = (document.getElementById("QC").onclick = function () {
  preguntasQC();
});

//Preguntas de ingresoQC//
function preguntasQC() {
  let sexo = prompt("¿Cual es tu sexo?");
  let nombre = prompt("¿Cual es tu nombre?");
  let edad = prompt("¿Cual es tu edad?");
  let lugar = prompt("¿En que ciudad estas ahora?");

  const baseDatosQC = [];
  baseDatosQC.push(sexo);
  baseDatosQC.push(nombre);
  baseDatosQC.push(edad);
  baseDatosQC.push(lugar);
}

/*VER DESPUES
class ingresoQC {
  constructor(sexo, nombre, edad, lugar) {
    this.sexo = sexo || undefined;
    this.nombre = nombre || undefined;
    this.edad = edad || undefined;
    this.lugar = lugar || undefined;
  }
}
const datosQC = [];*/

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

/*function sexo() {
  const pregSex = prompt("¿Sos hombre o sos mujer?");
  if (pregSex == "hombre") {
    alert("Podes Ingresar");
  } else if (pregSex == "mujer") {
    alert("Podes Ingresar");
  }
}
sexo();*/

/*class Profesor{
  constructor(nombre,apellido){
      this.nombre = nombre|| undefined;
      this.apellido = apellido|| undefined;
  }
}

class Alumnos{
  constructor(nombre,apellido,edad){
      this.nombre = nombre || undefined;
      this.apellido = apellido || undefined;
      this.edad = edad || edad || undefined;
  }
}

let espacioMaximo = 10;
const listaAlumnos = [];
const listaProfesor = [];


// funcion log de profes
function loginProfesor(){

  let nombre = prompt('Hola Profesor ingrese su Nombre');
  let apellido = prompt('Ingrese su apellido');

  let  profesor1 = new Profesor(nombre,apellido);

  alert( 'Bienvenido Profesor '+ profesor1.nombre +' ' + profesor1.apellido);   
}

loginProfesor();

let alumnosInscriptos = solicitarAlumnos();

//funcion registrar alumnos a la clase
function solicitarAlumnos() {
  return parseFloat(prompt(`Ingrese la Cantidad de alumnos inscriptos a su curso`));  
}


// calculo de espacio disponible
function diferencia( a,b){
  return a - b;
}

//funcion agregar al array
function agregarAlumnos(){
  listaAlumnos.push(nuevoAlumno);
}

//Registro de alumnos
function registrarAlumnos() {

  let confirmacion = confirm( 'Ingreso ' + alumnosInscriptos + ' alumnos inscriptos. Es Correcto?');

  console.log(confirmacion);

  if(confirmacion){

       for (let i = 0; i < alumnosInscriptos; i++) {
           let nombre = prompt('Ingrese el nombre del alumno');
           let apellido = prompt('Ingrese apellido del alumno');
           let edad = prompt('Ingrese la edad');

          nuevoAlumno = new Alumnos(nombre,apellido,edad);
          agregarAlumnos();
          console.log(nuevoAlumno);
          console.log(listaAlumnos);
       }
  }
  else{
      alert('Tiene 48 hs para cargar los alumnos, no lo olvide.');
  }
}

registrarAlumnos();



while (alumnosInscriptos > 0) {

  if (alumnosInscriptos < espacioMaximo) {

      let resultado = diferencia(espacioMaximo,alumnosInscriptos);
      alert(`Se registraron los alumnos con exito cuenta con espacio suficiente para agregar ${resultado} alumnos a la clase`);
      break;
  }
  else if(alumnosInscriptos > espacioMaximo) {
      let resultado = diferencia(alumnosInscriptos,espacioMaximo);
      alert(`Los alumnos se registraon con exito pero tiene demaciados alumnos inscriptos para esta clase, debera reasignar camada para ${resultado} alumnos`);
      break;
  }
  else {
      alert('Excelente!!... el aula esta completa.');
      break;
  }

}
*/

/*class OPCBIENVENIDA {
  constructor(sexo, edad, vivis) {
    this.sexo = sexo || undefined;
    this.edad = edad || undefined;
    this.vivis = vivis || undefined;
  }
}

function bienvenida() {
  const darBienvenida = alert("¡Hola Bienvenido a ¿Que Como?");
  const ayuda = confirm(
    "¿Queres que te ayudemos? , te vamos a pedir que ingreses algunos datos."
  );
  console.log(ayuda);
  if (ayuda) {
    for (let i = 0; i < 1; i++) {
      const opc0 = prompt("¿Cual es tu sexo?");
      const opc1 = prompt("¿Que edad tenes?");
      const opc2 = prompt("¿Cual es tu nombre?");
      const opc3 = prompt("¿Donde vivis?");
      console.log(opc0, opc1, opc2, opc3);
    }
  } else {
    alert("Elegiste no responder las preguntas. !Te esperamos la proxima¡");
  }
}
bienvenida();*/

/*Ejemplo
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos) producto.sumaIva();*/
