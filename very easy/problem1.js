/** 
 * source: https://edabit.com/challenge/4gzDuDkompAqujpRi
 * Create a function that takes a number as an argument. Add up all the 
 * numbers from 1 to the number you passed to the function. For example, if the
 * input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10 */
function addUp(num) {
    //base case to end recursion
    if(num === 1) {
        return 1;
    } else {
        return addUp(num-1) + num;
    }
}

/** Test Cases **/
console.log(addUp(4)) // expected output 10
console.log(addUp(13)) // expected output 91
console.log(addUp(600)) // expected output 180300