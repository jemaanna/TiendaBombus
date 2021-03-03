const { json, request } = require("express");

const controladorproducto  = {};
const modenproducto = require('../modelo/modenproducto');

controladorproducto.ver = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenproducto.get(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
controladorproducto.agregar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenproducto.post(conection,req.body, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se agregó correctamente"});
            
        });
    });

}
controladorproducto.editar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenproducto.update(conection,req.body, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se editó correctamente"});
            
        });
    });

}
controladorproducto.eliminar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenproducto.delete(conection, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se elimino correctamente"});
            
        });
    });
        

}
controladorproducto.verproductofavorito = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenproducto.verproductomasvendido(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
controladorproducto.clientevip = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenproducto.clienteconmascompras(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
module.exports = controladorproducto;