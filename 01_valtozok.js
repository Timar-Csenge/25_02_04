console.log("sdfgdsgdgs");

//változók deklarálása és használata
var a = 2;
console.log(a);

//változó értékének a módosítása

let b = 3;
b = 4;
console.log (b);
const c = 5;
console.log (c);
//c = 6; //hiba, constanst nem lehet átírni


//var változók újradefiniálása
var x = 5; 
console.log(x); 
var x = "alma"; 
console.log(x); 

let d = 3;
console.log(d);
//let d = 4; //Identifier 'd' has already been declared (at 01_valtozok.js:25:5)
//console.log(d);




//02_valtozo_tipusok
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

