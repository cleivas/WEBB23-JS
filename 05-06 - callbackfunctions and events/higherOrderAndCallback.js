const minFunktion = function(m){
    console.log(m);
}
minFunktion('Meddelande');//Meddelande

console.log( minFunktion )
console.log( typeof minFunktion )


function higherOrder( callback ){
    console.log('Higher order function');
    callback();
}

function sayHi(){
    console.log('HI!');
}

function sayGoodbye(){
    console.log('Goodbye!');
}

higherOrder( sayHi );
higherOrder( sayGoodbye );
higherOrder( 
    ()=>{
        console.log( 'Annonym arrowfunktion')
    } 
    )

higherOrder( 
    function(){
        console.log('Anonym vanlig funktion')
    }
    )

// en array med nummer
//vi vil göra berkningar på varje nummer i arrayen
//[1, 2, 3] -> [2, 4, 6]
//[1, 2, 3] -> [10, 20, 30]


function doubleArray(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i]*2;
    }
}

function timesTenArray(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i]*10;
    }
}

const arr1 = [1, 3, 64, 23];
doubleArray(arr1);
console.log(arr1);

timesTenArray(arr1);
console.log(arr1);


function makeCalcOnArray(arr, calcFunction){
    for(let i=0; i<arr.length; i++){
        arr[i] = calcFunction(arr[i]);
    }
}

function double(x){
    return x*2;
}

function timesTen(x){
    return x*10;
}

const arr2 = [1, 2, 3, 4, 5];

makeCalcOnArray(arr2, double);
console.log(arr2);

makeCalcOnArray(arr2, timesTen);
console.log(arr2);

console.log(double(10));

//andra argumentet ska vara en anonym arrowfunktion som dividerar ett nummer med 5 och returnerar resultatet
// const divide = x =>x/5;
makeCalcOnArray(arr2, x =>x/5 );
console.log(arr2);

