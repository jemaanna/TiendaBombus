const { json, request } = require("express");

const controladorcarritocompras  = {};
const modencarritocompras = require('../modelo/modencarritocompras');

controladorcarritocompras.ver = (req, res) => {
    req.getConnection ((error,conection)=>{
        modencarritocompras.get(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
controladorcarritocompras.agregar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modencarritocompras.post(conection,req.body, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se agregó correctamente"});
            
        });
    });

}
controladorcarritocompras.editar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modencarritocompras.update(conection,req.body, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se editó correctamente"});
            
        });
    });

}
controladorcarritocompras.eliminar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modencarritocompras.delete(conection, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se elimino correctamente"});
            
        });
    });
        

}

module.exports = controladorcarritocompras;