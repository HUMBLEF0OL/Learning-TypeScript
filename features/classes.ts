class Vehicle {
    // color: string;
    // constructor(color: string) {
    //     this.color = color;
    // }
    constructor(public color: string) { }
    public drive(): void {
        console.log("driving");
    }
    protected honk(): void {
        console.log("beep");
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    drive(): void {
        console.log("vroom");
    }

    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
