// ---------------- BUSCADOR DE NOMBRES ----------------

// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. 

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  const finderName = (array,word) => {
    let newArray = [];
    array.forEach((name, index) => {
        word == name && newArray.push([true, index]) 
    })
    if (newArray.length==0){
        return false
    } else {
        return newArray
    }
  }
  console.log(finderName(nameFinder,"Steve"));