// Condicionales

// document.write("<strong>Hola mundo</strong>")

console.log("Condicionales")
const nombre = "Pedro";
var nombre2 = ""
const apellido = "Martinez";
var saludo = ""
var edad = 2;

if(edad <= 13){
    console.log(nombre + " " + apellido + " es un niño, tiene " + edad + " años");
}else if(edad > 13 && edad <=17) {
    console.log(nombre + " " + apellido + " es es un adolescente, tiene " + edad + " años");
}else {
    console.log(nombre + " " + apellido + " es es un adulto, tiene " + edad + " años");
}

// Ciclos repetivos

// Ciclo Para o For

// Codigo PseInt
// Definir  i Como Entero;
// Para i<- 0 Hasta 10 Con Paso 1 Hacer
//     Imprimir i;
// Fin Para

// i+=1
console.log("i+=1 ---> Incremento de 1")
for (let i = 0; i < 10; i+=1) {
    console.log("i = " + i);
}

console.log("i+=2 ---> Incremento de 2")
// i+=2
for (let i = 0; i < 10; i+=2) {
    console.log("i = " + i);
}

console.log("i+=3 ---> Incremento de 3")
// i+=3
for (let i = 0; i < 10; i+=3) {
    console.log("i = " + i);
}

// Ciclo Mientras o While
// Codigo Pseint
// Mientras expresion_logica Hacer
//     secuencia_de_acciones
// Fin Mientras

var indice = 0;
while(indice <= 20) {
    // alert("indice = " + indice);
    console.log("indice = " + indice);
    indice++; //Solo incremento de 1
}


// Ciclo Do While o Repetir Mientras
// Repetir
//     secuencia_de_acciones
// Hasta Que expresion_logica

var index = 0;
do {
    // document.write("Index = " + index + "<br>")
    index++;
} while (index <= 50);

// Funciones
// saludo = "Hola"
// nombre2 = "Juan"
// document.write(saludo + " " + nombre2 + "<br>");

// saludo = "Buenos días"
// nombre2 = "Maria"
// document.write(saludo + " " + nombre2 + "<br>");

// saludo = "Buenas noches"
// nombre2 = "Laura"
// document.write(saludo + " " + nombre2 + "<br>");

function saludar(saludo, nombre) {
    document.write(saludo + " " + nombre + "<br>");
}

// saludar("Hola","Andres");
// saludar("Hello","Mark");

function calculadora(numero1,numero2,operacion) {
    if(operacion == "suma"){
        return numero1 + numero2;
    }else if(operacion == "resta"){
        return numero1 - numero2;
    }else if(operacion == "multiplicacion"){
        return numero1 * numero2;
    }else if(operacion == "division"){
        if(numero2 == 0){
            return 0;
        }else{
            return numero1 / numero2;
        }
    }
}

var resultado = calculadora(4, 5, "suma");

document.write("Resultado = " + resultado + "<br>")

var resultado = calculadora(4, 5, "resta");

document.write("Resultado = " + resultado + "<br>")

var resultado = calculadora(4, 5, "multiplicacion");

document.write("Resultado = " + resultado + "<br>")

var resultado = calculadora(4, 5, "division");

document.write("Resultado = " + resultado + "<br>")

var resultado = calculadora(4, 0, "division");

document.write("Resultado = " + resultado + "<br>")





