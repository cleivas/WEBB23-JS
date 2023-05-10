const form = document.querySelector('form');

form.addEventListener('submit', replaceText);

function replaceText(event){
    event.preventDefault(); //Måste alltid vara med vid ett submit event

    // console.log(event);
    const textInput = document.querySelector('#text');
    const numberInput = document.querySelector('#number');

    const h1 = document.querySelector('h1');
    h1.innerText = numberInput.value + ' x ' + textInput.value;

    form.reset();
}