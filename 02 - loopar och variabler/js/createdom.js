console.log('test');

const h1 = document.querySelector('h1');
h1.remove();

const p = document.createElement('p');
console.log(p);

document.body.appendChild(p);
p.innerText = 'Nu syns p-elementet!'

//inköpslista
const itemOne = 'Frukter';
const itemTwo = 'Grönsaker';
const itemThree = 'Bröd';

const ul = document.createElement('ul');
document.body.appendChild(ul);

const firstLi = document.createElement('li');
ul.appendChild(firstLi);
firstLi.innerText = itemOne;
//Lägg till två till punkter i inköpslistan

const secondLi = document.createElement('li');
ul.appendChild(secondLi);
secondLi.innerText = itemTwo;

const thirdLi = document.createElement('li')
thirdLi.innerText = itemThree;
ul.appendChild(thirdLi);




const pColor = 'hotpink';
p.style.color = pColor;