// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDiv = document.createElement("div");
const newParagraph = document.createElement("p");
newDiv.appendChild(newParagraph);
document.body.appendChild(newDiv);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const otherDiv = document.createElement("div");
const paragraph = document.createElement("p");

for (let i = 0; i<6; i++) {
otherDiv.appendChild(paragraph);
document.body.appendChild(otherDiv);
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Soy dinámico!";
document.body.appendChild(nuevoParrafo);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const insertH2 = document.querySelector(".fn-insert-here");
insertH2.innerText = "Wubba Lubba dub dub";
document.body.appendChild(insertH2);

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ulElement = document.createElement("ul");
document.body.appendChild(ulElement)
apps.forEach((app) => {
    const liElement = document.createElement("li");
    const newApp = document.createTextNode(app);
    liElement.appendChild(newApp);
    ulElement.appendChild(liElement);
});

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me



// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here


