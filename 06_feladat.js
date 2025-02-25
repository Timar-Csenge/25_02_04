console.log(Math.floor(Math.random()*6)+1);
console.log(Math.floor(Math.random()*6+1));

console.log(Math.ceil(Math.random()*6));

let a = Math.ceil(Math.random()*6)
console.log(a);
//ugyan az


function dobas_mutat()
{
    let dobas = Math.ceil(Math.random()*6)
    document.getElementById("dobas").innerHTML = dobas;
}