/*Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.*/

const parolaUno = prompt('Insert the first word that came in your mind');

const parolaDue = prompt('Insert the second word that came in your mind');

function sameLength( firstWord, secondWord){

    if(firstWord.length === secondWord.length){
        
        return true;

    }

        return false;

};

if (sameLength(parolaUno, parolaDue)){

    console.log('the word have the same length')

}else if(parolaUno.length > parolaDue.length){

    console.log = ('the longest word is: ' + firstWord)

}else{

    console.log = ('the longest word is: ' + secondWord);

};
    