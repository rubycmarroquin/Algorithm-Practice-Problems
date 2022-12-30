/**
 * source: https://edabit.com/challenge/eCPim4XcssdZdvs32 
 * Numbers in Strings
 * Create a function that takes an array of strings and 
 * returns an array with only the strings that have numbers in them. 
 * If there are no strings containing numbers, return an empty array.
 * The strings can contain white spaces or any type of characters.
 * Bonus: Try solving this without RegEx.
 */
function numInStr(arr) {
    // new array that will hold strings with digits 
    let newArr = [];
    arr.forEach(item => {
        if(checkStringForNum(item)) newArr.push(item)
    });
    return newArr;
}

/**
 * Checks to see if the string that is being passed in has a digit
 * in the string. 
 * @param {string} str - passed in string that will be parsed through
 * @returns true or false dependingif string has a digit
 */
function checkStringForNum(str) {
    // remove all whitespaces from the string 
    str = str.replaceAll(" ", "");
    for(let i = 0; i < str.length; i++) {
        // if not NaN then it is a digit, else it is not
        if(!isNaN((str[i] * 1))) return true;
    }
    return false;
}

/** Test Cases */
console.log(numInStr(["1a", "a", "2b", "b"])); // ➞ ["1a", "2b"]
console.log(numInStr(["abc", "abc10"])); // ➞ ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ➞ ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"])); // ➞ ["test1"]