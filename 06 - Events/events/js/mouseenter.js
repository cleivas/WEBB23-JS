const hoverH1 = document.querySelector('h1');
hoverH1.addEventListener('mouseenter', function(){
    console.log('mouse enter');
    hoverH1.style.background = 'skyblue';
})

hoverH1.addEventListener('mouseleave', function(event){
    console.log(event);
    hoverH1.style.background = 'none';
})

//Ändra bakgrundsfärgen på bodyn
//om muspekaren är över knappen hotpink ska bakgrunden vara hotpink
//om muspekaren är över knappen orange ska bakgrunden vara orange

const hotpinkBtn = document.querySelector('#hotpink');
hotpinkBtn.addEventListener('mouseenter', changeBgColor);

const orangeBtn = document.querySelector('#orange');
orangeBtn.addEventListener('mouseenter', changeBgColor);

const blueBtn = document.querySelector('#blue');
blueBtn.addEventListener('mouseenter', changeBgColor);


function changeBgColor(event){
    console.log(event);
    document.body.style.backgroundColor = event.target.innerText;
}