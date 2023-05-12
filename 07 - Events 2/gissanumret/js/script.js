let random = Math.round( Math.random()*10 );
// console.log(random);
let numberOfGuesses = 0;


const form = document.querySelector('form');
form.addEventListener('submit', guess);

function guess(event){
    event.preventDefault();
    numberOfGuesses++;
    console.log(numberOfGuesses);

    const input = document.querySelector('input');
    const h1 = document.querySelector('h1');

    const userGuess = input.value;
    form.reset();

    if(userGuess < random){
        h1.innerText = 'Gissa högre';
    }
    else if(userGuess > random){
        h1.innerText = 'Gissa lägre';
    }
    else{
        if(numberOfGuesses === 1){
            h1.innerText = 'Du är f****ng KING!';
        }
        else{
            h1.innerText = `Du gissade rätt på ${numberOfGuesses} gissningar`;
        }
        resetGame();
    }
}

function resetGame(){
    random = Math.round( Math.random()*10 );
    numberOfGuesses = 0;
}