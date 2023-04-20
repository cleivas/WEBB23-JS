for(let i=0; i<10; i++){
    console.log(i);
}

//en for-loop där i börjar på 0
//logga 5 -10
console.log('-----5 till 10 -----')
for(let i=0; i<6; i++){
    console.log(i+5);
}

for(let i=5; i<11; i++){
    console.log(i);
}

console.log('----20 till 0 ----')

for(let i=20; i>-1; i--){
    console.log(i);
}

const ul = document.createElement('ul');
document.body.append(ul);

for(let i=0; i<100; i++){
    const li = document.createElement('li');
    ul.appendChild(li);

    li.innerText = `Item number ${i+1}`
    // 'Item number ' + (i + 1);
}

//skriv en forloop som lägger till 3 stycken h1-element till bodyn. Med valfritt textinnehåll

// const h1 = document.createElement('h1');
// document.body.append(h1);

for(let i=0; i<3; i++){
    const h1 = document.createElement('h1');
    document.body.append(h1);
    h1.innerText = `Det här är loop nummer ${i}`;
}

