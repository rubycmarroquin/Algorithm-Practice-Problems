/** 
 * source: https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH
 * Oddish vs. Evenish
 * Create a function that determines whether a number is Oddish or Evenish. 
 * A number is Oddish if the sum of all of its digits is odd, 
 * and a number is Evenish if the sum of all of its digits is even. 
 * If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
 */
function oddishOrEvenish(num) {
    // num as a string 
    num = num.toString();
    // holds the sum of all digits 
    let sum = 0;
    for(let i = 0; i < num.length; i++) {
        sum+=(Number(num[i]));
    }
    return (sum % 2 === 0 ? "Evenish" : "Oddish");
}

/** Test Cases */
console.log(oddishOrEvenish(43)); // ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

console.log(oddishOrEvenish(373)); // ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

console.log(oddishOrEvenish(4433)); // ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0