const { json, request } = require("express");

const controladortarjetacredito  = {};
const modentarjetacredito = require('../modelo/modentarjetacredito');

controladortarjetacredito.ver = (req, res) => {
    req.getConnection ((error,conection)=>{
        modentarjetacredito.get(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
controladortarjetacredito.agregar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modentarjetacredito.post(conection,req.body, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se agregó correctamente"});
            
        });
    });

}
controladortarjetacredito.editar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modentarjetacredito.update(conection,req.body, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se editó correctamente"});
            
        });
    });

}
controladortarjetacredito.eliminar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modentarjetacredito.delete(conection, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se elimino correctamente"});
            
        });
    });
        

}
controladortarjetacredito.verproductofavorito = (req, res) => {
    req.getConnection ((error,conection)=>{
        modentarjetacredito.verproductomasvendido(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
controladortarjetacredito.clientevip = (req, res) => {
    req.getConnection ((error,conection)=>{
        modentarjetacredito.clienteconmascompras(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
module.exports = controladortarjetacredito;