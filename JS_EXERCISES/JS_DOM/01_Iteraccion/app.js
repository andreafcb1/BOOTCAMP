// -------------------- Interacción con el DOM --------------------

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const btn = document.querySelector(".showme");
console.log(btn);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const titelTag = document.querySelector("#pillado");
console.log(titelTag);

// 1.3 Usa querySelector para mostrar por consola todos los p

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemonClass = document.querySelectorAll(".pokemon");
console.log(pokemonClass);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

//1.5

const elements = document.querySelectorAll('[data-function="testMe"]');
console.log(elements);

//1.6

console.log(elements[2]);