// ------------ CONDICIONALES AVANZADOS-----------------

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log. 

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let testPassed = (array) => {
    array.forEach(student => {
        (student.T1 && student.T2) || (student.T1 && student.T3) || (student.T2 && student.T3) == true ? student.isApproved = true : student.isApproved = false
    })
        return array;
};
console.log(testPassed(alumns));