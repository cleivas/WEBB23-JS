function logHello(name){
    console.log(`Hello, ${name}!`);
}


logHello('Icy');
logHello('Herman');


function calcSum(x, y){
    console.log(x+y);
}

calcSum(10, 8);
calcSum(3543, 235);

//definiera en funktion med två parametrar
//Funktionen ska skapa och lägga till ett p element
//Första parametern ska användas för innerText
//Andra parametern ska användas för textstorlek

function addP(text, size, color = 'teal'){
    const p = document.createElement('p');
    document.body.append(p);
    p.innerText = text;

    if(typeof size === 'number'){
        p.style.fontSize = `${size}px`;
    }
    else{
        console.log('size is not a number', size);
    }
       
    p.style.color = color;
    // console.log(arguments);
}

addP('Funkar det?', 32, 'purple');
addP('Det gjorde det!', 88);
addP('hotpink', 'litet', 10);


// console.log('skriva ett argument', 'andra argumentet', 'tredje', 'osv')

function logSum(){
    // console.log(arguments);
    let sum = 0;

    for(let i=0; i<arguments.length; i++){
        
        // console.log(arguments[i]);
        // sum = sum +arguments[i];
        sum+=arguments[i];
    }
    console.log(sum);
}

logSum(1, 2, 3, 4, 5);
logSum(10, 2);