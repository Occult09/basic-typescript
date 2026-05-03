// array, object
// tuple

// array & tuple
let bazarList: string[] = ['eggs', 'milk', "sugar"];

bazarList.push("salt");


let mixedArr: (number | string)[] = ["eggs", 12, "milk", 1, "sugar", 2];

mixedArr.push("apple");

let coordinates: [number, number] = [20, 30];

let destination: [string, string, number] = ["Dhaka", "Tokyo", 10];

// reference type : object
const user: {
    // organization: "Programming Hero"; //literal type
    readonly organization: string;
    firstName: string;
    middleName?: string; //optional
    lastName: string;
} = {
    organization: 'Programming Hero',
    firstName: 'Mohammad',
    middleName: 'Maheer',
    lastName: 'Musfiq'
};

console.log(user);