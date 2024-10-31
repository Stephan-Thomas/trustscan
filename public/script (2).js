const form = document.querySelector(".form"),
  name = document.querySelector("#name"),
  email = document.querySelector("#email"),
  submitBtn = document.querySelector(".submit-btn");

// for the admin and supplier page signup
const roleOption = document.querySelector(".role-option"),
  supplierBtn = document.querySelector(".supplier-btn"),
  adminBtn = document.querySelector(".admin-btn"),
  supplierSignUp = document.querySelector(".supplier-signup"),
  adminSignUp = document.querySelector(".admin-signup");

// supplierBtn.addEventListener("click", () => {
//   roleOption.classList.replace("flex", "hidden");
//   supplierSignUp.classList.replace("hidden", "flex");
// });
// adminBtn.addEventListener("click", () => {
//   roleOption.classList.replace("flex", "hidden");
//   adminSignUp.classList.replace("hidden", "flex");
// });
function validateForm() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessageDiv = document.getElementById("error-message");

  if (password !== confirmPassword) {
    errorMessageDiv.textContent = "Passwords do not match.";
    errorMessageDiv.classList.remove("hidden");
  } else {
    errorMessageDiv.classList.add("hidden");
    // Submit the form or process it further
    alert("Form submitted successfully!");
  }
}
// function validateForm() {
//   let x = document.forms["form"]["name"].value.trim();
//   if (x == "") {
//     alert("Name must be filled out");
//   }
//   return true; // allows form submission if validation passes
// }
// function validateForm() {
//   let name = document.forms["form"]["name"].value.trim();
//   let email = document.forms["form"]["email"].value.trim();

//   if (name === "") {
//     alert("Name must be filled out");
//     return false; // Prevent form submission
//   }

//   // Basic email validation using regular expression
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//     alert("Please enter a valid email address");
//     return false; // Prevent form submission
//   }

//   return true;
// }
