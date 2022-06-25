
const { Router } = require("express");
const router = Router();
// La llave lo conviene 
const {getCliente,addCliente} = require("../controllers/clientes");

//router.get("/")

router.get("/",getCliente);
router.post("/AddCliente",addCliente);


// Exportando esto ya podemos acceder al metodo. 
module.exports = router; 

