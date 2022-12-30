/**
 * source: https://edabit.com/challenge/iKRmj2Q6GQHkAXXxf
 * Create a function that takes a string as an argument. 
 * The function must return a string containing 1s and 0s based on the string argument's words. 
 * If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. 
 * The returned string's length should be a multiple of 8, 
 * if the string is not a multiple of 8 you should remove the numbers in excess.
 * You must return the result as a string.
 */
function textToNumberBinary(string) {
    // split the string into words
    const arrOfString = string.split(" ");
    let convertedString = "";
    arrOfString.forEach(element => {
        convertedString += (element.toLowerCase() === "zero" ? "0" :
                           (element.toLowerCase() === "one" ? "1" : ""));
    });

    return (convertedString.length % 8 === 0 ? convertedString : 
        convertedString.substring(0, convertedString.length - (convertedString.length%8)));
}

/** Test Cases */
console.log(textToNumberBinary("zero one zero one zero one zero one")); // "01010101"
console.log(textToNumberBinary("Zero one zero ONE zero one zero one")); // "01010101"
console.log(textToNumberBinary("zero one zero one zero one zero one one two")); // "01010101"
console.log(textToNumberBinary("zero one zero one zero one zero three")); // ""
console.log(textToNumberBinary("one one")); // ""
console.log(textToNumberBinary("one one one one one one one zero")); // "11111110"