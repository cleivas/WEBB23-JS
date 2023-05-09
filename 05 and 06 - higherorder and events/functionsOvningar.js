
//
function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit-32)/1.8;
}

console.log( fahrenheitToCelsius(68) );


function getAverage(){
    let sum = 0;
    
    for(let i=0; i<arguments.length; i++){
        sum+=arguments[i];
    }  

    return sum/arguments.length;
}

const average = getAverage(2, 3, 6, 234, 45, 6);
console.log(average);


function checkTemp(temp){
    const h1 = document.createElement('h1');
    document.body.append(h1);

    if(temp>=15){
        h1.innerText = 'Varmt';
        h1.style.color = 'red';
    }
    else{
        h1.innerText = 'Kallt'
        h1.style.color = 'blue';
    }
}

checkTemp(15);
checkTemp(1);

function createLists(nmbrOfLists, nmbrOfItems){
    for(let i=0; i<nmbrOfLists; i++){
        const ol = document.createElement('ol');
        document.body.append(ol);

        for(let j=0; j<nmbrOfItems; j++){
            const li = document.createElement('li');
            ol.append(li);
        }
    }
}

createLists(2, 10);

