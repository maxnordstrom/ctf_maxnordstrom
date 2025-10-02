let username = false;
let password = false;

let inputUsername = "admyn"
let inputPassword = "sunshine123";

//check username criteria
if (inputUsername.length == 5 && inputUsername.charAt(3) == "y") {
  username = true;
};

//check password criteria
if (inputPassword.slice(-3) == "123") {
  password = true;
};

//return success or error messages
if (username && password) {
  console.log("You have successfully logged in!");
} else if (!username && password) {
  console.log("Error! Invalid username.")
} else if (username && !password) {
  console.log("Error! Invalid password.")
} else {
  console.log("Error! Invalid username and password.")
};