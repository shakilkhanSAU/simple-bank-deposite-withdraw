document.getElementById('submit-button').addEventListener('click', function () {
    // email catching 
    const emailField = document.getElementById('email-holder');
    const emailText = emailField.value;
    // password catching 
    const passwordField = document.getElementById('password-holder');
    const passwordText = passwordField.value;
    // login allowing funtion 
    if (emailText == 'me@askummah.com' && passwordText == 'password') {
        window.location.href = './banking.html'
    }

})