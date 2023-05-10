let counter = 0;

document.body.addEventListener('keyup', function(event){
    console.log(event.key);

    if(event.key === 'ArrowUp'){
        counter++;
    }
    else if(event.key === 'ArrowDown'){
        counter--;
    }
    else if(event.key === 'h'){
        document.body.style.background = 'hotpink';
    }
    else if(event.key === 'Shift'){
        document.body.style.background = 'orange';
    }

    //Trycker man på 'h' -> bakgrundsfärgen bli hotpink
    //trycker jag på shift -> bakgrundsfärgen -> valfri bakgrundsfärg

    const h1 = document.querySelector('h1');
    h1.innerText = counter;
})

