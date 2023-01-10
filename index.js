const form = document.getElementById("survey-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");

// Form events
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
// Error message function
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = document.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
//Success message function
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = document.querySelector(".error");

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
//Email Input Validity function
const isValidEmail = email => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.text(String(email).toLowerCase());
}

// Inputs validation Function
const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();

    if (nameValue === '') {
        setError(name, 'Name is required');
    } else {
        setSuccess(name);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
    } else {
        setSuccess(email);
    }

    if (numberValue === '') {
        setError(number, 'Age is required');
    } else if (numberValue.length > 2) {
        setError(number, 'Age must be two digits')
    } else {
        setSuccess(number);
    }
}

// Radio-btns events
let radioBtns = document.querySelectorAll("input[name='radio-choice']");

let findSelected = () => {
    let selected = document.querySelector("input[name='radio-choice']:checked").value;
}

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", findSelected);
});
findSelected();