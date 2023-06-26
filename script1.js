// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

let numeros = [];

for (let i = 0; i < 10; i++){
   let numeroAleatorio = Math.floor( Math.random()*100);
   numeros.push(numeroAleatorio);
}
console.log(numeros);