module.exports = {
    get: function(conection, cb)  {
        conection.query("SELECT co.*,usu.* FROM comprascarro co JOIN usuario usu ON co.id_usuario = usu.id_usuario",cb);
    },
    post: function(conection,datos,cb) {
        conection.query(`INSERT INTO comprascarro(id_usuario, id_producto, cantidad, total) VALUES('${datos.id_usuario}', '${datos.id_producto}', '${datos.cantidad}', '${datos.total}')`,cb);
    },
    update: function(conection,datos,id_carrocompras,cb) {
        conection.query(`UPDATE producto SET id_usuario = '${datos.id_usuario}', id_producto = '${datos.id_producto}', cantidad = '${datos.cantidad}', total = '${datos.total}' WHERE id_carrocompras = '${id_carrocompras}'`,cb);
    },
    delete: function(conection,id_carrocompras,cb) {
        conection.query(`DELETE FROM producto WHERE id_carrocompras = '${id_carrocompras}'`,cb);
    }
};
/*INSERT INTO `producto` (`id_producto`, `nom_produc`, `precio`, `categoria`, `stock`, `descripcion`, `imagen`) VALUES (NULL, 'Jabon cara', '12000', '1', '1000', 'este jabon limpia tu cara y es hecho con productos naturales', ''); */