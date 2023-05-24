const form = document.querySelector("form");

form.addEventListener("submit", searchDogImage);

function searchDogImage(event) {
  event.preventDefault();

  //Remove error message
  const h3 = document.querySelector('h3');
  h3.innerText = '';

  const input = document.querySelector("input");
  const breed = input.value;
  form.reset();

  const dogUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
  // console.log(dogUrl);

  fetch(dogUrl)
    .then((response) => {
      console.log(response.status);

      if (response.status >= 200 && response.status < 300){
        return response.json();
      }
      else{
        throw 'Breed does not exist';
      }

    })
    .then(displayDog)
    .catch( handleError );
}

function displayDog(dogObj) {
  const img = document.querySelector("img");
  img.src = dogObj.message;
}

function handleError(error){
    console.log(error);

    const img = document.querySelector("img");
    img.src = '';

    const h3 = document.querySelector('h3');
    h3.innerText = error;
}
