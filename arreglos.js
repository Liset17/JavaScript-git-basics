let miArreglo=[];


miArreglo[0]= "W";
miArreglo[1]= `i`;
miArreglo[3]=`bely`;
miArreglo[4]= 133;
miArreglo[5]=7177;

console.log(`Mi arreglo en la posicion cero es: ${miArreglo[0]}`);

// Recorrer un Array
let arreglo2=[19,95,17,7,3];

for (let i =0 ; i<arreglo2.length; i++){

    //De forma censilla
console.log( arreglo2[i])


// la opcion de Arreglo[${i}] es para saber los arrays que tenemos
console.log( `Arreglo[${i}] = ${arreglo2[i]} `);

}




let matriz= [[80,85,90,95],[100,200,300,400],[500,600,700,800,10]];

//Nº de renglones
console.log(matriz.length);

//Nº de columnas
console.log(matriz[0].length);
console.log(matriz[2].length);

// Recorrer una Matriz

for(reng=0 ; reng < matriz; reng++){
    
    for(colum = 0;  colum < matriz[reng]; colum++)        {

        console.log(`Element[${reng}] [${colum}] = ${matriz[reng][colum]}`);
    }
}