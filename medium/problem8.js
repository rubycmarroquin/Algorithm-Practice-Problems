/**
 * source: https://edabit.com/challenge/paMpZoEJ6gr4feMS3
 * 
 * The insurance guy laughs, he's just kidding. He just needs an updated list. 
 * You just need one of those Rammstein Vodka bottles.
 * Given an object with alcoholic drinks and a number, 
 * return a string with the name of the Rammstein bottle that matches the given number.
 * 
 * Notes: 
 * There will always be a corresponding Rammstein bottle for the number given.
 * There will never be 2 Rammstein bottles with the same number.
 * You always return one Rammstein bottle.
 */
function getVodkaBottle(obj, num) {
    for(let key in obj) {
        if(key.includes("Rammstein") && obj[key] === num) return key;
    }
}

/** Test Cases */

// ➞ "Rammstein A"
const obj1 = { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }; 
let num1 = 100;
console.log(getVodkaBottle(obj1, num1));

// ➞ "Rammstein B"
const obj2 = { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }; 
let num2 = 50;
console.log(getVodkaBottle(obj2, num2));

// ➞ "Rammstein D"
const obj3 = { whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 };
let num3 = 70;
console.log(getVodkaBottle(obj3, num3));