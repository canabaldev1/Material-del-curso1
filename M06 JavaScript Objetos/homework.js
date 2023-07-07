/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   let Gato = {};
   Gato.nombre = nombre;
   Gato['edad'] = edad;
   Gato.meow = function () {return ("Meow!")};
   return (Gato)
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var Usuario = {}
   Usuario.nombre = nombre
   Usuario.email = email
   Usuario.password = password
   return (Usuario)
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto [propiedad] = null
   return (objeto);
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
objeto [metodo] ();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   var mult = objetoMisterioso.numeroMisterioso * 5
   return (mult)
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:

//    let objetoNuevo = {};
//    for (prop in objeto){
//       if (prop == propiedad) {
//          continue
//       }
//       objetoNuevo [prop] = objeto [prop]
//    };
// return (objetoNuevo)

   delete objeto[propiedad];
   return (objeto)
}

// eliminarPropiedad({color:'rojo',altura:'bajo',sabor:'salado',aroma:'dulce'}, 'sabor')

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.email != undefined ) {
      return (true)
   } else {return (false)};
}
// tieneEmail({nombre:'Carlos',email:null})

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   for (prop in objeto){
      if (prop == propiedad) {
         return (true)
      }
   };
   return (false);
}
// tienePropiedad({color:'rojo',altura:'bajo',sabor:'salado',aroma:'dulce'}, 'sabor')

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.password == password ) {
      return true 
   } else {return false};
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword
   return (objetoUsuario)
}
// actualizarPassword ({password:'12345'},'nuevacontraseña');

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push (nuevoAmigo)
   return (objetoUsuario)
}

// agregarAmigo({nombre:'Carlos',amigos:['Andres','Juan','Pedro']}, 'Armando')

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   let usuariosModoPremium = []; 
   for (let i=0 ; i < objetoMuchosUsuarios.length ; i++) {
      let currentUser = objetoMuchosUsuarios [i];
      currentUser.esPremium = true;
      usuariosModoPremium.push (currentUser); 
   };
   return (usuariosModoPremium)
}
// pasarUsuarioAPremium([
// {usuario:'Carlos',esPremium:false},
// {usuario:'Andres',esPremium:true},
// {usuario:'Canabal',esPremium:false},
// {usuario:'Buelvas',esPremium:false}
// ])

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   let suma = 0
   objetoUsuario.posts.forEach( post => {
   suma = suma + post.likes   
   });
   return (suma)
}
// sumarLikesDeUsuario({usuario:'Carlos',posts:[{tipo:'Foto en la playa',likes:10},{tipo:'Foto perrito',likes:20},{tipo:'Foto carro',likes:5},{tipo:'Foto otra',likes:10}]})

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function () {
      let descuento = (this.precio * this.porcentajeDeDescuento);
      let precioFinal = (this.precio - descuento);
      return (precioFinal)
   }
   return objetoProducto;
}


// agregarMetodoCalculoDescuento({producto:'Jabon',precio:10,porcentajeDeDescuento:0.2}).calcularPrecioDescuento

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
