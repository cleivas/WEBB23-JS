const form = document.querySelector('form');
const searchResultDiv = document.querySelector('#container');
const errorH3 = document.querySelector('#error');

form.addEventListener('submit', function(event){
    event.preventDefault();
    searchResultDiv.innerHTML = '';
    errorH3.innerText = '';

    const input = document.querySelector('input');
    const language = input.value;
    form.reset();

    

    const countryUrl = 'https://restcountries.com/v3.1/lang/' + language;
    // console.log(countryUrl);


    fetch(countryUrl)
        .then( response=>{
            // console.log(response);
            if(response.ok){
                return response.json();
            }
            else{
                throw 'Something went wrong';
            }
        })
        .then( displayCountries )
        .catch( handleError );
})

function displayCountries(countries){
    // console.log(countries[0].name.common);

    countries.forEach(country => {
        console.log(country.name.common);
        const p = document.createElement('p');
        p.innerText = country.name.common;
        searchResultDiv.append(p);
    });
}

function handleError(error){
    // console.log(error);
    errorH3.innerText = error;
}