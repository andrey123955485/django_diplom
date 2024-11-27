document.addEventListener("DOMContentLoaded", function() {
            var loggedIn = {{ user.is_authenticated|jsonify }};
            var loginForm = document.getElementById("login-form");
            var userNameDisplay = document.getElementById("user-name");

            if (loggedIn) {
                // Скрыть форму и показать имя пользователя
                loginForm.style.display = "none";
                userNameDisplay.style.display = "block";
                userNameDisplay.textContent = "Добро пожаловать, {{ user.username }}";
            } else {
                // Показываем форму для авторизации
                loginForm.style.display = "block";
                userNameDisplay.style.display = "none";
            }
        });