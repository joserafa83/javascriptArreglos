// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

let userInput = prompt("Ingresa varias palabras separadas por coma:"); // Solicitar al usuario que ingrese las palabras separadas por coma
let palabra = ''; // Variable para almacenar temporalmente cada palabra
let palabras = []; // Array para almacenar las palabras ingresadas

// Iterar a través de cada carácter del userInput
for (let i = 0; i < userInput.length; i++) {
  if (userInput[i] === ',') {
    // Si el carácter es una coma, agregar la palabra actual al array de palabras y reiniciar la variable palabra
    if (palabra !== '') {
      palabras.push(palabra);
      palabra = '';
    }
  } else {
    // Si el carácter no es una coma, agregar el carácter a la palabra actual
    palabra += userInput[i];
  }
}

// Capturar ultima palabra en caso que no sa seguida por una coma (,)
if (palabra !== '') {
  palabras.push(palabra);
}

console.log(palabras); // Mostrar el resultado en la consola
