module.exports = {
    get: function(conection, cb)  {
        conection.query("SELECT u.*,r.* FROM usuario u JOIN roles r ON u.id_roles = r.id_roles",cb);
    },
    post: function(conection,datos,cb) {
        conection.query(`INSERT INTO usuario(usuario, contrasena, nombre, correo_electronico, cedula, celular, id_roles) VALUES('${datos.usuario}', '${datos.contrasena}', '${datos.nombre}', '${datos.correo_electronico}', '${datos.cedula}','${datos.celular}','${datos.id_roles}' '')`,cb);
    },
    update: function(conection,datos,id_usuario,cb) {
        conection.query(`UPDATE usuario SET usuario = '${datos.usuario}', contrasena = '${datos.contrasena}', nombre = '${datos.nombre}', correo_electronico = '${datos.correo_electronico}', cedula = '${datos.cedula}', celular = '${datos.celular}', id_roles = '${datos.id_roles}', WHERE id_usuario = '${id_usuario}'`,cb);
    },
    delete: function(conection,id_usuario,cb) {
        conection.query(`DELETE FROM usuario WHERE id_usuario = '${id_usuario}'`,cb);
    }
    
};
/*INSERT INTO `producto` (`id_producto`, `nom_produc`, `precio`, `categoria`, `stock`, `descripcion`, `imagen`) VALUES (NULL, 'Jabon cara', '12000', '1', '1000', 'este jabon limpia tu cara y es hecho con productos naturales', ''); */