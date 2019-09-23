function palindroma(palabra){
    let pl2="";
    for(let i=palabra.length-1;i>=0;i--){
        pl2 = pl2+palabra[i];
    }
    
    if(palabra==pl2){
        console.log("es palindroma");
    }else{
        console.log("NO es palindroma");
    }
}