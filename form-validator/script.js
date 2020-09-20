const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submit");
  console.log(username.value);

  if (username.value === "") {
    // alert("please enter something");
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
});
