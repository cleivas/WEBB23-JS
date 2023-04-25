const movies = ['ET', 'Taken', '2001', 'Star Wars', 'Die Hard'];

console.log(movies);
console.log(movies[2]);
console.log(movies.length);

const ul = document.createElement('ul');
document.body.append(ul);

for(let i=0; i<movies.length; i++){
    const li = document.createElement('li');
    ul.append(li);
    
    li.innerText = movies[i];
}

//Den nedre hälften av alla li ska ha bakgrundsfärg skyblue
const pEls =  document.querySelectorAll('p');
for(let i=0; i<pEls.length; i++){
    console.log(pEls.length, pEls.length/2 );

    pEls[i].style.color = 'blue';


    if(pEls[i].innerText ==='tre' ){
        pEls[i].style.color = 'hotpink';
    }  
    if(i >= pEls.length/2){
        console.log(i)
        pEls[i].style.background = 'skyblue';
    }
    // for(let i=5; i<pEls.length; i++){
    //     pEls[i].style.background = 'skyblue';
    // }

}

console.log('------%------')
// console.log( 11%2, 10%2 );

const lis = document.querySelectorAll('li');
for(let i=0; i<lis.length; i++){
    console.log(i, i%2);
    if(i%2 === 0){
        lis[i].style.background = 'hotpink';
    }
}