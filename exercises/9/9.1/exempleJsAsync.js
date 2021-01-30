//const assert = require('assert');

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers = [];

setTimeout(() => pushNumber(numbers, 3), 1500);
pushNumber(numbers, 1);
pushNumber(numbers, 2);

setTimeout(() =>{ for (var i = 4; i => numbers.length; i++) {
    pushNumber(numbers,i);
    if (numbers.length === 10){
        break
    }
 }}, 1600)
setTimeout(() => assert.deepStrictEqual(numbers, [2, 1, 3]), 3000);