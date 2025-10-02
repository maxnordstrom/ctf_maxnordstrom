let username = false;
let password = false;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const inputUsername = document.getElementById('inputUsername').value.trim();
    const inputPassword = document.getElementById('inputPassword').value;

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
      getTheFlag();
    } else if (!username && password) {
      console.log("Error! Invalid username.")
    } else if (username && !password) {
      console.log("Error! Invalid password.")
    } else {
      console.log("Error! Invalid username and password.")
    };

  });
});