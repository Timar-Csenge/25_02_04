//1
let szam = prompt("1\nadj meg egy számot: ");
if (szam > -30 && szam < 40) {
    console.log("a szam -30 és 40 között van");
}
else {
    console.log("a szám nincs -30 és 40 között");
}


//2
let number = prompt("2\nadj meg egy számot: ");
let number2 = prompt("adj meg egy másik számot: ");
if (number > number2) {
    console.log("az első szám nagyobb");
}
else if (number < number2)  {
    console.log("a második szám nagyobb");
}
else{console.log("egyenlő")};


//3
let x = prompt("3\nadj meg egy számot: ");
if (x > 0)
    {
        console.log("pozitív szám");
    }
else if(x < 0)
    {
        console.log("negativ szám");
    }
else{console.log("nulla")};


//4
let y = prompt("4\nadj meg egy számot: ");
if (y % 1 == 0)
    {
        console.log(y);
    }
else
    {""}


//5
let z = prompt("5\nadj meg egy számot: ");
let n = prompt("adj meg egy másik számot: ");
if (z > n)
    {
        console.log({z} + ">" + {n});
    }
else if(z < n)
    {
        console.log({z} + "<" + {n});
    }
else{console.log("egyenlő")};


//6
let a = prompt("6\nadj meg egy életkort: ");
if(a >= 0 && a <= 6)
    {
        console.log("gyerek")
    }
else if(a >= 7 && a <= 18)
    {
        console.log("iskolás")
    }
else if (a >= 19 && a <= 60)
    {
        console.log("dolgozó")
    }
else{console.log("nyugdíjas")};


//7
let fogad = prompt("7\nfej vagy írásra szavaz?");
let r = Math.ceil(Math.random()*2);
if (r == 1 && fogad.toLocaleLowerCase() == "fej")
    {
        console.log("fej, nyert");
    }
else if (r == 1 && fogad.toLocaleLowerCase() == "írás")
    {
        console.log("fej, vesztett")
    }
else if (r == 2 && fogad.toLocaleLowerCase() == "fej")
    {
        console.log("írás, vesztett");
    }
else if(r ==2 && fogad.toLocaleLowerCase() == "írás") 
    {
        console.log("írás, nyert");
    }
else
    {
        console.log("hiba");
    }


/*//8
let kocka = (Math.ceil(Math.random()*6));
let jatekos1 = prompt("8\nadj meg egy számot(1. játékos): ");
let jatekos2 = prompt("adj meg egy számot(2. játékos): ");

let ertek1 = kocka - parseInt(jatekos1);
let ertek2 = kocka - parseInt(jatekos2);

if()
    {

    }   

console.log(kocka);*/