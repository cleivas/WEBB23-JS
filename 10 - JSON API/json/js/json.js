const json = '{"name":"John", "age":30, "car":null}';

console.log(typeof json);
// console.log(json.name);


const obj = JSON.parse(json);
console.log(typeof obj);
console.log(obj.name);

