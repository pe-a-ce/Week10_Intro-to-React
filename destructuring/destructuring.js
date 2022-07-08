const numbers = [1,2,3,4,5];

// const otherNumbers = numbers;
// we now have two variables pointing to the same array, so any change to otherNumbers will change numbers
const otherNumbers = [...numbers];
//SPREAD OPERATOR: they are now independent of each other, creates a new array which can then be modified

/*
otherNumbers.push(6);
numbers.shift();

console.log("numbers:", numbers);
console.log("otherNumbers:",otherNumbers);
console.log("first
*/


const [firstNumber, secondNumber,...remainingNumbers] = numbers;

console.log("first number:", numbers[0]);
console.log("firstNumber deconstructed:", firstNumber);
console.log("second Number:", numbers[1]);
console.log("secondNumber deconstructed:", secondNumber);
console.log("remainingNumbers",remainingNumbers);

const person = {
    name: "Peace",
    age: 25,
    homeTown: "Luton",
    favColour: "purple",
    favouriteFoods: ["chocolate", "orange", "apple", "tuna"]
}

const{name, age, homeTown,favColour, favouriteFoods} = person;

// console.log(name);
// console.log(age);
// console.log(homeTown);

let [thing1, thing2,...leftovers] = favouriteFoods;

console.log(thing1);
console.log(thing2);
console.log(leftovers);
