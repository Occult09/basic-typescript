type User = {
    name: string;
    age: number;
};

type Role = {
    role: 'admin' | 'user';
};

type UserWithRole = User & Role;

const user1: UserWithRole = {
    name: 'Occult',
    age: 26,
    role: 'admin'
};

// interface : object type: array, object, function
// object
interface IUser {
    name: string;
    age: number;
};

interface IUserWithRole extends IUser {
    role: 'admin' | 'user';
};

const user2: IUser = {
    name: 'Maheer',
    age: 25
};

const user3: IUserWithRole = {
    name: 'Musfiq',
    age: 25,
    role: 'admin'
};

// function
type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;

interface IAdd {
    (num1: number, num2: number): number
}
const iadd: IAdd = (num1, num2) => num1 + num2;


// array
type Friend = string[];
const friends: Friend = ["a", "b", "c"];

interface IFriends {
    [index: number]: string;
}
const Ifriends: IFriends = ["a", "b", "c"];