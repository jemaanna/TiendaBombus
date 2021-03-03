const router = require ('express').Router();
const controladorroles = require ('../controladores/controladorroles');

router.get('/viewroles', controladorroles.ver);
router.post('/addroles', controladorroles.agregar);
router.put('/putroles/:id', controladorroles.editar);
router.delete('/deleteroles/:id', controladorroles.eliminar);






module.exports = router;