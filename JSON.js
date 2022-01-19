
let person = {
    firstName: "Jason",
    lastName: "Jasonsson",
    age: 30
};
let jsonObj = `{"firstName":"Jason","lastName":"Jasonsson","age":30}`;

console.log(JSON.parse(jsonObj));
console.log(JSON.stringify(person));

//

let arr = [1,2,3,4];
let jsonArr = `[1,2,3,4]`;
// console.log(JSON.parse(jsonArr));
// console.log(JSON.stringify(arr));
let parsedArr = JSON.parse(jsonArr);
for (const num of parsedArr) {
    console.log(num);
}