module.exports = {
    get: function(conection, cb)  {
        conection.query("SELECT usu.nombre, pro.nom_produc, co.cantidad, co.total FROM comprascarro co JOIN usuario usu ON co.id_usuario = usu.id_usuario JOIN producto pro ON co.id_producto = pro.id_producto",cb);
    },
    post: function(conection,datos,cb) {
        conection.query(`INSERT INTO comprascarro(id_usuario, id_producto, cantidad, total) VALUES('${datos.id_usuario}', '${datos.id_producto}', '${datos.cantidad}', '${datos.total}')`,cb);
    },
    update: function(conection,datos,id_carrocompras,cb) {
        conection.query(`UPDATE comprascarro SET id_usuario = '${datos.id_usuario}', id_producto = '${datos.id_producto}', cantidad = '${datos.cantidad}', total = '${datos.total}' WHERE id_carrocompras = '${id_carrocompras}'`,cb);
    },
    delete: function(conection,id_carrocompras,cb) {
        conection.query(`DELETE FROM comprascarro WHERE id_carrocompras = '${id_carrocompras}'`,cb);
    }
};
