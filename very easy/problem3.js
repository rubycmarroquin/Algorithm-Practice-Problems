/**
 * source: https://edabit.com/challenge/6AnQqiEjkJdZrWhPS
 * Write a function that converts hours into seconds.
 */
function howManySeconds(hours) {
    return hours * 3600;
}

/** Test Cases */
// Expected output: 7200 
console.log(howManySeconds(2));
// Expected output: 36000
console.log(howManySeconds(10));
// Expected output: 86400
console.log(howManySeconds(24));