let a = {
    name:'Suraj',
    age: 23,
    town: 'Welimada',
};
let b = {
    name:'Amal',
    age: 24,
    town: 'Welimada2',
};
let c = {
    name:'Kamal',
    age: 25,
    town: 'Welimada3',
};

console.table({a, b, c});
// arrays and objects can be inside an object
let objStudent = {
    name_of: 'suraj madhushan',
    age_of: 23,
    languages: ['c', 'js', 'html'],
    city: {
        address1: 'medawela',
        address2: 'udukinda',
    }
}