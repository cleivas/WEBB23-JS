const numbers = [3, 54, 23, 65];
console.log(numbers, numbers.length);

numbers.push(1000);
console.log(numbers);

console.log( numbers.push(1, 2, 3, 4));
console.log(numbers);

console.log(numbers.pop());
console.log(numbers);

const reversedArray = numbers.reverse();
numbers[0] = 0;
console.log(numbers, reversedArray);

const days = ['mon', 'tue', 'sun', 'fri', 'sat', 'sun']

days.splice(2, 1, 'wed', 'thu');
console.log(days);

//ta bort mon tue wed thu
// days.splice(0, 4);
// console.log(days);

days.forEach( function(element, index){
    // console.log(element, index);
    const p = document.createElement('p');
    p.innerText = element;
    document.body.append(p);
})

// console.log('-----for loop-----')
// for(let i=0; i<days.length; i++){
//     onElement(days[i], i)
// }

// function onElement(el, i){
//     console.log(el, i)
// }

const original = [1, 2, 3, 4, 5];

const mapped = original.map(function(element){
    return element*10;
})

console.log(mapped);

const mappedDays = days.map(function(element){
    return element.concat('day');
})
console.log(mappedDays);

//Använd filtermetoden på numbers
// för att få ut en array med alla nummer som är mer än 60

const moreThan60 = numbers.filter( num => num>60 )
console.log(moreThan60);