
/* function SumNums(num1, num2) {
    var sum = num1 + num2;
    console.log("sum is", sum);
    return sum;
}
var result = SumNums(2, 3) + SumNums(3, 5);
console.log("result is", result); */

function SumNums(num1, num2) {
    var sum = num1 + num2;
    console.log("sum is", sum);
    return sum;

}
var result = SumNums(2, 3) + SumNums(3, SumNums(2, 1)) + SumNums(SumNums(2, 1), SumNums(2, 3));
console.log("result is", result);