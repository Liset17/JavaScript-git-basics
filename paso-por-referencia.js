function cambiarValor(parametro) {
    parametro[0]=20;
}

let arreglo= [10];
console.log(`Su valor original es: ${arreglo[0]}`);

cambiarValor(arreglo);

console.log(`Nuevo valor: ${arreglo[0]}`);

