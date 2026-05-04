// dynamically generalized
type generic<value> = Array<value>


// const friends: string[] = ['a', 'b', 'c'];
const friends: generic<string> = ['a', 'b', 'c'];

// const rollNumbers: number[] = [4, 5, 6];
const rollNumbers: generic<number> = [4, 5, 6];

// const isElligibleList: boolean[] = [true, false, true];
const isElligibleList: generic<boolean> = [true, false, true];

// tuples
type Coordinates<x, y> = [x, y];

const coordinates1 = [20, 30];
const coordinates2 = ['20', '30'];

// object
type User = { name: string; age: number; };

const userList: generic<User> = [
    {
        name: 'x',
        age: 22
    },
    {
        name: 'y',
        age: 23
    }
]