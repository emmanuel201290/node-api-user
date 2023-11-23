const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT, validarCampos } = require('../middlewares');
const { crearCategoria } = require('../controllers/categorias');


const router = Router();

router.get('/', (req, res)=>{
    res.json('get')
})

router.get('/:id', (req, res)=>{
    res.json('get')
})

//crear categoria - privado -cualquier persona con un token valido
router.post('/',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
 ] , crearCategoria)

router.put('/:id', (req, res)=>{
    res.json('put')
})

//actullizar - privado- cualquiera con token valido
router.put('/:id', (req, res)=>{
    res.json('put')
})

router.delete('/:id', (req, res)=>{
    res.json('delete')
})

module.exports = router;