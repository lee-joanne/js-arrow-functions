/**
 * To run this file in Gitpod, use the
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumber(a, b) {
    // Code block
    return a + b
}
let sum1 = addTwoNumber(3, 5);
console.log(sum1);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum2 = addTwoNumbers(3, 5);
console.log(sum2)

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b; //can also have parenthesis
let sum3 = addTwoNumbers2(6, 4);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello there!!");
const sayHello = () => console.log('hello')
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p > `
)
console.log(returnMultipleLines())