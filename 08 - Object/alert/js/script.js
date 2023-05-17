const btn = document.querySelector('button');
const h1 = document.querySelector('h1');


btn.addEventListener('click', ()=>{
    h1.innerText = 'After'

    setTimeout(()=>{
        alert('change text')
    }, 100);
    
})