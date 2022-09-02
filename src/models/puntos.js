const mongoose = require('mongoose');
const Esquema = mongoose.Schema;

const usuarioEsquema = new Esquema(
{
    //email Requrida , tipo string , unico(no se puede repetir en la base) ,que se guarde en minusculas
    email:{type: String  },
    password:{type: String},
    nombre:{type: String},
    activo:{type: Number},
    puntos:{type: Number}

},
{
    timestamps:{createdAt:"Registrado", updatedAt:"UltimaActividad" },
    versionKey:false,   
});



module.exports = mongoose.model("UsuariosTunja",usuarioEsquema);