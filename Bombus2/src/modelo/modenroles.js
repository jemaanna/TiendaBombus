module.exports = {
    get: function(conection, cb)  {
        conection.query("SELECT  * FROM roles",cb);
    },
    post: function(conection,datos,cb) {
        conection.query(`INSERT INTO roles(tipo) VALUES('${datos.tipo}')`,cb);
    },
    update: function(conection,datos,id_roles,cb) {
        conection.query(`UPDATE roles SET tipo = '${datos.tipo}' WHERE id_roles = '${id_roles}'`,cb);
    },
    delete: function(conection,id_roles,cb) {
        conection.query(`DELETE FROM roles WHERE id_roles = '${id_roles}'`,cb);
    }
    
};
/*INSERT INTO `producto` (`id_producto`, `nom_produc`, `precio`, `categoria`, `stock`, `descripcion`, `imagen`) VALUES (NULL, 'Jabon cara', '12000', '1', '1000', 'este jabon limpia tu cara y es hecho con productos naturales', ''); */