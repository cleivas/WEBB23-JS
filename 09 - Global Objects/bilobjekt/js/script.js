const car = {
    make: 'BMW',
    model: '3 serie',
    year: 1992,
    speed: 0,
    logInfo(){
        console.log(this.make, this.model, this.year);
    },
    increaseSpeed(targetSpeed){
        // for(let i = 0; i<targetSpeed-this.speed; i ){
        //     this.speed += 5;
        //     console.log(this.speed);
        // }
        while(this.speed<targetSpeed){
            this.speed += 5;
            console.log(this.speed);
        }
    },
    brake(){
        while(this.speed>0){
            this.speed-=5;
            console.log(this.speed)
        }
    }
}

car.increaseSpeed(200);
console.log('speed', car.speed);
car.brake();