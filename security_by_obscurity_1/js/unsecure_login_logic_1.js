let username = false;
let password = false;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const inputUsername = document.getElementById('inputUsername').value.trim();
    const inputPassword = document.getElementById('inputPassword').value;

    if (inputUsername.length == 5 && inputUsername.charAt(3) == "y") {
      username = true;
    };

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
    
    //toggling classes to show alert
    if (username && password) {
        $('#loginMessage').removeClass().addClass("alert alert-success");
      } else {
        $('#loginMessage').removeClass().addClass("alert alert-danger");
      };
  });
});