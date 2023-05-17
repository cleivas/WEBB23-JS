const boat = {
    brand: 'hr',
    length: 580,
    hasSail: false,
    startEngine(){
        console.log('starting...')
    },
    accessories: ['tv', 'micro', 'cykel', 'gps', 'ekolod'],
    anotherObject: {
        prop1: 'en egenskap',
        prop2: true
    }
}

console.log( boat );

console.log( boat.brand );

boat.startEngine();

console.log( boat.hasSail );
console.log( boat.length );

console.log(boat.accessories[2] );

console.log(boat.anotherObject.prop2 )