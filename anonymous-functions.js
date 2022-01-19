
//1

let arr1 = [3,4,5,6];
function squareArr(arr){
    return arr.map(x => x * x);
}
console.log(squareArr(arr1));

//2

(function (x, y) {
    let sum = x + y;
    console.log(sum);
})(3, 8);

//3

let timesTwo = number => number * 2;
console.log(timesTwo(8));