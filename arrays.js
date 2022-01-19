
// let array = ["red", "green", "blue"];
// for (let index = 0; index < array.length; index++) {
//     const color = array[index];
//     console.log(color);
// }
// array.forEach(color => {
//     console.log(color);
// });

function rotateByStep(arr, step){
    for (let i = 0; i < step; i++){
        arr.unshift(arr.pop());
    }
    console.log(arr);
    return arr;
}

// rotateByStep([1,2,3,4,5], 3);

function sumArrPlus50(arr){
    let sumPlus50 = arr.reduce(function(previousValue, currentValue){
        return (previousValue + currentValue);
    }) + 50;
    console.log(sumPlus50);
    return sumPlus50;
}

// sumArrPlus50([1,2,3,4]);

function arrayToAndFrom(num){
    let array = Array.from({length: num}, (x, i) => i)
    let revArr = [...array].reverse();

    console.log([...array, num, ...revArr]);
    return [...array, num, ...revArr];
}

// arrayToAndFrom(5);

var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

function zooInvStringify(inputArr){
    let outputArr = [];
    for (const nameArr of inputArr) {
        outputArr.push(`${nameArr[0]} the ${nameArr[1][0]} is ${nameArr[1][1]} years old`);
    }

    console.log(outputArr);
    return(outputArr);
}

zooInvStringify(myZoo);