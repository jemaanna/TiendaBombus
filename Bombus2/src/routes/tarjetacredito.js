const router = require ('express').Router();
const controladortarjetacredito = require ('../controladores/controladortarjetacredito');

router.get('/viewtarjetapago', controladortarjetacredito.ver);
router.post('/addtarjeta', controladortarjetacredito.agregar);
router.put('/puttarjeta/:id', controladortarjetacredito.editar);
router.delete('/deletetarjeta/:id', controladortarjetacredito.eliminar);






module.exports = router;