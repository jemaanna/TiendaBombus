const { json, request } = require("express");

const controladorusuario  = {};
const modenusuario = require('../modelo/modenusuario');

controladorusuario.ver = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenusuario.get(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
controladorusuario.agregar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenusuario.post(conection,req.body, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se agregó correctamente"});
            
        });
    });

}
controladorusuario.editar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenusuario.update(conection,req.body, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se editó correctamente"});
            
        });
    });

}
controladorusuario.eliminar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modenusuario.delete(conection, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se elimino correctamente"});
            
        });
    });
        

}

module.exports = controladorusuario;