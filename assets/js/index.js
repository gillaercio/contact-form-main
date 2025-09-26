const form = document.querySelector("form-content");
const firstName = document.getElementById("form-first-name");
const lastName = document.getElementById("form-last-name");
const email = document.getElementById("form-email");
const generalEnquiry = document.getElementById("general-enquiry");
const supportRequest = document.getElementById("support-request");
const typeErrorMsg = document.querySelector('fieldset.form__type + .error-message');

function sendButton(event) {
  event.preventDefault()

  document.querySelectorAll(".error-message").forEach(msg => msg.textContent = "");
  document.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"));

  let hasError = false;

  const required = 'This field is required';
  const errorEmail = 'Please enter a valid email address';
  const errorQuery = 'Please select a query type';
  const errorCheckbox = 'To submit this form, please consent to being contacted';

  if (firstName.value.trim() === "") {
    document.getElementById("error-first-name").textContent = required;
    firstName.classList.add("input-error");
    hasError = true;
  }

  if (lastName.value.trim() === "") {
    document.getElementById("error-last-name").textContent = required;
    lastName.classList.add("input-error");
    hasError = true;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    document.getElementById("error-email").textContent = required;
    email.classList.add("input-error");
    hasError = true;
  } else if (!emailRegex.test(email.value.trim())) {
    document.getElementById("error-email").textContent = errorEmail;
    email.classList.add("input-error");
    hasError = true;
  }

  if(!generalEnquiry.checked && !supportRequest.checked) {
    document.getElementById("error-query").textContent = errorQuery;
    hasError = true;
  }

  const message = document.getElementById("form-message");
  if (message.value.trim() === "") {
    document.getElementById("error-message").textContent = required;
    message.classList.add("input-error");
    hasError = true;
  }

  const checkbox = document.getElementById("form-checkbox");
  if (!checkbox.checked) {
    document.getElementById("error-checkbox").textContent = errorCheckbox;
    checkbox.classList.add("input-error");
    hasError = true;
  }

  if (!hasError) {
    const successMsg = document.createElement("div");
    successMsg.classList.add("success-message");
    successMsg.innerHTML = `
      <strong>✔ Message Sent!</strong>
      <p>Thanks for completing the form. We'll be in touch soon!</p>
    `;

    document.getElementById("content").prepend(successMsg);
    document.querySelector("form").reset();
  }
}