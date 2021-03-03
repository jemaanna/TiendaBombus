const { json, request } = require("express");

const controladorroles  = {};
const modenroles = require('../modelo/modenroles');

controladorroles.ver = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenroles.get(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
controladorroles.agregar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenroles.post(conection,req.body, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se agregó correctamente"});
            
        });
    });

}
controladorroles.editar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenroles.update(conection,req.body, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se editó correctamente"});
            
        });
    });

}
controladorroles.eliminar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenroles.delete(conection, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se elimino correctamente"});
            
        });
    });
        

}
controladorroles.verproductofavorito = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenroles.verproductomasvendido(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
controladorroles.clientevip = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenroles.clienteconmascompras(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
module.exports = controladorroles;