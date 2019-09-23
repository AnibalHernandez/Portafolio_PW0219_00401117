function ocurrenciasNumero(numero,arr){
    let total=0;
    for(let datos of arr){
        if(numero===datos){
            total++;
        }
    }
    console.log("Ocurrencias: "+total);
}