const imagens = document.querySelectorAll('img');

console.log(imagens);

const imagensAnimais = document.querySelectorAll('img[src^="./img/imagem"]');

console.log(imagensAnimais);

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno)

const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);