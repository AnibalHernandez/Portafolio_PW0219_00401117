function sumaNumeros(arr){
    let suma=0;
    for(let i =0; i<arr.length;i++){
        suma =suma+arr[i];
    }
    let promedio = suma / arr.length;
    console.log("Promedio: "+promedio);
}