// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const findLongestWord = (array) => {
    let largestWord = "";
   array.forEach(avenger => {
    largestWord = avenger.length > largestWord.length ? avenger : largestWord;
   });
   return largestWord;
 }

 console.log(findLongestWord(avengers))
