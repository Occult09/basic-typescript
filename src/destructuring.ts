// object destructuring

const user = {
    id: 123,
    name: {
        firstName: 'Maheer',
        lastName: 'Musfiq'
    },
    gender: 'Male',
    favoriteColor: 'black'
};

const { id: userId, name: { firstName, lastName } } = user;

// console.log(userId, firstName, lastName);

// array destructuring

const friends = ['kakashi', 'deidara', 'yahiko'];

const [, , friend] = friends;

console.log(friend)