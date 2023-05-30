/**

Crea un array composto da 15 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 

nel primo array solo le auto a benzina,  // ciclo for 
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

 */

function getRandomInt(minumNumber, maximumNumber){
    const randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);
 
    return randomNumber;
}

const typescars = ['benzina', 'diesel', 'gpl', 'elettrico', 'metano' ];

const modelCars = ['Micra','A4','Golf', 'Polo'];

const marcaCars = ['BMW','Mercedes', 'Nissan', 'Alfa-Romeo','Audi'];
 
 
 function generateCars(quantity, typesList, modelList, marcaList ){
 
    const generatedCars = [];
 
    for (let index = 0; index < quantity; index++) {
       const newCar = {

          type: typesList[ getRandomInt(0, typesList.length - 1) ],
          model: modelList[ getRandomInt(0, modelList.length - 1) ],
          marca: marcaList[ getRandomInt(0, marcaList.length - 1) ],    

       };
 
       generatedCars.push(newCar);
    }
 
    return generatedCars;
 }

const car = generateCars(15, typescars, modelCars, marcaCars);

const benzinaCar = [];

for (let index = 0; index < car.length; index++) {

    const element = car[index];

    if(car.type === 'benzina'){

        benzinaCar.push(element);
    };

};

console.log(benzinaCar)


const dieselCar = [];


car.forEach((element) => {

    if(element.type === 'diesel'){

        dieselCar.push(element);
    };

    
});


const otherCar = car.filter(car => car.type !== 'benzina'  &&  car.type !== 'diesel');

console.log(benzinaCar, dieselCar, otherCar);










