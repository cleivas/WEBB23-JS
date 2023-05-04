function add(x, y){
    return x+y;
}

add(10, 20);

console.log( add(3, 5) );

const result = add(45, 2);
console.log(result);


function getSum(){
    // console.log(arguments);
    let sum = 0;

    for(let i=0; i<arguments.length; i++){
        
        // console.log(arguments[i]);
        // sum = sum +arguments[i];
        sum+=arguments[i];
    }
    return sum;
}

console.log( getSum(3,23, 543, 23) );

function getElement(type, text){
    const el = document.createElement(type);
    el.innerText = text;
    return el;
}

console.log(getElement('p', 'hej hej'));

const h1 = getElement('h1', 'Nu då?');
document.body.append(h1);
console.log(h1);