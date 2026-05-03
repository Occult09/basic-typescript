// spread operator

// array
const friends = ['izuku', 'shoto', 'bakugo'];

const schoolFriends = ['naruto', 'itachi', 'sasuke', 'madara'];

const collegeFriends = ['eren', 'mikasa', 'armin', 'levi'];

// friends.push(schoolFriends);
// friends = ['izuku', 'shoto', 'bakugo', ['naruto', 'itachi', 'sasuke', 'madara']];

friends.push(...schoolFriends);
console.log(friends);

// object
const user = {
    name: 'Occult',
    favoriteGame: 'R6'
};

const otherInfo = {
    email: 'maheermusfiq221@gmail.com'
};

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

// rest operator

const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Invitation sent to ${friend}`));
};

sendInvite('obito', 'pain', 'tobi', 'sasori');