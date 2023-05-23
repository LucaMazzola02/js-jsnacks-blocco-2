function createLi(){

    const liElement = document.createElement('li');

    liElement.classList.add('list-item');

    liElement.innerHTML = 'Oggetto'

    return liElement;
}


const parentList = document.getElementById('parentList');


for (let index = 0; index < 10; index++) {
    
    const singoleElement = createLi();

    singoleElement.addEventListener('click', function(){

        singoleElement.classList.toggle('owned')

    });

    parentList.appendChild(singoleElement);

};