// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const findLongestWord = (array) => {
    let word = "";
   array.forEach(avenger => {
    word = avenger.length > word.length ? avenger : word;
   });
   return word;
 }

 console.log(findLongestWord(avengers))
