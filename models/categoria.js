const { Schema, model} = require('mongoose');

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
        require: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',//Hace referencia al modelo usuario , el nombre debe ser igual
        require: true
    }
})

module.exports = model('Categoria', CategoriaSchema);