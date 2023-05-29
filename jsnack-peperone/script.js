function getRandomInt(minumNumber, maximumNumber){
    const randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);
 
    return randomNumber;
}
 

const types = ['red bell', 'green bell', 'yellow bell', 'abenhero', 'jalapeno', 'calabrese' ];
 
 
 function generatePeppers(quantity, typesList ){
 
    const generatedPeppers = [];
 
    for (let index = 0; index < quantity; index++) {
       const newPepper = {
          type: typesList[ getRandomInt(0, typesList.length - 1) ],
          weight: getRandomInt(0, 700),
          length: getRandomInt(0, 100),
       };
 
       generatedPeppers.push(newPepper);
    }
 
    return generatedPeppers;
 }
 
 const peppers = generatePeppers(10, types);
 console.log(peppers);
 
 let sumOfWeights = 0;
 for (let index = 0; index < peppers.length; index++) {
    sumOfWeights += peppers[index].weight;
 }
 
 console.log (sumOfWeights);


