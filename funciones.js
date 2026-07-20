// EJERCICIO DE FUNCION  1

//1.Declaracion de funcion
function sumar(a,b){

    let resultadoSuma= a+b;

    return resultadoSuma;
}

//2. Llamar o invocar la funcion

let argA =5, argB=7;

let resultado = sumar(argA , argB);

console.log(`Resultado suma: ${resultado}`);



//EJERCICIO DE FUNCION  2

function multiplicacion(i,j){
//Declaramos la variable en que se va almacenar la operacion
    let multiplaca= i*j;

    return multiplaca
}

let opA= 2, opB= 3;

let resulta = multiplicacion(opA, opB);

console.log(`eL resultado es: ${resulta}`);




//EJERCICIO DE FUNCION 3

//Declaramos funsion
function dividir(c,d){

 let division= c/d;
 return division;
}

//Ejecutamos accion
let divA= 6;
let  divB= 2;

let res= dividir(divA, divB) ;

console.log(`El resultado es: ${res}`);



//EJERCICIO DE FUNCION 4

function restar(r,s) {
    
 let  restando= r-s;
    return restando;
}

let resA= 10, resB =5;

let restando=restar(resA,resB);

console.log(`el resultado de la resta es: ${restando}`);


//EJERCICIO DE FUNCION 5

function sum(uno,dos) {
    let suma= uno+dos;
    return suma;
}

let sumA=17,sumB=3;

let sumado= sum(sumA,sumB);


console.log(`El resultado es: ${sumado}`);




//EJERCICIO DE FUNCION 6

function final(aa,bb) {
    
   let finalizado=aa*bb

    return finalizado ;
}

let multi1= 10,multi2= 5;

let feliz= final(multi1,multi2);

console.log(`El resultado sera: ${feliz}`);

