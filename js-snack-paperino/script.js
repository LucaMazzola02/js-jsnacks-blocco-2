/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino']

 */



const strings = ['pippo', 'PLUTO', 'PapERino', 'miNnI', 'DUFfyducK', 'ShagGhIE', 'PInocChiO', 'VelmA', 'HeiDi','dorAEMon'];

const newArray = [];

strings.forEach(element => { 

    const string = element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();

    newArray.push(string);
        
});

console.log(newArray);


    



