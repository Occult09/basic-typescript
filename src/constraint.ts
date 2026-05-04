// constraint : enforce strict rules

type Student = {
    id: number;
    name: string;
}

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
    return {
        courseName: 'Next Level',
        ...studentInfo,
    }
};

const student1 = {
    id: 123,
    name: 'Maheer',
    hasPen: false
};

const student2 = {
    id: 321,
    name: 'Occult',
    hasCar: true,
    isMarried: false
};

const s1 = addStudentToCourse(student1);
const s2 = addStudentToCourse(student2);

console.log(s1);
console.log(s2);