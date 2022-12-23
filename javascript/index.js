// scope - alcance
// global
// var foo = 1;

// shadowing
// function bar() {
//   baz = 2

// }

// {
//   let faz = 5;
// }

// if(true) {
//   var goo = 4;
//   let gaz = 5;
// }

// for(var i = 0; i < 10; i++) {
//   console.log('')
// }

// for(let i = 0; i < 9; i++) {
// }

// Hoisting
// console.log(
//   sum(1, 2)
// )

// function sum(a, b) {
//   return a + b;
// }

// var sum = (a, b) => a + b;

// console.log(foo);

// var foo = 1;
// foo = 2;

// primitivos
// numeros, strings, booleans, undefined, null.
// const num = 1; // literales
// const str = 'hola';
// const boo = true;

// // references Object Number String
// const arr = [0, 1, 2]
// const arr2 = arr;

// arr2.push(3);

// console.log(arr)

// const obj = {};
// const obj2 = obj;

// obj2.name = 'María';

// console.log(obj)

// function sum(a, b) {
//   return a + b;
// }

// const sum2 = sum;

// console.log(sum2(1, 2))

// // Métodos
// // Mutables - Imutables
// //

// // Array
const arr = [];

// obtener
arr[0]
arr.at(0)

const i = 10;
arr[i]

// Agregar
arr.push(1, 2, 3, 4); // mutable, retorna nueva longitud
arr.unshift(0);
arr.splice(1, 0, 10);
console.log(arr);

// Modificar
arr[0] = 7;

// remover
arr.pop(); // mutable, retorna nueva longitud
arr.shift();
arr.splice(1, 1);
console.log(arr)

// Objetos
const obj = {};

// obtener
obj.name;
obj['name'];
const prop = 'name';
obj[prop]

// Agregar
obj.name = 'María';
obj['name'] = 'Simón';
obj['last name'] = 'Hoyos';

// Modificar
obj.name = 'María';
obj['name'] = 'Simón';
obj['last name'] = 'Hoyos';

// remover
delete obj.name;
console.log(obj)

// Array
//
  let iarr = [];

// Agregar
iarr.concat([1, 2, 4]);
[1, 2, 4].concat(iarr);

[...iarr, ...[1, 2, 4]]
[...[1, 2, 4], ...iarr]

const copy1 = iarr.slice(0, 2);
const copy2 = iarr.slice(2);

copy1.concat(10).concat(copy2)

// remover
iarr.slice(0, -1);
iarr.slice(1)

const copy1 = iarr.slice(0, 2);
const copy2 = iarr.slice(3);

copy1.concat(copy2);

// Objetos
const iobj = {}

// copia
{ ...iobj };
Object.assign({}, iobj)


