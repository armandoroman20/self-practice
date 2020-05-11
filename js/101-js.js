"use strict";

// function firstToLast (array) {
//     return array.push(array.shift()) && array;
// }
//
// console.log(firstToLast([1, 2, 3, 4]));
// console.log(firstToLast(["JS", "is", "awesome"]));
// console.log(firstToLast(["strawberry", "kiwi", "mango", "guava"]));
//
//
// function mean (input) {
//     var sum = 0;
//     for (var i = 0; i < input.length; i+=1) {
//         sum += input[i] /= input.length;
//     }
//     return sum
// }
//
// console.log(mean([1, 2, 3, 4]));
// console.log(mean([3, 3, 3]));
// console.log(mean([1, 5, 6]));
//
// // Write a function definition named median that takes in sequence of numbers and returns the average value
//
// function median (sequence)  {
//     var middle = Math.floor(sequence.length / 2),
//         nums = [...sequence].sort((a, b) => a - b);
//     return sequence.length % 2 !== 0 ? nums[middle] : (nums[middle - 1] + nums[middle]) / 2;
// }
//
// console.log(median([1, 2, 3, 4, 5]));
// console.log(median([1, 2, 3]));
// console.log(median([1, 5, 6,]));
//
//
// // write a function definition named maxMinusMin that takes in an array of numbers
// // and returns the difference of the maximum minus theminimum.
//
// function maxMinusMin (array) {
//    return Math.max(...array) - Math.min(...array);
// }
//
//
// console.log(maxMinusMin([1, 2, 2, 8, 3, 4]));
//
// // write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together
//
// function productOfAll (input) {
//     var sum = 1;
//     for ( var i = 0; i < input.length; i+=1) {
//         sum  *= input[i] ;
//     }
//     return sum
// }
//
// console.log(productOfAll([1, 2, 3]));
// console.log(productOfAll([3, 4, 5]));
// console.log(productOfAll([2, 2, 3, 0]));
//
// // Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.
//
// function onlyOddNumbers (array) {
//     var oddArray = [];
//     array.forEach(function(element){
//         if(element % 2 !== 0){
//             oddArray.push(element);
//         }
//     });
//     return oddArray;
// }
//
// console.log(onlyOddNumbers([1, 2, 3]));
//
// // Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence
//
//  function hasEvens (array) {
//     var containsEvenNum = false;
//
//     array.forEach(function(element) {
//         if(element % 2 === 0) {
//             containsEvenNum = true;
//         }
//     });
//     return containsEvenNum;
// }
//
//
//
// console.log(hasEvens([1, 2, 3]));
// console.log(hasEvens([2, 5, 6]));
// console.log(hasEvens([3, 3, 3]));
//
// // Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers
//
// function countEvens (sequence) {
//     sequence.forEach(function(element) {
//         var isEven = element / 2 === 0;
//         if(element === isEven) {
//         }
//         console.log(true);
//     });
//     return sequence;
// }
//
// // Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers
//
//
// function countEvens (array) {
//     var evenNums = [];
//     array.forEach(function(element){
//         if(element % 2 === 0){
//             evenNums.push(element);
//         }
//     });
//     return evenNums.length
// }
//
// // countEvens();
// console.log(countEvens([1, 2, 3]));
// console.log(countEvens([2, 5, 6]));
// console.log(countEvens([3, 3, 3]));
// console.log(countEvens([5, 6, 7, 8]));
//
// // Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence
//
//  function hasOdds (array) {
//     var containsOddNum = false;
//
//     array.forEach(function(element) {
//         if(element % 2 !== 0) {
//             containsOddNum = true;
//         }
//     });
//     return containsOddNum;
// }
//
// console.log(hasOdds([1, 2, 3]));
// console.log(hasOdds([2, 5, 6]));
// console.log(hasOdds([3, 3, 3]));
// console.log(hasOdds([2, 4, 6]));

// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers


// function countNegatives (sequence) {
//     var negNums = [];
//     for( var i = 0; i < sequence.length; i++) {
//         if (sequence[i] < 0 ) {
//             negNums.push([i])
//         }
//     }
//     return negNums.length
// }
//
// console.log(countNegatives([1, -2, 3]), 1);
// console.log(countNegatives([2, -5, -6]), 2);

// Exercise 75
// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers

// function countNegatives (sequence) {
//     var negNums = [];
//     for( var i = 0; i < sequence.length; i++) {
//         if (sequence[i] < 0 ) {
//             negNums.push([i])
//         }
//     }
//     return negNums.length
// }

// console.log(countNegatives([3, 3, 3]), 0);

// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers

// function countPositives (sequence) {
//     var posNums = [];
//     for( var i = 0; i < sequence.length; i++) {
//         if (sequence[i] > 0 ) {
//             posNums.push([i])
//         }
//     }
//     return posNums.length
// }
//
//
//
// console.log(countPositives([1, -2, 3]));



// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence

//======FOR EACH METHOD

// function onlyPositiveEvens (array) {
//     var positiveEvenArray = [];
//     array.forEach(function(element){
//         if(element > 0 && element % 2 === 0){
//             positiveEvenArray.push(element);
//         }
//     });
//     return positiveEvenArray;
// }

// =======FOR METHOD

// function onlyPositiveEvens (sequence) {
//     var posEvenNums = [];
//     for( var i = 0; i < sequence.length; i++) {
//         if(sequence[i] > 0 && sequence[i] % 2 ===0) {
//             posEvenNums.push(sequence[i])
//         }
//     }
//     return posEvenNums;
// }
//
// console.log(onlyPositiveEvens([1, -2, 3]));
// console.log(onlyPositiveEvens([2, -5, -6]));
// console.log(onlyPositiveEvens([3, 3, 4, 6]));
// console.log(onlyPositiveEvens([2, 3, 4, -1, -5]));

// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence

// function onlyPositiveOdds (sequence) {
//     var posOddArr = [];
//     for(var i = 0; i < sequence.length; i++) {
//         if(sequence[i] > 0 && sequence[i] % 2 !== 0) {
//             posOddArr.push(sequence[i])
//         }
//     }
//     return posOddArr;
// }
//
// console.log(onlyPositiveOdds([1, -2, 3]));
// console.log(onlyPositiveOdds([2, -5, -6]));
// console.log(onlyPositiveOdds([3, 3, 4, 6]));
// console.log(onlyPositiveOdds([2, 3, 4, -1, -5]));

// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence

// function onlyNegativeEvens (sequence) {
//     var negEvenNum = [];
//     for (var i = 0; i < sequence.length; i+=1) {
//         if (sequence[i] < 0 && sequence[i] % 2 === 0) {
//             negEvenNum.push(sequence[i])
//         }
//     }
//     return negEvenNum;
// }
//
// console.log(onlyNegativeEvens([1, -2, 3]));
// console.log(onlyNegativeEvens([2, -5, -6]));
// console.log(onlyNegativeEvens([3, 3, 4, 6]));
// console.log(onlyNegativeEvens([2, 3, 4, -1, -5]));

// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence

// function onlyNegativeOdds (sequence) {
//     var negOddNum = [];
//     for(var i = 0; i < sequence.length; i+=1) {
//         if(sequence[i] < 0 && sequence[i] % 2 !== 0) {
//             negOddNum.push(sequence[i])
//         }
//     }
//     return negOddNum
// }
//
// console.log(onlyNegativeOdds([1, -2, 3]));
// console.log(onlyNegativeOdds([2, -5, -6]));
// console.log(onlyNegativeOdds([3, 3, 4, 6]));
// console.log(onlyNegativeOdds([2, 3, 4, -1, -5]));

// Exercise 81
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.


// function shortestString (array) {
// var short = Infinity;
// var shortest;
// for(var i = 0; i < array.length; i++) {
//     if(array[i].length < short) {
//         short = array[i].length;
//         shortest = array[i]
//     }
// }
// return shortest
// }
//
//
//  console.log(shortestString(["kiwi", "mango", "strawberry"]));
//  console.log(shortestString(["hello", "everybody"]));
//  console.log(shortestString(["mary", "had", "a", "little", "lamb"]));

// Exercise 83
// Write a function definition named getUniqueValues that takes in an array and returns an with only the unique values from that array.

// function getUniqueValues (array) {
//         return array.filter((a, b) => array.indexOf(a) === b)
//     }
//
// console.log(getUniqueValues(["ant", "ant", "mosquito", "mosquito", "ladybug"]));

// Exercise 84
// Write a function definition named elementsTimesTwo that takes in an array of numbers and returns an array with each value multiplied by 2.


// function elementsTimesTwo (array) {
// var byTwo = [];
// for(var i = 0; i < array.length; i++) {
//     byTwo.push(array[i]*2);
// }
// return byTwo;
// }
//
// console.log(elementsTimesTwo([1, 2, 3]));
// console.log(elementsTimesTwo([0, 0, 0]));
// console.log(elementsTimesTwo([5, 10, 15,]));

// Exercise 85
// Write a function named flatten that takes in an array of arrays. Return the flattened array.

// function flatten (array) {
//     var flattened = array.flat([]);
//     for(var i = 0; i < array.length; i++) {
//          flattened = array.flat()
//     }
//     return flattened
// }
//
// console.log(flatten([[1, 2], [3, 4], [5, 6]]));
// console.log(flatten([[1, 2, 3], [1, 2, 3], [1, 2, 3]]));
// console.log(flatten([["tomato", "mango", "kiwi"]]));
// Exercise 86
// Write a function definition named addOneToArray that adds one to every number in an array

// function addOneToArray (array) {
//     var added = [];
//     for (var i = 0; i < array.length; i++) {
//         added.push(array[i] + 1)
//     }
//     return added;
// }
//
// console.log(addOneToArray([1, 2, 3]));
// console.log(addOneToArray([4, 4, 4]));
// console.log(addOneToArray([9, 10, 11]));

// const tukeyPaper = {
//     "title": "The Future of Data Analysis",
//     "author": "John W. Tukey",
//     "link": "https://projecteuclid.org/euclid.aoms/1177704711",
//     "year_published": 1962
// }
//
// const thomasPaper = {
//     "title": "A mathematical model of glutathione metabolism",
//     "author": "Rachel Thomas",
//     "link": "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
//     "year_published": 2008
// }
//
// function getPaperTitle (object) {
// return object.title
// }
//
// console.log((getPaperTitle(tukeyPaper)));
// console.log((getPaperTitle(thomasPaper)));

//=========

const books = [
    {
        "title": "Genetic Algorithms and Machine Learning for Programmers",
        "price": 36.99,
        "author": "Frances Buontempo"
    },
    {
        "title": "The Visual Display of Quantitative Information",
        "price": 38.00,
        "author": "Edward Tufte"
    },
    {
        "title": "Practical Object-Oriented Design",
        "author": "Sandi Metz",
        "price": 30.47
    },
    {
        "title": "Weapons of Math Destruction",
        "author": "Cathy O'Neil",
        "price": 17.44
    }
];


// Exercise 91
// Write a function named getNumberOfBooks that takes in a array of objects and returns the number of objects in that array.

// function getNumberOfBooks () {
//     return books.length
// }
//
// console.log(getNumberOfBooks(books));

// Exercise 92
// Write a function named totalOfBookPrices that takes in a array of objects and returns the sum total of all the book prices added together

// function totalOfBookPrices () {
//     var sum = 0;
//     for(var i = 0; i < books.length; i +=1) {
//         sum += books[i].price
//     }
//     return sum
// }
//
// console.log(totalOfBookPrices(books));

// Exercise 94
// Write a function called highestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the highest priced book.
// Hint: Much like sometimes start functions with a variable set to zero, you may want to create a object with the price set to zero to compare to each object's price in the array


// function highestPriceBook (books) {
// var high = {
//     price: 0
// };
// for(var i = 0; i < books.length; i++) {
//     if (books[i].price > high.price) {
//         high = books[i];
//     }
// }
// return high
// }
//
// console.log(highestPriceBook(books));

// Exercise 95
// Write a function called lowestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the lowest priced book.
// Hint: Much like sometimes start functions with a variable set to zero or float('inf'), you may want to create a object with the price set to float('inf') to compare to each object in the array

// function lowestPriceBook (books) {
//     var low = {
//         price: Infinity
//     };
//     for(var i = 0; i < books.length; i++) {
//         if (books[i].price < low.price) {
//             low = books[i];
//         }
//     }
//     return low
// }
//
// console.log(lowestPriceBook(books));


const shoppingCart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
};

// Exercise 97
// Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.

// function numberOfItemTypes () {
//     for(var i = 0; i < shoppingCart.items.length; i++)
//     {
//         return shoppingCart.items.length
//     }
// }
//
// console.log(numberOfItemTypes(shoppingCart));

// Exercise 98
// Write a function named totalNumberOfItems that takes in the shopping cart as input and returns the total number all item quantities.
// This should return the sum of all of the quantities from each item type

// function totalNumberOfItems () {
//     var sum = 0;
//     for(var i = 0; i < shoppingCart.items.length; i++)
//     {
//         sum += shoppingCart.items[i].quantity
//     }
//   return sum;
// }
//
// console.log(totalNumberOfItems(shoppingCart));

// Exercise 99
// Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
// Hint - This should determine the total price divided by the number of types of items. This does not account for each item type's quantity.

// function getAverageItemPrice (shoppingCart) {
//     var average = 0;
//     for(var i = 0; i < shoppingCart.items.length; i++) {
//         average += shoppingCart.items[i].price / shoppingCart.items.length
//     }
//     return average
// }
//
// console.log(getAverageItemPrice(shoppingCart));

// Exercise 100
// Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item's quanties times that item's price.
// Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity

// function getAverageSpentPerItem (shoppingCart) {
//
//     for(var i = 0; i < shoppingCart.items.length; i ++) {
//
//     }
//      return totalQuantPrice;
// }
// console.log(getAverageSpentPerItem(shoppingCart));

// function capitalizeAllNames (str) {
//     for (var i = 0; i < str.length; i++) {
//         var caps = str.split(" ");
//         return caps.map(caps => caps[0].toUpperCase() + caps.slice(1)).join(" ");
//     }
// }
// console.log(capitalizeName(['ron weasley']));


function convertNameToObject (string) {

    var fullName = string;
    for(var i = 0; i < string.length; i++) {
        var split = fullName.split();
    }
    return split
}

console.log(convertNameToObject('Harry Potter'));


// {firstName: 'Harry', lastName: 'Potter'}


// function capitalizeAllNames(str)
// {
//     var array1 = str.split(' ');
//     var newarray1 = [];
//
//     for(var x = 0; x < array1.length; x++){
//         newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//     }
//     return newarray1.join(' ');
// }
//
// console.log(capitalizeAllNames(['ron weasley', 'harry potter', 'hermione granger']));

// function capitalizeName (str) {
//     var caps = str.split(' ');
//     return caps.map(caps => caps[0].toUpperCase() + caps.slice(1)).join(" ");
// }
//
// console.log(capitalizeName(['ron weasley', 'harry potter', 'hermione granger']));