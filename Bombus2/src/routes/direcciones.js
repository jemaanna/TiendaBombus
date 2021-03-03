const router = require ('express').Router();
const controladordirecciones = require ('../controladores/controladordirecciones');

router.get('/viewdirecciones', controladordirecciones.ver);
router.post('/adddirecciones', controladordirecciones.agregar);
router.put('/putdirecciones/:id', controladordirecciones.editar);
router.delete('/deletedirecciones/:id', controladordirecciones.eliminar);






module.exports = router;