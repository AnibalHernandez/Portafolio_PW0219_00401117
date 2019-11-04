var mongoose = require('mongoose');
let database='RegistroApi';
let port='27817';
let host='localhost';
let uri= `mongodb://${host}:${port}:${database}`;


const connectDB = ()=>{
    mongoose.Promise=global.Promise;

    mongoose
    .connect(uri, { useNewUrlParser: true })
    .them(()=>{console.log("Conexion a la base de datos fue exitosa")})
    .catch(()=>{console.log("ERROR")});
}

module.exports ={
    connectDB,
}