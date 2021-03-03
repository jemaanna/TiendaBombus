module.exports = {
    get: function(conection, cb)  {
        conection.query("SELECT * FROM direcciones",cb);
    },
    post: function(conection,datos,cb) {
        conection.query(`INSERT INTO direcciones(direccion, id_usuario) VALUES('${datos.direccion}','${datos.id_direcciones}' )`,cb);
    },
    update: function(conection,datos,id_direcciones,cb) {
        conection.query(`UPDATE id_direcciones SET direcciones = '${datos.direccion}', id_direcciones = '${datos.id_direcciones}', WHERE id_direcciones = '${id_direcciones}'`,cb);
    },
    delete: function(conection,id_direcciones,cb) {
        conection.query(`DELETE FROM direcciones WHERE id_direcciones = '${id_direcciones}'`,cb);
    }
    
};
/*INSERT INTO `producto` (`id_producto`, `nom_produc`, `precio`, `categoria`, `stock`, `descripcion`, `imagen`) VALUES (NULL, 'Jabon cara', '12000', '1', '1000', 'este jabon limpia tu cara y es hecho con productos naturales', ''); */