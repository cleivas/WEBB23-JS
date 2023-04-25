const h1 = document.createElement('h1');
h1.innerText = 'Beef';
document.body.append(h1);

if(h1.innerText === 'Beef'){
    h1.style.color = 'green';
}
else{
    h1.style.color = 'red';
}


//om x+y är mer än 200 skapa p element med lila bakgrund
// om det är mindre än 100 h1 med grön bakgrund
//om det är mer än 500 h3 röd bakgrund
//annars hotpink

const x = 1;
const y = 101;
const sum = x+y;

if(sum>500){
    const h3 = document.createElement('h3');
    document.body.append(h3);
    h3.style.background = 'red';
    h3.innerText = sum;
}
else if(sum > 200){
    const p = document.createElement('p');
    document.body.append(p);
    p.style.background = 'violet';
    p.innerText = sum;
}
else if(sum<100){
    const h1 = document.createElement('h1');
    document.body.append(h1);
    h1.style.background = 'green';
    h1.innerText = sum;
}
else{
    const h1 = document.createElement('h1');
    document.body.append(h1);
    h1.style.background = 'hotpink';
    h1.innerText = sum;
}
