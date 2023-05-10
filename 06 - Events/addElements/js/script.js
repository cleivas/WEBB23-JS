const form = document.querySelector('form');
form.addEventListener('submit', addElements)

function addElements(event){
    event.preventDefault();
    const container = document.querySelector('#container');
    container.innerHTML = '';

    const textInput = document.querySelector('#text')
    const numberInput = document.querySelector('#number')
    console.log(textInput.value, numberInput.value);

    const randomHue = Math.round(Math.random()*360);
    // const randomHue = 100 + Math.round(Math.random()*100);
    console.log(randomHue);
    
    for(let i=0; i<numberInput.value; i++){
        const p = document.createElement('p');
        container.append(p);
        p.innerText = textInput.value;
        p.style.color = `hsl(${randomHue}, 50%, 40%)`;
    }

    // form.reset();
}