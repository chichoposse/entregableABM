var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController")


router.get('/crear', productsController.renderCrear);
router.post('/crear', productsController.storeCrear);

router.get('/editar/:id', productsController.renderEditar);
router.post('/editar/:id', productsController.saveEditar);

router.get("/destroy/:id",productsController.destroy);


module.exports = router;
