module.exports = {
    get: function(conection, cb)  {
        conection.query("SELECT p.*, c.*  FROM producto p JOIN categoria c  ON p.categoria = c.id_categoria ",cb);
    },
    post: function(conection,datos,cb) {
        conection.query(`INSERT INTO producto(nom_produc, precio, categoria, stock, descripcion, imagen) VALUES('${datos.nom_produc}', '${datos.precio}', '${datos.categoria}', '${datos.stock}', '${datos.descripcion}', '')`,cb);
    },
    update: function(conection,datos,id_producto,cb) {
        conection.query(`UPDATE producto SET nom_produc = '${datos.nom_produc}', precio = '${datos.precio}', categoria = '${datos.categoria}', stock = '${datos.stock}', descripcion = '${datos.descripcion}', imagen = '' WHERE id_producto = '${id_producto}'`,cb);
    },
    delete: function(conection,id_producto,cb) {
        conection.query(`DELETE FROM producto WHERE id_producto = '${id_producto}'`,cb);
    },
    verproductomasvendido: function(conection, cb)  {
        conection.query("SELECT MAX(c.id_producto) AS TotalVenta, p.nom_produc FROM comprascarro c JOIN producto p ON c.id_producto = p.id_producto GROUP BY c.id_producto LIMIT 0, 1",cb);
    },
    clienteconmascompras: function(conection, cb)  {
        conection.query("SELECT MAX(c.id_usuario) AS clienteconmayorcompra, u.nombre FROM comprascarro c JOIN usuario u ON c.id_usuario = u.id_usuario GROUP BY c.id_usuario LIMIT 0, 1",cb);
    }
};
/*INSERT INTO `producto` (`id_producto`, `nom_produc`, `precio`, `categoria`, `stock`, `descripcion`, `imagen`) VALUES (NULL, 'Jabon cara', '12000', '1', '1000', 'este jabon limpia tu cara y es hecho con productos naturales', ''); */