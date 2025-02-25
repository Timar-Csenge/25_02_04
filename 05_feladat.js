
let nev = prompt('felhasználó neve: ');
console.log("Szia, " + nev);

let aOldal = prompt('egy téglalap A oldala hossza: ');
let bOldal = prompt('egy téglalap B oldala hossza: ');

console.log("a téglalap területe " + parseInt(aOldal) * parseInt(bOldal));
console.log("a téglalap kerülete " + 2*(parseInt(aOldal) + parseInt(bOldal)));

let korsugar = prompt('egy kör sugara hossza: ');

console.log((parseInt(korsugar) * parseInt(korsugar)) * Math.PI);	
console.log(2 * parseInt(korsugar) * Math.PI);

