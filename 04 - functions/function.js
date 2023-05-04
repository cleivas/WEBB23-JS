logHello();

function logHello(){
    console.log('Hello!');
}



let variable = 10;
console.log(variable);

function displayNumber(){
    const h1 = document.createElement('h1');
    h1.innerText = variable;
    document.body.append(h1);

    if(variable%2 === 0){
        h1.style.color = 'hotpink';
    }

    variable++;
}

displayNumber();
displayNumber();
displayNumber();
displayNumber();
displayNumber();
displayNumber();
displayNumber();
