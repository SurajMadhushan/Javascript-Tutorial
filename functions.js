function printName() {
    console.log("This is a function");
}

function withPara(name, age){ 
    alert("Function is called");
    console.log(`Name is ${name} and age is ${age}`);
    let age2 = age + 1;
    return age2;
}

withPara('SurajM', 23);

//METHOD 2

let func_2 = function(){
    console.log('method 2');
}

//ARROW FUNCTION

let func_3 = ()=>{
    console.log('arrow function');
}

//TURNARY OPERATOR
let number = 7;

(number > 8)? console.log('okay') : console.log('wrong');

let mark = 80;
let result;

(mark > 75)? result = 'A' : (mark > 65)? result = 'B' : (mark > 35)? result = 'S' : result = 'F';
console.log(`your grade is '${result}'`);

//RUN A CODE WITH DELAY

setTimeout(()=>{
    console.log('delayed code');
}, 5000);              //5000ms have been delayed

//RUN CODE WITH INTERVAL
setInterval(()=>{
    console.log('code with interval');
}, 2000);            //2000ms



