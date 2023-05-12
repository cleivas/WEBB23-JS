const div = document.querySelector('div');

div.addEventListener('click', function(event){

    if(event.target.tagName === 'BUTTON'){

        if(event.target.id === 'one'){
            console.log('Klickat på första knappen')
        }
        else if(event.target.id === 'two'){
            console.log('Klickat på andra knappen');
        }
        else if(event.target.id === 'three'){
            console.log('Klickat på tredje knappen');
        }
    }
});


const divCounter = document.querySelector('#counter');
divCounter.addEventListener('click', funCalculation)

let sum = 0;
function funCalculation(event){
    const calculation = event.target.innerText;
    console.log(event.target);


    if( calculation === '+'){
        sum++;
    }
    else if(calculation === '-'){
        sum--;
    }

    const h1 = document.querySelector('h1');
    h1.innerText = sum;
}