let height = document.getElementById("height");
let weight = document.getElementById("weight");
let results = document.getElementById("results");
const form = document.getElementById("bmiForm"); // Get the form element

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior
  calculateBMI(); // Call the calculateBMI function
});

// Calculate BMI when needed (e.g., on button click)
function calculateBMI() {
  const h = parseFloat(height.value);
  const w = parseFloat(weight.value);
  if (h > 0 && w > 0) {
    const bmi = w / (h / 100) ** 2;
    results.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
  } else {
    results.innerHTML = "Please enter valid height and weight.";
  }
}
