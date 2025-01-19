// Form validation logic
document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector(".form-book");
form.addEventListener("submit", (event) => {
  let valid = true;

  const showError = (field, message) => {
    valid = false;
    alert(message);
    console.error(`Validation failed for ${field}: ${message}`); // Debugging
  };

  // Validate Name
  const nameField = document.getElementById("name");
  if (nameField.value.trim().length < 2) {
    showError("Name", "Name must be at least 2 characters long.");
  }

  // Validate Email
  const emailField = document.getElementById("email");
  const email = emailField.value.trim();
  if (
    !email.includes("@") ||
    email.indexOf(".") <= email.indexOf("@") + 1 ||
    email.indexOf(".") === email.length - 1
  ) {
    showError("Email", "Please enter a valid email address.");
  }

  // Validate Phone Number
  const phoneField = document.getElementById("phone");
  const phoneValue = phoneField.value.trim();
  const sanitizedPhone = phoneValue.replace(/[^0-9]/g, "");
  const phoneRegex = /^[0-9]{10,15}$/;
  console.log("Sanitized phone number:", sanitizedPhone); // Debugging
  if (!phoneRegex.test(sanitizedPhone)) {
    showError("Phone", "Phone number must be a valid number and consist of 10 to 15 digits.");
  }

  // Validate Destination
  const destinationField = document.getElementById("destination");
  if (!destinationField.value) {
    showError("Destination", "Please select a destination.");
  }

  // Validate Dates
  const startDateField = document.getElementById("start-date");
  const endDateField = document.getElementById("end-date");
  const startDate = new Date(startDateField.value);
  const endDate = new Date(endDateField.value);
  console.log("Start Date:", startDate, "End Date:", endDate); // Debugging
  if (isNaN(startDate) || isNaN(endDate)) {
    showError("Dates", "Please enter valid start and end dates.");
  } else if (startDate >= endDate) {
    showError("Dates", "End date must be after the start date.");
  }

  // Validate Guests
  const guestsField = document.getElementById("guests");
  const guests = parseInt(guestsField.value, 10);
  console.log("Number of guests:", guests); // Debugging
  if (isNaN(guests) || guests < 1 || guests > 20) {
    showError("Guests", "Number of guests must be between 1 and 20.");
  }

  if (!valid) {
    event.preventDefault(); // Stop form submission if validation fails
    console.error("Form validation failed."); // Debugging
  } else {
    console.log("Form validation passed."); // Debugging
  }
});
});
