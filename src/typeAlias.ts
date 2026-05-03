type User = {
    name: {
        firstName: string;
        lastName: string;
    };
    gender: 'Male' | 'Female';
    address: {
        village: string;
        land: string;
    };
}

const user1: User = {
    name: {
        firstName: 'Obito',
        lastName: 'Uchiha'
    },
    gender: 'Male',
    address: {
        village: 'Konoha',
        land: 'land of fire'
    }
};

type Name = string;

const myName: Name = 'Nigga';

type IsAdmin = true;

const admin: IsAdmin = true;

// function
type AddFunction = (num1: number, num2: number) => number;

const add : AddFunction = (num1, num2) => {
    return (num1 + num2);
}