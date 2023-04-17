// -------------------- Spread Operator ----------------

// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const list = [32, 54, 21, 64, 75, 43]

let listCopy = [...list];

console.log(list);
console.log(listCopy);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

let toyCopy = {...toy};

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const newArray = [...pointsList, ...pointsLis2];

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy1Update = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const fusedToy = {...toy1, ...toy1Update};

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let colorsCopy = [...colors];

colors.splice(1,1);

console.log(colors);