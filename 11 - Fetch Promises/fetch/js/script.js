const dogUrl = "https://dog.ceo/api/breeds/image/random";

// const firstPromise = fetch(dogUrl);
// console.log('First promise', firstPromise);

// const secondPromise = firstPromise.then( function(response){
//     console.log(response);
//     return response.json();
// });
// console.log('Second promise', secondPromise);

// secondPromise.then( function(value){
//     console.log(value);
// } )

// console.log('Sist i koden');

// fetch(dogUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function(dogInfo) {
//     console.log(dogInfo);

//     const img = document.createElement('img');
//     document.body.append(img);
//     img.src = dogInfo.message;
//   });

fetch(dogUrl)
  .then((response) => response.json())
  .then( displayDogImage );

function displayDogImage(dogObj) {
  const img = document.createElement("img");
  document.body.append(img);
  img.src = dogObj.message;
}
