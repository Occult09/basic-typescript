// Function
// arrow function, normal function

function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addNormal(2, 2));

const addArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addArrow(3, 3));

// object => function (method)
const user = {
    name: 'Maheer',
    balance: 0,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    },
};
user.addBalance(10);

// loop => function(call back function)
const array: number[] = [1, 2, 3];

const sqrt: number[] = array.map((num: number): number => num * num);

console.log(sqrt);