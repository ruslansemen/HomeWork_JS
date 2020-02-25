/*
 1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие
 картинки по указанному в src адресу.
 */

window.onload = function () {
    var image = document.getElementsByTagName('img');
    console.log(image);
    for (var i = 0; i < image.length; i++) {
        image[i].onclick = changeBigPicture;
    }

};

function changeBigPicture(e) {
    var appDiv = document.getElementById('bigPicture'); // div для большой кратинки
    appDiv.innerHTML = '';
    var eventElement = event.target;
    console.log(eventElement);

    var imageNameParts = eventElement.id.split('_');
    var src = './img/big/' + imageNameParts[1] + '.jpg';
    var imageDomElement = document.createElement('img');
    imageDomElement.src = src;
    imageDomElement.onload = function () {
        alert('Картинка есть в наличии')
    };
    imageDomElement.onerror = function () {
        alert('Картинка отсутствует')
    };
    appDiv.appendChild(imageDomElement);
}
