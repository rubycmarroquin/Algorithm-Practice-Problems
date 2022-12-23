/**
 * source: https://edabit.com/challenge/QaApgtePE6QrCZ64o
 * Create a function that takes an array containing only numbers and return the first element.
 */
function getFirstValue(arr) {
    return arr[0];
}

/** Test Cases */
const arr1 = [1,2,3];
// expected output: 1
console.log(getFirstValue(arr1));
const arr2 = ["one", 2, "three"];
// expected output: one
console.log(getFirstValue(arr2));