// -------------------- Métodos findArrayIndex ------------------------

// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

const findArrayIndex = (array, text) => {
    animals.forEach((animal, position) => {
        if (text === animal) {
            console.log(`La posición ${position} la ocupa el animal ${text}`);
        }})};
        findArrayIndex(animals, "Caracol");
        findArrayIndex(animals, "Mosquito");
        findArrayIndex(animals, "Salamandra");
        findArrayIndex(animals, "Ajolote");
