/**
 * source: https://edabit.com/challenge/3ZtykTsx3GSoPHyBb
 * 
 * There are three towers. 
 * The objective of the game is to move all the disks over to tower #3, 
 * but you can't place a larger disk onto a smaller disk.
 * To play the game or learn more about the Tower of Hanoi, check the Resources tab.
 * 
 * Create a function that takes a number discs as an argument and 
 * returns the minimum amount of steps needed to complete the game.
 * 
 * The amount of discs is always a positive integer.
 * 1 disc can be changed per move.
 */
function towerHanoi(discs) {
  // if discs === 0 return zero, else call function recursively with 
  // discs-1 and do * 2 + 1 
  return (discs === 0 ? 0 : (towerHanoi(discs-1) * 2 + 1));
}

/** Test Cases */
console.log(towerHanoi(3)); // ➞ 7
console.log(towerHanoi(4)); // -> 
console.log(towerHanoi(5)); // ➞ 31
console.log(towerHanoi(0)); // ➞ 0
