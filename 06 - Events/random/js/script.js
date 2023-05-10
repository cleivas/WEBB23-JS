let rand = Math.random();
console.log(rand);

rand = rand*20;
console.log(rand);

rand = Math.floor(rand)+1;
console.log(rand);


const bilar = ['audi', 'bmw', 'saab', 'volvo'];

const h1 = document.createElement('h1');
document.body.append(h1);
h1.innerText = bilar[0];


const btn = document.createElement('button');
btn.innerText = 'Random bil';
document.body.append(btn);

btn.addEventListener('click', ()=>{
    const randomIndex = Math.floor( Math.random()*bilar.length );
    h1.innerText = bilar[randomIndex];
})


// console.log(randomIndex);


// Gör om så att vi från början ser Audi -> använd arrayen
// Lägg till en knapp
// Klickar man på knappen så ska ett random bilmärke visas

