const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const validarJWT = async(req = request,resp = response,next) => {
   const token = req.header('x-token');
 
   if(!token){
    return resp.status(401).json({
        msg: 'No hay token en la peticion'
    })
   }

   try{
      const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
      const usuario = await Usuario.findById(uid)
      console.log('usuario: ', usuario)
     
      req.uid = uid;

      if(!usuario){
         return resp.status(401).json({
            msg: 'Token no valido - usuario no existe en BD'
         })
      }

      //verificar si estado esta en true
      console.log(usuario.estado)
      if( !usuario.estado ){
        return resp.status(401).json({
            msg: 'Token no valido - usuario inactivo'
        })
      }

      req.usuario = usuario;
       
     next()

   }catch(error){
    resp.status(401).json({
        msg:' Token no valido'
    })
   }
  
}

module.exports = {
    validarJWT
}