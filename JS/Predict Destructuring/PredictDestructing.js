//Problem 1:
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// the output will be:
// Tesla
// Mercedes

//Problem 2:
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// the result will be:
// error for the first console.log because the variable name is renamed to other name
// and the second console.log will give
// Elon

//Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// the result will be:
// error for the both console.log because the object person does not contain the field password.

//Problem 4:
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// the result will be 
// console.log(first == second); will display false because first=2 and second=5
// console.log(first == third); will dispaly true becuase first=2 and third=2

//Problem 5:
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// the result will be:
// console.log(key); will display value

// console.log(secondKey); will display [1, 5, 1, 8, 3, 3]

// console.log(secondKey[0]); will display 1

// console.log(willThisWork); error because the variable secondKey is not accessible out of the object lastTest by simply its name