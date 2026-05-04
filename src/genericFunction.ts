// const createArrayString = (value: string) => [value];

// const createArrayNumber = (value: number) => [value];

// const createArrayObject = (value: { id: number; name: string }) => {
//     return [value];
// };


// const arrString = createArrayString('Apple');
// const arrNumber = createArrayNumber(22);
// const arrObject = createArrayObject({id:33 ,name: 'Occult'});

const createGenericArray = <T>(value: T) => {
    return [value];
}

const arrString = createGenericArray('Occult');
const arrNumber = createGenericArray(22);
const arrObject = createGenericArray({ id: 22, name: 'Occult' });

// tuple
const createArrayTuple = (param1: string, param2: string) => [param1, param2];

const createGenericTuple = <X, Y>(param1: X, param2: Y) => [param1, param2];


// ------------------------------------

const addStudentToCourse = <T>(studentInfo: T) => {
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