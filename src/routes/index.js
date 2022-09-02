const express = require('express');
const router = express.Router();
const passport = require('passport');
const Notificaciones = require('../models/notificaciones');
const Usuarios = require('../models/puntos')

router.get('/', (req, res ,next)=> {res.render('singin')});
//------------------------------------------------------------------------------------------------
router.get('/singup', (req, res ,next)=> {res.render('singup');});
router.post('/singup', passport.authenticate('local-singup' ,
{
    successRedirect:'/profile',
    failureRedirect:'/singup',
    passReqToCallback: true

}));
//------------------------------------------------------------------------------------------------
router.post('/singin', passport.authenticate('local-signin' ,{
    successRedirect:'/profile',
    failureRedirect:'/singin',
    passReqToCallback:true
}));
//------------------------------------------------------------------------------------------------
router.get('/logout',(req, res, next) =>{
  req.logout((err)=>{if (err) { return next(err); }});
  res.redirect('/');
});
//------------------------------------------------------------------------------------------------
router.get('/profile',isAuthenticated, (req, res , next)=> { res.render('profile')});
//------------------------------------------------------------------------------------------------
router.post('/filtros',(req, res, next)=> {

  const correo = req.body.email;
  const titulo = req.body.titulo;
  const mensaje = req.body.mensaje;
  const link = req.body.link;
  const noti= req.body.notificacion;
  const filt= req.body.filtros;

  const mayor= req.body.mayor;
  const menor= req.body.menor;

  
  const Actualizar = async()=>
  {
    const user = await Usuarios.findOne({email: correo})
    if (user!=null && user!= user.$isEmpty && user!="" ) 
    {
      if(noti==0){console.log("seleccione una notificacion")}
      if(noti==1)
      {
        console.log("Editar notificacion p")
        const update = await Notificaciones.updateOne({correo:correo},
          {
            titulo: titulo,
            mensaje:mensaje,
            link: link
          })
        res.render('profile')
      }
      if(noti==2)
      {
        console.log("Editar notificacion 1")
        const update = await Notificaciones.updateOne({correo:correo},
          {
            NA1:
            {
              TNA1:titulo,
              MNA1:mensaje,
              LNA1:link
            }
          })
          res.render('profile')
      }
      if(noti==3)
      {
        console.log("Editar notificacion 2")
        const update = await Notificaciones.updateOne({correo:correo},
          {
            NA2:
            {
              TNA2:titulo,
              MNA2:mensaje,
              LNA2:link
            }
          })
          res.render('profile')

      }
      if(noti==4)
      {
        console.log("Editar notificacion 3")
        const update = await Notificaciones.updateOne({correo:correo},
          {
            NA3:
            {
              TNA3:titulo,
              MNA3:mensaje,
              LNA3:link
            }
          })
          res.render('profile')
      }
      if(noti==5)
      {
        console.log("Editar notificacion 4")
        const update = await Notificaciones.updateOne({correo:correo},
          {
            NA4:
            {
              TNA4:titulo,
              MNA4:mensaje,
              LNA4:link
            }
          })
          res.render('profile')
      }
    }else
    {
      if(filt==0){console.log("Seleccione un filtro")}
      if(filt==1)
      {
        console.log("Todos")
        if(noti==0){console.log("Seleccione una Notificacion")}
        if(noti==1)
        {
          console.log("Editar notificacion p")
          const update = await Notificaciones.updateMany({},
            {
              titulo:titulo,
              mensaje: mensaje,
              link: link
            })
          res.render('profile');
        }
        if(noti==2)
        {
          console.log("Editar notificacion 1")
          const update = await Notificaciones.updateMany({},
            {
              NA1:
              {
                TNA1:titulo,
                MNA1:mensaje,
                LNA1:link
              }
            })
          res.render('profile');
        }
        if(noti==3)
        {
          console.log("Editar notificacion 2")
          const update = await Notificaciones.updateMany({},
            {
              NA2:
              {
                TNA2:titulo,
                MNA2:mensaje,
                LNA2:link
              }
            })
          res.render('profile');
        }
        if(noti==4)
        {
          console.log("Editar notificacion 3")
          const update = await Notificaciones.updateMany({},
            {
              NA3:
              {
                TNA3:titulo,
                MNA3:mensaje,
                LNA3:link
              }
            })
          res.render('profile');
        }
        if(noti==5)
        {
          console.log("Editar notificacion 4")
          const update = await Notificaciones.updateMany({},
            {
              NA4:
              {
                TNA4:titulo,
                MNA4:mensaje,
                LNA4:link
              }
            })
          res.render('profile');
        }
      }
      if(filt==2)
      { 
        console.log("Mayores a X")

        if(noti==0){console.log("Seleccione una Notificacion")}
        if(noti==1)
        {
          console.log("Editar notificacion p")
          const faind = await Usuarios.find({"puntos":{$gte:mayor}})
          
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              titulo:titulo,
              mensaje: mensaje,
              link: link
            })
          }
          res.render('profile')
        }
        if(noti==2)
        {
          console.log("Editar notificacion 1")
          const faind = await Usuarios.find({"puntos":{$gte:mayor}})
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              NA1:
              {
                TNA1:titulo,
                MNA1: mensaje,
                LNA1: link
              }       
            })
          }
          res.render('profile')
        }
        if(noti==3)
        {
          console.log("Editar notificacion 2")
          const faind = await Usuarios.find({"puntos":{$gte:mayor}})
          
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              NA2:
              {
                TNA2:titulo,
                MNA2: mensaje,
                LNA2: link
              }       
            })
          }
          res.render('profile')
        }
        if(noti==4)
        {
          console.log("Editar notificacion 3")
          const faind = await Usuarios.find({"puntos":{$gte:mayor}})
          
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              NA3:
              {
                TNA3:titulo,
                MNA3: mensaje,
                LNA3: link
              }       
            })
          }
          res.render('profile')
        }
        if(noti==5)
        {
          console.log("Editar notificacion 4")
          const faind = await Usuarios.find({"puntos":{$gte:mayor}})
          
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              NA4:
              {
                TNA4:titulo,
                MNA4: mensaje,
                LNA4: link
              }       
            })
          }
          res.render('profile')
        }
                   
      }
      if(filt==3)
      {
        console.log("Menores a X")
        if(noti==0){console.log("Seleccione una Notificacion")}
        if(noti==1)
        {
          console.log("Editar notificacion p")
          const faind = await Usuarios.find({"puntos":{$lte:menor}})
          
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              titulo:titulo,
              mensaje: mensaje,
              link: link
            })
          }
          res.render('profile')
        }
        if(noti==2)
        {
          console.log("Editar notificacion 1")
          const faind = await Usuarios.find({"puntos":{$lte:menor}})
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              NA1:
              {
                TNA1:titulo,
                MNA1: mensaje,
                LNA1: link
              }       
            })
          }
          res.render('profile')
        }
        if(noti==3)
        {
          console.log("Editar notificacion 2")
          const faind = await Usuarios.find({"puntos":{$lte:menor}})
          
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              NA2:
              {
                TNA2:titulo,
                MNA2: mensaje,
                LNA2: link
              }       
            })
          }
          res.render('profile')
        }
        if(noti==4)
        {
          console.log("Editar notificacion 3")
          const faind = await Usuarios.find({"puntos":{$lte:menor}})
          
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              NA3:
              {
                TNA3:titulo,
                MNA3: mensaje,
                LNA3: link
              }       
            })
          }
          res.render('profile')
        }
        if(noti==5)
        {
          console.log("Editar notificacion 4")
          const faind = await Usuarios.find({"puntos":{$lte:menor}})
          
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              NA4:
              {
                TNA4:titulo,
                MNA4: mensaje,
                LNA4: link
              }       
            })
          }
          res.render('profile')
        }
            
      }
      if(filt==4)
      {
        console.log("Entre X y X")
        console.log("Menores a X")
        if(noti==0){console.log("Seleccione una Notificacion")}
        if(noti==1)
        {
          console.log("Editar notificacion p")
          const faind = await Usuarios.find({"puntos":{$lte:menor,$gte:mayor}})
          
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              titulo:titulo,
              mensaje: mensaje,
              link: link
            })
          }
          res.render('profile')
        }
        if(noti==2)
        {
          console.log("Editar notificacion 1")
          const faind = await Usuarios.find({"puntos":{$lte:menor,$gte:mayor}})
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              NA1:
              {
                TNA1:titulo,
                MNA1: mensaje,
                LNA1: link
              }       
            })
          }
          res.render('profile')
        }
        if(noti==3)
        {
          console.log("Editar notificacion 2")
          const faind = await Usuarios.find({"puntos":{$lte:menor,$gte:mayor}})
          
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              NA2:
              {
                TNA2:titulo,
                MNA2: mensaje,
                LNA2: link
              }       
            })
          }
          res.render('profile')
        }
        if(noti==4)
        {
          console.log("Editar notificacion 3")
          const faind = await Usuarios.find({"puntos":{$lte:menor,$gte:mayor}})
          
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              NA3:
              {
                TNA3:titulo,
                MNA3: mensaje,
                LNA3: link
              }       
            })
          }
          res.render('profile')
        }
        if(noti==5)
        {
          console.log("Editar notificacion 4")
          const faind = await Usuarios.find({"puntos":{$lte:menor ,$gte:mayor}})
          
          for(let i=0; i<faind.length; i++)
          {
            const update =  await Notificaciones.updateOne({correo:faind[i].email},
            {
              NA4:
              {
                TNA4:titulo,
                MNA4: mensaje,
                LNA4: link
              }       
            })
          }
          res.render('profile')
        }
            
      }
    }
  }
  Actualizar();
  


});
//------------------------------------------------------------------------------------------------
function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/')
  }
//------------------------------------------------------------------------------------------------
module.exports = router;
