module.exports = {
    get: function(conection, cb)  {
        conection.query("SELECT ta.*,usu.nombre FROM tarjetacredito ta JOIN usuario usu ON ta.id_usuario = usu.id_usuario",cb);
    },
    post: function(conection,datos,cb) {
        conection.query(`INSERT INTO tarjetacredito(numero_tarjeta, fecha_caducidad, csv, id_usuario) VALUES('${datos.numero_tarjeta}', '${datos.fechacaducidad}', '${datos.csv}', '${datos.id_usuario}' '')`,cb);
    },
    update: function(conection,datos,id_tarjeta,cb) {
        conection.query(`UPDATE tarjetacredito SET numero_tarjeta = '${datos.numero_tarjeta}', fecha_caducidad = '${datos.fechacaducidad}', csv = '${datos.csv}', id_usuario = '${datos.id_usuario}' WHERE id_tarjeta = '${id_tarjeta}' `,cb);
    },
    delete: function(conection,id_tarjeta,cb) {
        conection.query(`DELETE FROM tarjetacredito WHERE id_tarjeta = '${id_tarjeta}'`,cb);
    }
    
};
/*INSERT INTO `producto` (`id_producto`, `nom_produc`, `precio`, `categoria`, `stock`, `descripcion`, `imagen`) VALUES (NULL, 'Jabon cara', '12000', '1', '1000', 'este jabon limpia tu cara y es hecho con productos naturales', ''); */