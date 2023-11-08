

const validaCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/Validar-jwt');
const validaRoles = require('../middlewares/validar-roles');

module.exports = {
    ...validaCampos,
    ...validarJWT,
    ...validaRoles,
}
