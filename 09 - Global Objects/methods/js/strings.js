const name = 'Robert';
const lastName = 'Toth';

console.log(name.length, lastName.length );
console.log( name.charAt(0, 1, 2), lastName.charAt(1) );

const fullName = name.concat(' ', lastName, ', Uttalas tott på svenska');
console.log(fullName);
console.log(name);

console.log( fullName.includes('På') );
console.log(fullName.length);
console.log( fullName.includes('på', 33));

//byt ut tott mot valfritt uttal
const newFullName = fullName.replace('tott', 'bob')
console.log( newFullName );
console.log( fullName );

const name2 = 'Erik';
console.log( name2.substring(1, 3) )


console.log( `My name is ${ name2.repeat(3) }` )