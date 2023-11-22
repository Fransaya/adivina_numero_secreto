const NUMAleatorio=()=>{
    let numAleatory=Math.floor(Math.random()*100)+1;
    return numAleatory;
};

const VERIFICARADIVINADO=(numUsu,numAletorio)=>{
    let bandera=false;
    if(numUsu!=numAletorio){
        if(numUsu>numAletorio){
            console.log("Demasiado alto!!")
        }else{
            console.log("Demasiado Bajo!!")
        };
    }else{console.log("FELICITACIONES !! Haz Adivinado el numero")
        bandera=true;
    };
    return bandera;
};


module.exports={NUMAleatorio,VERIFICARADIVINADO};