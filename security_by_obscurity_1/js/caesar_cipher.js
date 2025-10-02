
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let notTheFlag = "pdaiodj";
let theFlag ="";

for (let i = 0; i < notTheFlag.length; i++) {
  let y = notTheFlag.charAt(i); //här har vi den krypterade bokstaven
  let x = alphabet.indexOf(y); //här hittar vi positionen av den krypterade bokstaven
  
  if (x <= 2) { //om index är 0, 1 eller 2 adderas 26 för att komma till slutet av alfabetet
    x = x + 26;
  };
  
  x = x-3; //subtraherar 3 för att backa tillbaka i alfabetet
  theFlag += alphabet.charAt(x);
};

let theFinalFlag = theFlag.slice(0, 3) + "{" + theFlag.slice(3) + "}";

// console.log(theFinalFlag);