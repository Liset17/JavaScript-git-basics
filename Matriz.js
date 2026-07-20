//Sintaxis

let matriiz=[[1],[1,1],[1,1,1],[1,1,1,1]]  ;

//Cantidad de renglones
console.log(matriiz.length);

//Cantidad de columnas
console.log(matriiz[0]);
console.log(matriiz[1]);
console.log(matriiz[2]);
console.log(matriiz[3]);


for(let rec=0; rec< matriiz; rec++){// aqui recorremos el renglon
        //Adentro recorremos las columnas
        for(let colum=0; colum<matriiz;colum++)
            console.log( `Elementos[${rec},${colum}] = ${matriiz[rec][colum]}`);
}