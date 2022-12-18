document.getElementById('login-btn').addEventListener('click', function () {
    const emailInputFild = document.getElementById('email-input-fild');
    const email = emailInputFild.value;
    
    const passwordInputFild = document.getElementById('password-input-fild');
    const password = passwordInputFild.value;
    if (email === 'baperbank@gmail.com' && password === '1234'){
        window.location.href = 'http://127.0.0.1:5500/bank.html';
    }
    emailInputFild.value = '';
    passwordInputFild.value = '';
})