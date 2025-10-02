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
      document.getElementById("loginMessage").innerHTML = "You have successfully logged in! Here's your flag: <strong>" + getTheFlag(); "</strong>"
    } else if (!username && password) {
      document.getElementById("loginMessage").innerHTML = "Error! Invalid username."
    } else if (username && !password) {
      document.getElementById("loginMessage").innerHTML = "Error! Invalid password."
    } else {
      document.getElementById("loginMessage").innerHTML = "Error! Invalid username and password."
    };
  });
});