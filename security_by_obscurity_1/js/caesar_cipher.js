function getTheFlag() {

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let notTheFlag = "pdabrx3wrwdoob3jrw3lw";
  let theFlag ="";

  for (let i = 0; i < notTheFlag.length; i++) {
    let y = notTheFlag.charAt(i);
    let x = alphabet.indexOf(y);
    
    if (x <= 2) {
      x = x + 26;
    };

    if (y == "3") {
      theFlag += "_";
    } else {
      x = x-3;
      theFlag += alphabet.charAt(x);
    };
  };
  
  let theFinalFlag = theFlag.slice(0, 3) + "{" + theFlag.slice(3).toUpperCase() + "}";

  return(theFinalFlag);
};