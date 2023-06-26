// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

let numeros = [10, 40, 30, 20, 15, 5];

// Ordenar el arreglo de menor a mayor
numeros.sort(function(a, b) {
  return a - b;
});

// Obtener el número menor y el número mayor
let numeroMenor = numeros[0];
let numeroMayor = numeros[numeros.length - 1];

// Imprimir el arreglo ordenado, número menor y número mayor
console.log("Arreglo ordenado de menor a mayor:", numeros);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);
