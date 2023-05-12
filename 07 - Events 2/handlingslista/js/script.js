const form = document.querySelector('form');
form.addEventListener('submit', addItem);

// const btn = document.querySelector('button');
// btn.addEventListener('click', addItem);


function addItem(event){
    event.preventDefault();

    const container = document.querySelector('#item-container');
    const h3 = document.createElement('h3');
    container.append(h3);


    const itemInput = document.querySelector('#item');
    const amountInput = document.querySelector('#amount');

    h3.innerText = amountInput.value + ' ' + itemInput.value;

    h3.style.backgroundColor = `hsl(${amountInput.value*10}, 80%, 80%)`;

    // const color = amountInput.value;
    // if(color<10) 
    //     h3.style.backgroundColor = 'green';
    // else if(color >=10 && color <=20)
    //     h3.style.backgroundColor = 'orange';
    // else 
    //     h3.style.backgroundColor = 'red';


    form.reset();
    // console.log(event);

    h3.addEventListener('click', function(){
        h3.remove();
    })
}
