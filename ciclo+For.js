//Has un incremento y decremento
//decremento
/*
let a=15;


for(let     b=10;     b<= a;      a-- ) {
console.log( `el resultado es:  ${a}`);
}


//incremento

let d=15;

for(let     c= 0;   c <= d;  c++)   {
console.log(c);
}

*/

//Ejercicio 2   Incremento y decremento de 3 en 3

let max= 10; min= -10;

//Incremento
for(let  a= 0;   a < max; a  += 3 ){

    console.log(a);
}

//Decremento

for(let a=1 ; a > min; a -= 3){
     console.log(a);
}


//Ejercicio 3  suma incremental

let maximo =5, acumuladorSuma=0;

for(let num=1; num <= maximo; num++){
    

console.log(`${acumuladorSuma}+${num}`);


        acumuladorSuma += num;
        console.log(acumuladorSuma);
}
console.log(acumuladorSuma);