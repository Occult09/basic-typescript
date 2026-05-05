class Counter {
    static count: number = 0;

    increment() { //we can also static this method
        return (Counter.count = Counter.count + 1);
    }
    decrement() {
        return (Counter.count = Counter.count - 1);
    }
}

const count1 = new Counter();
const count2 = new Counter();
const count3 = new Counter();

console.log(count1.increment());
console.log(count1.increment());
console.log(count1.increment());
console.log(count2.increment());
console.log(count2.increment());
console.log(count2.increment());
console.log(count2.increment());
console.log(count2.increment());
console.log(count3.increment());
console.log(count3.increment());
console.log(count3.increment());
console.log(count1.increment());
console.log(count1.increment());
console.log(count1.increment());
console.log(count1.increment());
console.log(count1.increment());