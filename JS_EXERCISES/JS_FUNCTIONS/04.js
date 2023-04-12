//---------------CALCULAR EL PROMEDIO------------

const numbers = [12, 21, 38, 5, 45, 37, 6];

const average = (array) => {
   let acc = 0;
   array.forEach(number => {
    acc += number;
  });
  return acc;
}

console.log(average(numbers)/(numbers.length))



//CON REDUCE

let suma = numbers.reduce((acc, number) => acc + number, 0);

let promedio = suma/numbers.length

console.log(promedio)