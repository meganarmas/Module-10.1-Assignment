let number1;
let number2;

number1 = 16;
number2 = 2;

console.log("Sum:", number1 + number2);
console.log("Difference:", number1 - number2);
console.log("Product:", number1 * number2);
console.log("Quotient:", number1 / number2);


number1 += 2;
number2 *= 9;
console.log("Updated number1:", number1)
console.log("Updated number2:", number2)

console.log("Is number1 equal to number2?", number1 == number2);
console.log("Is number1 greater than number2?", number1 > number2);
console.log("Is number1 not equal to number2?", number1 !== number2);

let isPositive = number1 > 0 && number2 > 0;
let isEven = number1 % 2 === 0 || number2 % 2 === 0;
console.log("Are both the numbers positives?", isPositive)
console.log("Is at least one number even?", isEven);