/**
 * source: https://edabit.com/challenge/q4FkAnRFwDq5LXqkf
 * Write a function that returns an anonymous function, which adds n to its input
 */
function addsNum(num) {
    return function(n) {return n + num};
}
/** Test Cases */
const adds1 = addsNum(1)
console.log(adds1(3)); // 4
console.log(adds1(5.7)); // 6.7
const adds10 = addsNum(10)
console.log(adds10(44)); // 54
console.log(adds10(20)); // 30