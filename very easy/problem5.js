function bitwiseAND(num1, num2) {
    return (num1 & num2).toString(2);
}
function bitwiseOR(num1, num2) {
    return (num1 | num2).toString(2);
}

function bitwiseXOR(num1, num2) {
    return (num1 ^ num2).toString(2);
}

/** Test Cases */
console.log(bitwiseAND(6, 23)); // 00000110
console.log(bitwiseOR(6, 23)); // 00010111
console.log(bitwiseXOR(6, 23)); // 00010001