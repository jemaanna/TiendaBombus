const { json, request } = require("express");

const controladorcategorias  = {};
const modencategoria = require('../modelo/modencategoria');

controladorcategorias.ver = (req, res) => {
    req.getConnection ((error,conection)=>{
        modencategoria.get(conection, (error,datos) =>{
            if (error){
                res.json(error);
            }
            res.json(datos);
            
        });
    });

}
controladorcategorias.agregar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modencategoria.post(conection,req.body, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se agregó correctamente"});
            
        });
    });

}
controladorcategorias.editar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modencategoria.update(conection,req.body, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se editó correctamente"});
            
        });
    });

}
controladorcategorias.eliminar = (req, res) => {
    req.getConnection ((error,conection)=>{
        modencategoria.delete(conection, req.params.id, (error,mensaje) =>{
            if (error){
                res.json(error);
            }
            res.json({mensaje:"se elimino correctamente"});
            
        });
    });
        

}

module.exports = controladorcategorias;