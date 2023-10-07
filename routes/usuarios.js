const {Router} = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPut, usuarioPost, usuarioDelete } = require('../controllers/usuarios');
const validarCampos = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/Validar-jwt');
const Role = require('../models/role');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const { esAdminRole, tieneRole } = require('../middlewares/validar-roles');

const router = Router();

router.get('/', usuariosGet)

router.put('/:id', 
   [
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom( esRoleValido ),
    validarCampos
   ]
, usuariosPut)

router.post('/',
 [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mas de 6 caracteres').isLength({min:6}),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(emailExiste), 
    //check('rol', 'No es un rol valido').isIn('ADMIN_ROLE','USER_ROLE'),
    check('rol').custom(esRoleValido),
    validarCampos
 ]
, usuarioPost)

router.delete('/:id',
 [
   validarJWT,
   //esAdminRole,
   tieneRole('ADMIN_ROLE', 'VENTA_ROLE'), 
   check('id','No es un ID valido').isMongoId(),
   check('id').custom(existeUsuarioPorId),
   validarCampos
]
,usuarioDelete)


module.exports = router;