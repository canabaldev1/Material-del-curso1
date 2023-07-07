/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  return Object.entries(objeto);

  // let propiedades = Object.keys(objeto);
  // for (let i = 0; i < propiedades.length; i++) {
  //   let iteracion = [propiedades[i], objeto[propiedades[i]]];
  //   arreglo.push(iteracion);
  // }
  // return arreglo;
}
// console.log(deObjetoAarray({ D: 1, B: 2, C: 3 }));
//                                                  [ [ 'D', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let arreglo = string.split("");
  arreglo = arreglo.sort();
  let objeto = {};
  let arregloSinDuplicados = [];
  let valor = 0;

  for (let i = 0; i < arreglo.length; i++) {
    let clave = arreglo[i];
    objeto[clave] = 0;
  }

  for (let i = 0; i < arreglo.length; i++) {
    let clave = arreglo[i];
    objeto[clave] = objeto[clave] + 1;
  }

  return objeto;
}
// console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"));
//                                                               { a: 5, b: 2, c: 2, d: 4, f: 4, h: 1, j: 4, s: 5 }

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let mayuscula = [];
  let minuscula = [];
  let arreglo = string.split("");
  arreglo.forEach((x) => {
    let xMayusc = x.toUpperCase();
    if (x === xMayusc) {
      mayuscula.push(x);
    } else {
      minuscula.push(x);
    }
  });
  return mayuscula.join("") + minuscula.join("");
}

// console.log(capToFront("soyHENRY"));
//                                    HENRYsoy

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  fraseDividida = frase.split(" ");
  FraseDivididaMirror = fraseDividida.map((palabra) => {
    let palabraMirror = palabra.split("").reverse().join("");
    return palabraMirror;
  });
  let fraseMirror = FraseDivididaMirror.join(" ");
  return fraseMirror;
}
// console.log(asAmirror("Hola estoy probando la funcion!"));
// console.log(asAmirror("The Henry Challenge is close!"));
//                                                        ehT yrneH egnellahC si !esolc

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numeroArray = numero.toString().split("");
  let inversoArray = [];
  for (let i = 0; i < numeroArray.length; i++) {
    inversoArray.push(numeroArray[numeroArray.length - 1 - i]);
  }
  let inverso = inversoArray.join("");
  if (inverso == numero) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}
// console.log(capicua(12321));
//                            Es capicua
function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let arrayAEliminar = ["a", "b", "c"];
  let array = string.split("");
  let arrayOk = [];
  array.forEach((x) => {
    if (arrayAEliminar.includes(x)) {
    } else {
      arrayOk.push(x);
    }
  });
  let stringOk = arrayOk.join("");
  return stringOk;
}

// console.log (deleteAbc("abracadabra")); // rdr
// console.log ( deleteAbc("abra")); // r
// console.log ( deleteAbc("arroz con mango y berenjena")); // rroz on mngo y erenjen

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  let arrayOfLength = arrayOfStrings.map((x) => {
    return x.length;
  });

  arrayOfLength = arrayOfLength.sort((a, b) => a - b);

  let ultimo = arrayOfLength[arrayOfLength.length - 1];

  let arregloOk = [];

  for (let i = 1; i <= ultimo + 1; i++) {
    arrayOfStrings.forEach((x) => {
      if (x.length === i) {
        arregloOk.push(x);
      }
    });
  }

  return arregloOk;
}
// console.log(sortArray(["You", "are", "beautiful", "looking"]));
//                                                               [ “You", "are", "looking", "beautiful"]

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let arrayInter = [];
  array1.forEach((x) => {
    array2.forEach((y) => {
      if (x == y) {
        arrayInter.push(x);
      }
    });
  });
  return arrayInter.sort((a, b) => a - b);
}

// console.log(buscoInterseccion([4, 2, 3], [1, 3, 4]));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
