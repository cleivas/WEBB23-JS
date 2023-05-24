

const beerJson = '[{"id":207,"name":"International Arms Race (w/ Flying Dog)","tagline":"Zero IBU Herbal IPA.","first_brewed":"08/2012","description":"The International Arms Race was a new type of battle collaboration between hardcore American craft brewery Flying Dog and BrewDog. Both breweries attempted to brew an IPA with absolutely no hops.","image_url":"https://images.punkapi.com/v2/207.png","abv":7.5,"ibu":0,"target_fg":1013,"target_og":1069,"ebc":50,"srm":25,"ph":4.4,"attenuation_level":81.1,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":69,"unit":"celsius"},"duration":null}],"fermentation":{"temp":{"value":19,"unit":"celsius"}},"twist":"Juniper Berries: 25g at start, Bay Leaves: 2.75g at start, Rosemary: 7.5g at start, Rosemary: 5g at end, Elderflower: 15g at end, Juniper Berries: 25g at end"},"ingredients":{"malt":[{"name":"Maris Otter Extra Pale","amount":{"value":6,"unit":"kilograms"}},{"name":"Caramalt","amount":{"value":0.75,"unit":"kilograms"}},{"name":"Crystal 150","amount":{"value":0.25,"unit":"kilograms"}}],"hops":[{"name":"Bay Leaves","amount":{"value":5,"unit":"grams"},"add":"dry hop","attribute":"aroma"},{"name":"Rosemary","amount":{"value":25,"unit":"grams"},"add":"dry hop","attribute":"aroma"},{"name":"Elderflower","amount":{"value":10,"unit":"grams"},"add":"dry hop","attribute":"aroma"}],"yeast":"Wyeast 1056 - American Ale™"},"food_pairing":["Rosemary and thyme grilled chicken","Light vegetable and herb soup with toasted rye bread","Earl Grey ice cream with a lavender sauce"],"brewers_tips":"Allow the bay leaves to steep in the boil for extra time to extract some bitterness. The bitterness is really important to bring balance to an otherwise sweet beer.","contributed_by":"Sam Mason <samjbmason>"}]';

// Hämta ett random öl och visa namn, beskrivning och bild
const beerObj = JSON.parse(beerJson);
console.log(beerObj[0]);

const beerName = beerObj[0].name;
const beerDescription = beerObj[0].description;
const beerImgUrl = beerObj[0].image_url;
const foodPairings = beerObj[0].food_pairing;

console.log(beerName)
console.log(beerDescription)
console.log(beerImgUrl)


const h1 = document.createElement('h1');
h1.innerText = beerName;

const p = document.createElement('p');
p.innerText = beerDescription;

const img = document.createElement('img');
img.src = beerImgUrl;

const ul = document.createElement('ul');

console.log(foodPairings)
for(let pairing of foodPairings){
    const li = document.createElement('li');
    li.innerText = pairing;
    ul.append(li);
}

document.body.append(h1, p, img, ul);

//Lägg till en lista med alla food pairings


//Url för att söka på öl efter namn

// const url = 'https://api.punkapi.com/v2/beers?beer_name=hot'

//Url för öl som passar med kyckling
const url = 'https://api.punkapi.com/v2/beers?food=chicken'