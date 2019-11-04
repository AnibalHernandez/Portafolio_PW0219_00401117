var express = require("express");
var router = express.Router();
var Register = require("../models/register");

/* GET home page. */
router.get("/register", function(request, response, next) {
  Register.find((error,registers)=>{
    if(error){
      response.status(500).json({message: "Error interno del sistema"});
    }
    if(registers){
      response.status(200).json(registers);
    }else{
      response.status(404).json({message:"No hay registros"});
    }
  })
});

module.exports = router;
