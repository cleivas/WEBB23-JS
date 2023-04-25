const ol = document.createElement('ol');
document.body.append(ol);

for(let i=0; i<10; i++){
    // i++ är samma som i=i+1

    const li = document.createElement('li');
    ol.append(li);
    li.innerText = `Li-element nummer ${i}`;
    li.style.border = `${1+i}px solid red`;

    li.style.backgroundColor = `hsl(0, 50%, ${100-(i*10)}%)`;
    li.style.color = `hsl(0, 50%, ${i*10}%)`;
}

for(let i=1; i<200; i*=2){
    // i*=2 samma som i=i*2
    console.log(i);
}
