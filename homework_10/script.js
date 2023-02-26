const data = JSON.parse(dataCat);
//console.log(data);

const contentElement = document.querySelector('.content');
console.log(contentElement);

data.forEach(element => {
const divElement = document.createElement('div');
const imgElement = document.createElement('img');
const h2Element = document.createElement('h2');
const paragrahElement = document.createElement('p');

divElement.classList.add('content__box');
imgElement.classList.add('content__img');
h2Element.classList.add('content__h');
paragrahElement.classList.add('content__text');

contentElement.appendChild(divElement);
divElement.appendChild(imgElement);
divElement.appendChild(h2Element);
divElement.appendChild(paragrahElement);

imgElement.src = element.image;
imgElement.alt = element.cat_breeds;
h2Element.textContent = element.cat_breeds;
paragrahElement.textContent = element.fact;

});
