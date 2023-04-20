const hue = 250;

const h1 = document.querySelector('h1');
h1.style.color = `hsl(${hue}, 80%, 40%)`;



for(let i=0; i<100; i++){
    const pHue = 50+i*10;

    const p = document.createElement('p');
    document.body.append(p);
    p.innerText = pHue

    p.style.backgroundColor = `hsl(${pHue}, 80%, 80%)`;
}