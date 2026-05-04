const arrayOfNumber: number[] = [1, 2, 3];

const arrayOfString: string[] = ['1', '2', '3'];

const arrayOfStringUsingMap: string[] = arrayOfNumber.map(num => num.toString());

console.log(arrayOfStringUsingMap);

type AreaOfNumber = {
    height: number;
    width: number;
};

// type AreaOfString = {
//     height: string;
//     width: string;
// };

type AreaOfString = {
    [key in keyof AreaOfNumber]: string;
};


