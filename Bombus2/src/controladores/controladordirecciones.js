const { json, request } = require("express");

const controladordirecciones  = {};
const modendirecciones = require('../modelo/modendirecciones');

controladordirecciones.ver = (req, res) => {
    req.getConnection ((error,conection)=>{
        modendirecciones.get(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
controladordirecciones.agregar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modendirecciones.post(conection,req.body, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se agregó correctamente"});
            
        });
    });

}
controladordirecciones.editar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modendirecciones.update(conection,req.body, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se editó correctamente"});
            
        });
    });

}
controladordirecciones.eliminar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modendirecciones.delete(conection, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se elimino correctamente"});
            
        });
    });
        

}

module.exports = controladordirecciones;