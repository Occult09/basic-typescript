// oop : instance of type guard/ type narrowing

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    getSleep(numOfHours: number) {
        console.log(`${this.name} sleeps for ${numOfHours} hours`);
    };
};

class Student extends Person {
    constructor(name: string) {
        super(name);
    };

    doStudy(numOfHours: number) {
        console.log(`${this.name} studies for ${numOfHours} hours`);
    };
};

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    };

    takesClass(numOfHours: number) {
        console.log(`${this.name} takes class for ${numOfHours} hours`);
    };
};

// function guard 
const isStudent = (user: Person) => {
    return user instanceof Student;
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

const getStudentInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(5);
    }
    else if (isTeacher(user)) {
        user.takesClass(3);
    }
    else {
        user.getSleep(12);
    }
}


const student1 = new Student('Student');
const teacher1 = new Teacher('Teacher');
const person1 = new Person('Person');

getStudentInfo(student1);
getStudentInfo(teacher1);
getStudentInfo(person1);