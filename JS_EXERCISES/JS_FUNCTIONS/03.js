// ------------------- CALCULAR LA SUMA--------------------

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
    let acc = 0;
  array.forEach(numeros => {
    acc += numeros;
  });
  return acc;
}

console.log(sumAll(numbers))

// con REDUCE

const numeros = [1, 2, 3, 5, 45, 37, 58];

let suma = numeros.reduce((acc, number) => acc + number, 0);

console.log(suma);