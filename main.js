console.log("This is console");

//to get a user input
let name1 = prompt("Enter the name","saman");
let a2 = "I am " + name1 +".";
alert(a2);

let yname = confirm("Are you " + name1 + "?"); //confirmation box
console.log(yname);       //return true or false

console.error("This is an error");
console.warn("This is a warnning");

//data types
let g = {
    value: 10.5,
    datatype: typeof(10.5),
}
let d = {
    value: 'kamal',
    datatype: typeof('kamal'),
}
let e = {
    value: 345n,
    datatype: typeof(345n),
}
let f = {
    value: true,
    datatype: typeof(true),
}

console.table({g,d,e,f});

g.value = parseInt(g.value);
console.log(g.value);

//strings on a backtick

let myName = `Suraj Madhushan`;
let myAge = 23;
console.log(`My name is ${myName} and my age is ${myAge}.`);

console.log(myName.substring(2, 9));
console.log(myName.split('a'));
console.log(myName.lastIndexOf('a'));
console.log(myName.endsWith('Madhshan'));
console.log(myName.replace('Suraj', 'Suuraj'));
