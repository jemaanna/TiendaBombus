const router = require ('express').Router();
const controladorcategoria = require ('../controladores/controladorcategoria');

router.get('/viewcategoria', controladorcategoria.ver);
router.post('/addcategoria', controladorcategoria.agregar);
router.put('/putcategoria/:id', controladorcategoria.editar);
router.delete('/deletecategoria/:id', controladorcategoria.eliminar);






module.exports = router;