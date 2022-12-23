/**
 * source: https://edabit.com/challenge/GLbuMfTtDWwDv2F73
 * Create a function which returns the number of true values there are in an array.
 * Return 0 if given an empty array.
 * All array items are of the type bool (true or false).
 */
function countTrue(arr) {
    let count = 0;
    arr.forEach(element => {
        if(element === true) count++;
    }); 
    return count;
}

/** Test Cases */
console.log(countTrue([true, false, false, true, false])); // 2
console.log(countTrue([false, false, false, false])); // 0
console.log(countTrue([])); // 0