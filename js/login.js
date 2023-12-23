document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.ariaValueMax;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'shawon@gmail.com' && userPassword == 'secret'){
        window.location.href = 'bank.html';

    }
    else{
        alert('Error Password');
    }
    
})
