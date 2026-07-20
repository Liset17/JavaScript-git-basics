
const MayorEdad= 18;
let edadUsuario=20;

if( edadUsuario >= MayorEdad )
{
console.log(` El usuario tiene ${edadUsuario} es mayor de edad`);
}
else{
    console.log(`El usuario de edad ${edadUsuario} es menor de edad`);
}

//Operador Ternario

(edadUsuario>18)? console.log(`Eres mayor de edad`): console.log(`Eres menor de edad`);
