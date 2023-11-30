const {response} = require('express');
const { Categoria } = require('../models');

//obtener categoria paginado, total, populate
const obtenerCategoria = async(req, res=response)=>{
   const {limit=5, desde=0} = req.query;
   console.log(req.query)
   const query = {estado: true}

 
   const [total, categorias] = await Promise.all([
     Categoria.countDocuments(),
     Categoria.find(query)
        .populate('usuario','nombre')
        .skip(Number(desde))
        .limit(Number(limit))
   ]);
  
   res.json({
       total,
       categorias
   })
}

const crearCategoria = async(req,res=response) =>{
   const nombre = req.body.nombre.toUpperCase();
   
   const categoriaDB = await Categoria.findOne({nombre});

   if(categoriaDB){
    return res.status(400).json({
        msg: `La categoria ${ categoriaDB.nombre }, ya existe`
    })
   }

   //Generar la data a guardar
   const data = {
    nombre,
    usuario:req.usuario._id
   }

   const categoria = new Categoria(data);

   //Guardar DB
   await categoria.save();

   res.status(201).json(categoria);
}


module.exports = {
    crearCategoria,
    obtenerCategoria
}