"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isNegative (number) {
    if (number < 0)
    { return true;
    } else {
        return false;
    }
}

function isTen (number) {
    if (number === 10)
    {return true;
    } else {
        return false;
    }
}

function double (number) {
    return number * 2
}

// function remove9s (arr) {
//     for(var i = 0; i < arr.length; i ++) {
//         var filteredAry = arr.filter(function(e) { return e !== 9 }); {
//         }
//         return filteredAry
//     }
//     }

function remove9s (arr) {
    var nines = [];
    arr.forEach(function(num) {
        if (num !== 9) {
            nines.push(num);
        }
    });
    return nines
}

// function average (array) {
//     var avg = 0;
//     for (var i = 0;i < array.length; i++) {
//         avg += array[i] / array.length
//     }
//     return avg
// }

function average (arr) {
    var avg = 0;
    for(var i =0; i < arr.length; i++) {
        avg += arr[i] / arr.length
    }
    return avg
}

function countOdds (array) {
    var oddNums = [];
    array.forEach(function(element){
        if(element % 2 !== 0){
            oddNums.push(element);
        }
    });
    return oddNums.length
}

function convertNameToObject (name) {
    var splitName = name.split(" ");
    return { firstName: splitName[0], lastName: splitName[1]}
}

function capitalizeName (str) {
    var caps = str.split(" ");
    return caps.map(caps => caps[0].toUpperCase() + caps.slice(1)).join(" ");
}

// function capitalizeName (name) {
//     var splitName = name.split(" ");
//     splitName.forEach(function(partOfName, index) {
//         splitName[index] = partOfName.substring(0,1).toUpperCase() + partOfName.substring(1, partOfName.length).toLowerCase();
//     });
//     return splitName.join(" ");
// }

// function capitalizeAllNames(arr) {
//     var bucket = [];
//     arr.forEach(function(name) {
//         bucket.push(capitalizeName(name));
//     });
//     return bucket
// }

function capitalizeAllNames (arr) {
    var bucket = [];
    for(var i = 0; i < arr.length; i++) {
        bucket.push(capitalizeName(arr[i]));
    }
    return bucket
}

// function countVowels(value)
// {
//     var vowels = 'aeiouAEIOU';
//     var vcount = 0;
//
//     for(var x = 0; x < value.length ; x++)
//     {
//         if (vowels.indexOf(value[x]) !== -1)
//         {
//             vcount += 1;
//         }
//
//     }
//     return vcount;
// }

function countVowels(str) {
    var splitString = str.toLowerCase().split("");
    var counter = 0;
    splitString.forEach(function (char) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            counter++;
        }
    });
    return counter;
}

function averageSales (object) {
    var sum = 0;
    for(var i = 0; i < object.length; i +=1) {
        sum += object[i].sales / object.length
    }
    return sum
}

function analyzeWord (str) {
    return {
        word: str,
        numberOfLetters: str.length,
        numberOfVowels: countVowels(str)
    }
}

function analyzeAllWords (arr) {
    var bucket = [];
    arr.forEach(function(word) {
        bucket.push(analyzeWord(word))
    });
    return bucket
}