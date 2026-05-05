class Person {
    getSleep() {
        console.log('I am a normal person. I sleep for 8 hours');
    }
}

class Student extends Person {
    getSleep() {
        console.log('I am a student. I sleep for 6 hours');
    }
}

class Developer extends Person {
    getSleep() {
        console.log('I am a developer. I sleep for 4 hours');
    }
}

const getSleepingHours = (param: Person) => {
    return param.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);


class Shape {
    getArea(): number {
        return 0;
    }
};

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
};

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }
};

const getArea = (params: Shape) => {
    return params.getArea();
}

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);

console.log(getArea(shape1));
console.log(getArea(shape2));
console.log(getArea(shape3));