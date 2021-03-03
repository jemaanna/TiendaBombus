const router = require ('express').Router();
const controladorusuario = require ('../controladores/controladorusuario');

router.get('/viewusuario', controladorusuario.ver);
router.post('/addusuario', controladorusuario.agregar);
router.put('/putusuario/:id', controladorusuario.editar);
router.delete('/deleteusuario/:id', controladorusuario.eliminar);






module.exports = router;