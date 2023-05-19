

let randomNumber = Math.floor(Math.random() * 100) + 1;

let userNumber = parseInt(prompt('Insert a number'));

while( randomNumber !== userNumber){

    if( randomNumber > userNumber ){

        console.log('the number that you will find is greater');
        
        parseInt(prompt('Insert a number'));

    }else if( randomNumber < userNumber ) {

        console.log('the number that you will find is minor');

        parseInt(prompt('Insert a number'));

    }

}

alert('HAI INDOVINATO');





