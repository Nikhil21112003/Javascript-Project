let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

// Initialize an empty string to hold the input expression
let expression = "";

// Attach event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML; // Get the button's inner HTML
    if (value === "=") {
      try {
        // Evaluate the expression and handle any errors
        expression = eval(expression);
      } catch {
        expression = "Error"; // Show error if evaluation fails
      }
      input.value = expression;
    } else if (value === "AC") {
      expression = ""; // Clear the expression
      input.value = expression;
    } else if (value === "DEL") {
      expression = expression.slice(0, -1); // Remove the last character
      input.value = expression;
    } else {
      expression += value; // Append the clicked button's value
      input.value = expression;
    }
  });
});
