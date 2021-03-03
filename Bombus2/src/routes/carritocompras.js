const router = require ('express').Router();
const controladorcarritocompras = require ('../controladores/controladorcarritocompras');

router.get('/viewcarrocompras', controladorcarritocompras.ver);
router.post('/addcompras', controladorcarritocompras.agregar);
router.put('/putcompras/:id', controladorcarritocompras.editar);
router.delete('/deletecompras/:id', controladorcarritocompras.eliminar);






module.exports = router;