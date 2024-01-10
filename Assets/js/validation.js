// lavet en fucntion og declaret alle inputs
function validateForm() {
    var name = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (name.length < 2) { // tjekker om navn er mere end 2 bogstaver
        alert('Navn skal indeholde mindst 2 bogstaver.');
    } else if (lastname.length < 2) { // tjekker om efternavn er mere end 2 bogstaver
        alert('Efternavn skal indeholde mindst 2 bogstaver.');
    } else if (!isValidEmail(email)) { // tjekker email format se email regex
        alert('Email er ikke i korrekt format.');
    } else if (password.length < 6) {  //tjekker at password er mere end 6 karaktere
        alert('Password skal indeholde mindst 6 karakterer.');
    } else if (password !== confirmPassword) { // tjekker at password og confirm password er ligner !==
        alert('Gentaget password matcher ikke.');
    } else {
        alert('Tilmelding succesfuld!');
    }
}
//tjekker email format
function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

//Get form element
var form = document.getElementById("MyForm");
function submitForm(event) {

    //Preventing page refresh
    event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);