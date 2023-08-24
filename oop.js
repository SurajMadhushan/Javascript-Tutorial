//  OOP

// creating a class

class Person{
    constructor(name, age, pnumber){
        this.name = name;
        this.age = age;
        this.pnumber = pnumber;

        this.city = 'Colombo';       
    }
    displayName(){
        console.log(`Your name is ${this.name}`);
    };
}

//creating objects for class

let person1 = new Person('Nimal', 23, 123456);
let person2 = new Person('Amal', 24, 97756);
let person3 = new Person('Kamal', 21, 458756);

let user = [person1, person2, person3]; 

console.log(person1.name);
console.log(person1.name);

class Admin extends Person{
    type = 'Admin';
    adminId;
    constructor(name, age, pnumber, adminId){
        super(name, age, pnumber);
        this.adminId = adminId;
    }
    deleteUser(user){
        user = user.filter((el) => el.pnumber != user.pnumber);
    }
}

 console.log(user);
 const admin1 = new Admin('Kumara', 36, 987533, '214121p');

 admin1.deleteUser(person1);

 console.log(user);