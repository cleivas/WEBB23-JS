
let v1 = 10;
let v2 = v1;

console.log(v1, v2);

v2 = 33;
console.log(v1, v2);


const obj1 = {p: 10};
const obj2 = obj1;

console.log(obj1, obj2);

obj2.p = 43;
console.log(obj1, obj2);

const sourceObj = {p: 22};
const targetObj = {};

Object.assign(targetObj, sourceObj);

console.log(targetObj, sourceObj);
targetObj.p = 6000;

console.log(targetObj, sourceObj);


const arr1 = [1, 2, 3, 4];
const arr2 = arr1;
console.log(arr1, arr2);

arr2[0] = 1000;
console.log(arr1, arr2);


function logObj(obj){
    obj.p = 100;
    console.log(obj, obj1)
}

logObj(obj1);