// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. : optional chaining

// ternary operator
const isEligible = (age: number): string => {
    // if (age >= 21) {
    //     console.log('You are eligible');
    // }
    // else {
    //     console.log('You are not eligible');
    // }

    const result = age >= 21 ? 'You are eligible' : 'You are not eligible'
    return result;
}

const result = isEligible(21);
console.log(result);

// nullish coalescing operator
const userTheme = undefined;

const selectedTheme = userTheme ?? 'Light theme';

console.log(selectedTheme);