module.exports = {
    get: function(conection, cb)  {
        conection.query("SELECT  * FROM categoria",cb);
    },
    post: function(conection,datos,cb) {
        conection.query(`INSERT INTO categoria(categoria) VALUES('${datos.categoria}')`,cb);
    },
    update: function(conection,datos,id_categoria,cb) {
       -- conection.query(`UPDATE id_categoria SET categoria = '${datos.categoria}', WHERE id_categoria = '${id_categoria}'`,cb);
    },
    delete: function(conection,id_categoria,cb) {
        conection.query(`DELETE FROM categoria WHERE id_categoria = '${id_categoria}'`,cb);
    }
    
};
/*INSERT INTO `producto` (`id_producto`, `nom_produc`, `precio`, `categoria`, `stock`, `descripcion`, `imagen`) VALUES (NULL, 'Jabon cara', '12000', '1', '1000', 'este jabon limpia tu cara y es hecho con productos naturales', ''); */