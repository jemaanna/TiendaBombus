const router = require ('express').Router();
const controladorproducto = require ('../controladores/controladorproducto');

router.get('/viewproduct', controladorproducto.ver);
router.post('/addproduct', controladorproducto.agregar);
router.put('/putproduct/:id', controladorproducto.editar);
router.delete('/deleteproduct/:id', controladorproducto.eliminar);
router.get('/viewventafavorita', controladorproducto.verproductofavorito);
router.get('/viewclienteconmayorcompra', controladorproducto.clientevip);





module.exports = router;