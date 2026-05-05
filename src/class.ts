// oop - class - object

class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} is making sound : ${this.sound}`);
    }
}

const dog = new Animal("Dogesh", "dog", "gheu gheu");
const cat = new Animal('cat bhai', 'cat', 'meow meow');

// console.log(dog.sound);
// console.log(cat.name);

dog.makeSound();
cat.makeSound();