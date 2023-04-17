console.log( document.querySelector("p") );

console.log( document.querySelectorAll('p') );

console.log( document.querySelectorAll('p')[2] );

document.querySelector('a').innerText = 'WEBB23';

document.querySelector('.art-1').innerHTML = '<h1> Ny Rubrik </h1>';

document.querySelector('.art-2 h2').style.color = 'hotpink';

//Hämta knappen i tredje article-elementet och byt bakgrundsfärgen till grön

document.querySelector('.art-3 button').style.backgroundColor = 'green';

document.querySelector('img').src = 'https://wallpapercave.com/wp/2XdLahQ.jpg';

document.querySelector('nav').classList.add('red-bg');

document.querySelector('nav').classList.remove('red-bg');

document.querySelectorAll('#header-navigation a')[2].setAttribute('lunch', 'kebab');

// document.querySelectorAll('#header-navigation a')[2].removeAttribute('lunch');