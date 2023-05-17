const animal1 = {
    type: 'giraff',
    sound: 'vov vov vov',
    movement: 'runs',
    makeSound(){
        console.log(this.sound);
    },
    moveForwarn(){
        console.log(this.movement);
    }
}

const animal2 = {
    type: 'Dolphin',
    sound: 'klick klick klick piip ee eeee',
    movement: 'Swims',
    makeSound(){
        console.log('klick klick klick piip ee eeee')
    },
    moveForward(){
        console.log('Swims');
    }
}

animal1.makeSound();
animal1.moveForwarn();
animal2.makeSound();


//Hitta på ett eget djur med samma egenskaper och metoder
//Använd keyword this