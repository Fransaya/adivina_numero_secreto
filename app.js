const readlyne=require('readline-sync');

const {NUMAleatorio,VERIFICARADIVINADO} = require('./functions');


let numAleatory=NUMAleatorio();

do{
    numUsu=readlyne.question("Ingrese un numero: ");
}while(VERIFICARADIVINADO(numUsu,numAleatory)==false);
