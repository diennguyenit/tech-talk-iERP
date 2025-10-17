interface Animal {
    readonly type: string;
    greet(): void;
}

class Human implements Animal {
    type = 'Human';

    greet() {
        console.log('I am a Human');
    }

    work() {
        console.log('I can go to work');
    }
}

class Dog implements Animal {
    type = 'Dog';

    greet(): void {
        console.log('I am a Dog');
    }

    bark() {
        console.log('I like barking');
    }
}

class Bird implements Animal {
    type = 'Bird';

    greet(): void {
        console.log('I am a Bird');
    }
    
    fly() {
        console.log('Fly with me');
    }
}

const characters: Animal[] = [];

const Max = new Human();
const Boo = new Dog();
const Sweety = new Bird();

characters.push(Max, Boo, Sweety);

for (let i = 0; i < characters.length; i++) {
    characters[i].greet()
}

class Coder {
    age!: number;

    constructor(public name: string) {}
}

const Jack = new Coder('Jack');
console.log(Jack.name);