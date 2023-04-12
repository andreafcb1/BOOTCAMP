// ------------ CALCULAR EL PROMEDIO DE STRINGS ------------

// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. 


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const averageWord = (array) => {
    let acc = 0;

  array.forEach(element => {
    typeof element == "number" ? acc += element : acc+= element.length
    })
    return acc;
  };
console.log(averageWord(mixedElements))

console.log(averageWord(mixedElements)/(mixedElements.length))