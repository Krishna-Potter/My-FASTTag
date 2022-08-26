// signup validation
// store elements on variables
const form = document.getElementById("form");
const firstName = document.getElementById("fisrtName");
const lastName = document.getElementById("lastName");
const mail = document.getElementById("email");
const mobileNumber = document.getElementById("mobileNumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

//   event management
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
  window.location.href = "../pages/dashboard.html";
});

//   checking function
function checkInput() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const mailValue = mail.value.trim();
  const mobileNumberValue = mobileNumber.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // check input values
  // first name
  if (firstNameValue === "") {
    setError(firstName, "this field cannot be blank");
  } else {
    setSuccess(firstName, "valid first name");
  }

  // last name
  if (lastNameValue === "") {
    setError(lastName, "this field cannot be blank");
  } else {
    setSuccess(lastName, "valid last name");
  }

  // email
  if (mailValue === "") {
    setError(mail, "this field cannot be blank");
  } else if (!isEmail(mailValue)) {
    setError(mail, "enter valid email-id");
  } else {
    setSuccess(mail, "valid email-id");
  }

  // mobile number
  if (mobileNumberValue === "") {
    setError(mobileNumber, "this field cannot be blank");
  } else if (mobileNumber > 10) {
    setError(mobileNumber, "mobile number only 10 digits");
  } else {
    setSuccess(mobileNumber, "valid mobile number");
  }

  // password
  if (passwordValue === "") {
    setError(password, "this field cannot be blank");
  } else {
    setSuccess(password, "valid password");
  }

  // confirm password
  if (confirmPasswordValue === "") {
    setError(confirmPassword, "this field cannot be blank");
  } else if (passwordValue != confirmPasswordValue) {
    setError(confirmPassword, "enter correct password");
  } else {
    setSuccess(confirmPassword, "password are correct");
  }
}

//   check email function
function isEmail(mail) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(mail);
}

//   check error function
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-ctrl error";
  small.innerText = message;
}

//   check success function
function setSuccess(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-ctrl success";
  small.innerText = message;
}

