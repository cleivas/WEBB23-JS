const form = document.querySelector('form');

form.addEventListener('submit', searchDogImage );


function searchDogImage(event){
    event.preventDefault();

    const input = document.querySelector('input');
    const breed = input.value;
    form.reset();


    const dogUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
    console.log(dogUrl);

    fetch(dogUrl)
            .then(response => response.json() )
            .then( displayDog );
}


function displayDog(dogObj){
    const img = document.querySelector("img");
    img.src = dogObj.message;
}  