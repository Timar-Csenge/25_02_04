let e = 2;
console.log('a=' + e + ' típusa: ' + typeof e);
const pi = 3.14;
console.log('pi=' + pi + ' típusa: ' + typeof pi);

console.log(0.1+0.2);
console.log((0.1+0.2).toFixed(2));

console.log(1/0);
console.log(-1/0);
console.log(0/0);

//string
let firstname = "Jane";
let lastname = "Doe";
console.log(firstname + ' ' + lastname);
//template literal / string `
console.log(`Hello, ${firstname} ${lastname}!`);

let person = {
    name: "Lakatos Rikárdó",
    age: 17,
    isStudent: false,
    address: "Orgovány"
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.address);
console.log(person.idk); //undefined

let y;
console.log(y); //undefined

//boolean
console.log(typeof true);
console.log(Boolean(0));
console.log(Boolean("a"));
console.log(Boolean(""));
console.log(Boolean(1));

"dog" + "house" == "doghouse"; // összekapcsolta a két karakterláncot
"dog" + 4 == "dog4"; // a számot átalakította
4 + "4" == "44"; // karakterlánccá
4 + 4 == 8; // összeadta a két számot
23 - "17" == 6; // a karakterláncot átalakította számmá
