const dogJson = `{"message":"https:\/\/images.dog.ceo\/breeds\/hound-walker\/n02089867_1452.jpg","status":"success"}`;

console.log(dogJson);

const dogObj = JSON.parse(dogJson);
console.log(dogObj.message);

const img = document.createElement('img');
img.src = dogObj.message;

document.body.append(img);


//en random hundbild av en specifik hundras
const wolfHoundJson = '{"message":["https:\/\/images.dog.ceo\/breeds\/wolfhound-irish\/n02090721_3900.jpg","https:\/\/images.dog.ceo\/breeds\/wolfhound-irish\/n02090721_4326.jpg","https:\/\/images.dog.ceo\/breeds\/wolfhound-irish\/n02090721_4353.jpg"],"status":"success"}';
const wolfHoundObj = JSON.parse(wolfHoundJson);

console.log(wolfHoundObj.message);


wolfHoundObj.message.forEach( imgUrl =>{
    const img = document.createElement('img');
    img.src = imgUrl;

    document.body.append(img);
} )