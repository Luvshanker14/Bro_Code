const wrapper = document.querySelector('.wrapper');
const wrap = document.getElementById("welcome");
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const btnpopup2 = document.getElementById('butUser');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}
loginLink.onclick = () => {
    wrapper.classList.remove('active');
}
btnpopup.onclick = () => {
    wrapper.classList.add('active-popup');
    wrap.classList.add("none");
}
btnpopup2.onclick = () => {
    wrapper.classList.add('active-popup');
    wrap.classList.add("none");
}
iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    wrap.classList.remove("none");
}

// Function to clear form data
function clearForm(form) {
    form.reset();
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log('Login form submitted:', { email, password });

    try {
        const response = await fetch('http://127.0.0.1:4000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        console.log('Login response:', data);
        if (response.ok) {
            alert('Login successful');
            // Close the login form and navigate to the home page
            wrapper.classList.remove('active-popup');
            wrapper.classList.remove('active');
            wrap.classList.remove("none");
            clearForm(loginForm);
            window.location.href = "index.html";  // Adjust the URL as needed
        } else {
            alert(data.msg || 'Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    console.log('Register form submitted:', { name, email, password });

    try {
        const response = await fetch('http://127.0.0.1:4000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json();
        console.log('Register response:', data);
        if (response.ok) {
            alert('Registration successful');
            // Close the register form and navigate to the home page
            wrapper.classList.remove('active-popup');
            wrapper.classList.remove('active');
            wrap.classList.remove("none");
            clearForm(registerForm);
            window.location.href = "index.html";  // Adjust the URL as needed
        } else {
            alert(data.error || 'Registration failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});
