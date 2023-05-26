const firstButton = document.getElementById('button1');
const secondButton = document.getElementById('button2');

const parentList = [];

const ulListElement = document.getElementById('parentList');

let recipeGenerate = false;

firstButton.addEventListener('click', function(){


    if(!recipeGenerate){
        const ingredients = document.getElementById('ingredients').value;
 
        parentList.push(ingredients);

        ulListElement.innerHTML += '<li>' + ingredients + '</li>';

        ingredients = "";
    } 
    
    

});


secondButton.addEventListener('click', function(){

    document.getElementById('img-wrapper').innerHTML = '<img src="https://source.unsplash.com/collection/190727/200x200" alt="collection">',

    recipeGenerate = true;

    const recipeWrapper = document.querySelector('.recipeWrapper');

    ulListElement.classList.add('display-none');

    for (let index = 0; index < parentList.length; index++) {

        const element = parentList[index];

        recipeWrapper.innerHTML = '<span>' + element+ '</span>';
        
    };
});




























