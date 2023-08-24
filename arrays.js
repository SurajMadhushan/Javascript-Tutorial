let arr = ['suraj', 'madhushan', 12, true, [1,2,3]];
// any data type can be stored in an array

let no_of_elements = arr.length;
console.log(no_of_elements);
console.log(arr[1]);
console.log(arr[4][2]);
console.log(arr.indexOf(12));

console.log(arr.reverse());
let arr2 = "suraj madhushan basnayaka".split(' ');
console.log(arr2);

//filter method in array
let arr4 = [1,2,3,4,5,6,7,8,9];

let result = arr.filter((el) => el % 2 == 0);    //A filtered array is formed when filtering the initial array
console.log(result);                             // result is an arry.
