const {response} = require('express')
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generarJWT');

const login = async(req, res = response) => {

   const {correo, password} = req.body;

   try{

      //verificar si el email existe
       const usuario = await Usuario.findOne({ correo });
       if(!usuario){
         return res.status(400).json({
            msg: 'Usuario / Password no son correctos1 '
         })
       }

      //si el usuario esta activo
      if(!usuario.estado){
         return res.status(400).json({
            msg: 'Usuario / Password no son correctos '
         })
       }

      //verificar la contraseña
      const validPassword = bcryptjs.compareSync(password, usuario.password);
      if(!validPassword){
         return res.status(400).json({
            msg: 'Usuario / Password no son correctos - estado: false'
         })
      }

      //Generar JWT
//      const token = await  generarJWT( usuario.id )
  const token = await generarJWT(usuario.id)  
     
      res.json({
         msg: 'Login ok',
         token
      })
   }catch(error){
      return res.status(500).json({
         msg: 'Hable con el administrador'
      })
   }
}

module.exports = {
    login
}