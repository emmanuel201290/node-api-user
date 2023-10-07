const { response, request } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');


const usuariosGet = async(req = request, res = response)=>{

    const {limite=5, desde=0} = req.query;
    const query = {estado: true};

    ///arreglos de promesas. Si una de ellas da error, todas daran error
    const [total , usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        await Usuario.find(query)
         .skip(Number(desde))
         .limit(Number(limite))
    ])

    res.status(200).json({
        total,
        usuarios
    }
  )}

  const usuariosPut = async (req = request, res = response)=>{
   
    const {id} = req.params;
    const {__id,password, google, correo, ...resto} = req.body;
   
    //TODO validar contra base de datos.
    if( password ){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password , salt );
    }
 
    const usuario = await Usuario.findByIdAndUpdate(id, resto);


    res.json({
        ok: true,
        msg: 'put API controlador',
        id
    })
}


const usuarioPost = async(req, res)=>{
    
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

     await usuario.save();

    res.status(200).json({
        usuario
    })
}

const usuarioDelete = async(req, res)=>{
    const {id} = req.params;
    const uid = req.uid;
    
    //borrando fisicamente
    const usuario = await Usuario.findByIdAndUpdate( id , {estado: false})
    const usuarioAutenticado = req.usuario;

    res.json({
        usuario,
        usuarioAutenticado
    })
}

  module.exports = {
    usuariosGet,
    usuariosPut,
    usuarioPost,
    usuarioDelete
  }