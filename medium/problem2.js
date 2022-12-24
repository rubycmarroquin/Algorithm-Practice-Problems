/**
 * source: https://edabit.com/challenge/b7iHQDw72zzkmgCun
 * A boomerang is a V-shaped sequence that is either upright or upside down. 
 * Specifically, a boomerang can be defined as: sub-array of length 3,
 * with the first and last digits being the same and the middle digit being different.
 */
function countBoomerangs(arr) {
    // the number of boomerangs in arr
    let count = 0;
    // holds the subarrays made from arr
    let subArrs = [];
    // grab sub arrays of length 3 from arr
    arr.forEach((element, index, arr) => subArrs.push(arr.slice(index, index+3)));
    subArrs.forEach((element) => {
        if(element.length === 3
            && element[1] != element[0]
            && element[0] === element[element.length-1]) {
            count++;
        }
    });
    return count;
}

/** Test Cases */
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1])); // 5
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])); // 2
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])); // 1
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])); // 0