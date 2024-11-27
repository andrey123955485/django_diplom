// static/js/auth.js

document.addEventListener("DOMContentLoaded", function() {
    var loggedIn = JSON.parse(document.getElementById("user-logged-in").textContent);
    var loginForm = document.getElementById("login-form");
    var userNameDisplay = document.getElementById("user-name");

    if (loggedIn) {
        // Скрываем форму и показываем имя пользователя
        loginForm.style.display = "none";
        userNameDisplay.style.display = "block";
    } else {
        // Показываем форму для авторизации
        loginForm.style.display = "block";
        userNameDisplay.style.display = "none";
    }
});
