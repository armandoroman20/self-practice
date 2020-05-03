"use strict";

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(number, bill) {
    if (number === 0) {
        return (" You get no discount");
    } else if (number === 1) {
        return " You get a 10% discount. Your new bill is, " + (bill * .90);
    } else if (number === 2) {
        return " You get a 25% discount. Your new bill is, " + (bill * .75);
    } else if (number === 3) {
        return " You get a 35% discount. Your new bill is, " + (bill * .65);
    } else if (number === 4) {
        return (" You get a 50% discount. Your new bill is, " + (bill * .50));
    } else if (number === 5) {
        return (" You get it all free!");
    } else {
        return " Please enter a valid number";
    }
}

// console.log(calculateTotal(0, 200));
// console.log(calculateTotal(1, 200));
// console.log(calculateTotal(2, 200));
// console.log(calculateTotal(3, 200));
// console.log(calculateTotal(4, 200));
// console.log(calculateTotal(5, 200));
// console.log(calculateTotal(28, 200));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);
var userBill = parseFloat(prompt("please enter your bill"));

alert ("Your lucky number was " + luckyNumber + "." +  calculateTotal(luckyNumber, userBill));



//
// var originalArray = [1,2,'dog','cat',3,'mouse','4'];
//
// function separateNumValues(arr){
//     // empty bucket to catch values
//     var numberArray = [];
//     arr.forEach(function(element){
//         if(typeof(element) === "number"){
//             // element will be added to numberArray if type is number
//             numberArray.push(element);
//         }
//     });
//     return numberArray;
// }
//
// console.log(separateNumValues(originalArray));