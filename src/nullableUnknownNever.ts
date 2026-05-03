// nullable type

const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DB: ${input}`);
    }
    else {
        console.log('From DB: All Users');
    }
};

getUser(null);

// unknown type
const discountCalculator = (input: unknown) => {
    if (typeof input === 'number') {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
    }
    else if (typeof input === 'string') {
        const [discountedPrice] = input.split(" ");
        console.log(Number(discountedPrice) * 0.1);
    }
    else {
        console.log('Wrong Input');
    }
};

discountCalculator(100);
discountCalculator('100 TK');
discountCalculator(null);

// never
const throwError = (msg: string) => {
    throw new Error(msg);
}

throwError('error!');