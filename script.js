let calcDisplay = document.getElementById("calc-display");
let currentOperation = null;
let firstOperand = null;

function appendNumber(num) {
    calcDisplay.value += num;
}

function clearDisplay() {
    calcDisplay.value = "";
    currentOperation = null;
    firstOperand = null;
}

function performOperation(operation) {
    firstOperand = parseFloat(calcDisplay.value);
    currentOperation = operation;
    calcDisplay.value = "";
}

function calculateResult() {
    if (firstOperand !== null && currentOperation !== null) {
        const secondOperand = parseFloat(calcDisplay.value);
        switch (currentOperation) {
            case "+":
                calcDisplay.value = firstOperand + secondOperand;
                break;
            case "-":
                calcDisplay.value = firstOperand - secondOperand;
                break;
            case "*":
                calcDisplay.value = firstOperand * secondOperand;
                break;
            case "/":
                calcDisplay.value = secondOperand !== 0 ? firstOperand / secondOperand : "Error";
                break;
        }
        currentOperation = null;
        firstOperand = null;
    }
}
// Store users and simulate database
const users = [];

// Handle signup
function signup(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userExists = users.find(user => user.username === username || user.email === email);

    if (userExists) {
        alert("User already exists! Please log in.");
    } else {
        users.push({ fullName, email, username, password });
        alert("Sign up successful! Please log in.");
        window.location.href = "login.html";
    }
}

// Handle login
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Welcome back, ${user.fullName}!');
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password!");
    }
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('.signup-container form');
    const loginForm = document.querySelector('.login-container form');

    if (signupForm) signupForm.addEventListener('submit', signup);
    if (loginForm) loginForm.addEventListener('submit', login);
});






//signup update
// Handle Sign-Up Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const successMessage = document.getElementById('success-message');

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page reload

            // Get form values
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simple validation (can be expanded as needed)
            if (username && email && password) {
                // Simulate signup success
                console.log("User signed up:", { username, email, password });

                // Show success message
                successMessage.style.display = "block";

                // Reset form
                signupForm.reset();
            } else {
                alert("Please fill out all fields!");
            }
        });
    }
});