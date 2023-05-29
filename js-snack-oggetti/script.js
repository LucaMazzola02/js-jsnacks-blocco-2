

const basketPlayer = {

    'player-code':'',
    name : 'Michael',
    surname : 'Jordan',
    age : 24,
    'point-average' : 0,
    'three-point-percentage' : 0,
    stoppet : 0,
    shoot : 0,
}

basketPlayer['player-code'] = generateRandomString(3,'QWERTYUIOPLKJHGFDSAZXCVBNM') + Math.floor(Math.random() * (9 - 1) + 1) + Math.floor(Math.random() * (9 - 1) + 1) + Math.floor(Math.random() * (9 - 1) + 1); 
function generateRandomString(length, allowedChar) {
    let result = '';
    let counter = 0;

    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      counter++;
    }

    return result;
}


let average = basketPlayer['point-average'];
average = Math.floor(Math.random() * (50 - 1) + 1);

let threePointPercentage = basketPlayer['three-point-percentage'];
threePointPercentage = Math.floor(Math.random() * (100 - 1) + 1);

let stoppet = basketPlayer['stoppet'];
stoppet = Math.floor(Math.random() * (30 - 1) + 1);

let shoot = basketPlayer['shoot'];
shoot = Math.floor(Math.random() * (100 - 20) + 20);


console.log(basketPlayer);














