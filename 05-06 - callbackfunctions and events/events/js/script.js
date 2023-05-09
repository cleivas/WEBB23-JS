const btn = document.querySelector('button');

function onClick(event){
    console.log('Click!', event);
}

btn.addEventListener('click', onClick );


// const countBtn = document.querySelector('#count');
// let countNum = 0;

// countBtn.addEventListener( 'click', function(){
//     countNum++;
//     countBtn.innerText = countNum;
// }); 

//h1-elementet ska visa countNum
//Klickar man på down-knappen ska countNum minska
//Klickar man på up-knappen ska countNum öka

let countNum = 0;


const upBtn = document.getElementById('countUp');
const downBtn = document.querySelector('#countDown');

upBtn.addEventListener('click', function(){
    const h1 = document.querySelector('h1');
    countNum++;
    h1.innerText = countNum;
})

downBtn.addEventListener('click', function(){
    const h1 = document.querySelector('h1');
    countNum--;
    h1.innerText = countNum;
})


const firstH3 = document.querySelector('#first')
const secondH3 = document.querySelector('#second')
const thirdH3 = document.querySelector('#third')

function changeText(event){
    console.log(event.target.innerText);

    const h1 = document.querySelector('#changeText');
    h1.innerText = event.target.innerText;
}

firstH3.addEventListener('click', changeText);
secondH3.addEventListener('click', changeText);
thirdH3.addEventListener('click', changeText);