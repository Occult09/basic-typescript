class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    };

    sleeing(numOfHours: number) {
        console.log(`${this.name} sleeps for ${numOfHours} hours`);
    };
}

class Student extends Parent { };

const student1 = new Student('Occult', 25, 'BD');

student1.sleeing(12);

class Teacher extends Parent {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    };

    sleeing(numOfHours: number) {
        console.log(`${this.name} sleeps for ${numOfHours} hours`);
    };

    takesClass(numOfHours: number) {
        console.log(`${this.name} takes class for ${numOfHours} hours`);
    };
};

const teacher1 = new Teacher('Kakashi', 30, 'BD', 'Jonin');

teacher1.takesClass(10);