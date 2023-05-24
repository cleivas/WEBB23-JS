// const card = {
//     suit: 'hearts',
//     value: 11,
//     char: 'kn'
// }
// const deck = [card, card];
// console.log(deck);

const suits = ['hearts', 'spades', 'diamond', 'clubs'];
const chars = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Kn', 'Q', 'K', 'A'];

const deck = [];
suits.forEach( suit =>{
    chars.forEach( (char, i) =>{
        // console.log(suit, char, i)
        const card = {
            suit: suit,
            char: char,
            value: i+1
        };
        deck.push(card);
    })
})

console.log(deck);

function getShuffledDeck(deckPar){
    const deck = [];
    Object.assign(deck, deckPar); //Klonar argumentet
    const shuffledDeck = [];

    while(deck.length > 0){
        const randomIndex = Math.floor( Math.random()* deck.length);

        //Tar bort ett random element ur arrayen och returnerar en array med det elementet som togs bort. 
        //card kommer alltså innehålla det kortobjektet som togs bort
        const card = deck.splice(randomIndex, 1)[0]; 
        shuffledDeck.push(card);
        // console.log(card);
    }
    console.log(deck);
    return shuffledDeck;
}

const shuffledDeck = getShuffledDeck(deck);
console.log(shuffledDeck);