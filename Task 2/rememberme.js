        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const rememberMe = document.getElementById('rememberMe');
        const welcomeMsg = document.getElementById('welcomeMsg');
        const clearBtn = document.getElementById('clearBtn');

        window.onload = () => {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        if (savedEmail) {
            emailInput.value = savedEmail;
            if (savedPassword) passwordInput.value = savedPassword;
            rememberMe.checked = true;
            welcomeMsg.textContent = `Welcome back, ${savedEmail}!`;
        }
        };

        document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        if (rememberMe.checked) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password); 
            welcomeMsg.textContent = `Welcome back, ${email}!`;
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password'); 
            welcomeMsg.textContent = '';
        }

        alert('Login successful');
        });

        // Clear Remember Me 
        clearBtn.addEventListener('click', () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        emailInput.value = '';
        passwordInput.value = '';
        rememberMe.checked = false;
        welcomeMsg.textContent = '';
        alert('Remember Me data cleared!');
        });
