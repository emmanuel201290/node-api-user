const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
   constructor(){
      this.app = express();
      this.port = process.env.PORT;
      this.usuariosPath = '/api/usuarios';
      this.authPath = '/api/auth';

      //conectar a base de datos
       this.conectarDB();  

      //middlewares
      this.middlewares();

      this.routes();
   }

   async conectarDB() {
      await dbConnection()
   }

   middlewares(){
    //Directorio publico
    this.app.use(cors()) ;

    //Parseo y lectura del body
    this.app.use(express.json());
    this.app.use(express.static('public')); 
   }

   routes(){
       this.app.use(this.usuariosPath,require('../routes/usuarios'))
       this.app.use(this.authPath,require('../routes/auth'))   
   }

   listen(){
     this.app.listen(this.port, ()=>{
            console.log('servidor corriendo ', this.port)
        })
   }
}


module.exports = Server;