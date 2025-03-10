document.addEventListener("DOMContentLoaded", () => {
    const signup = document.getElementById("signup");
    const login = document.getElementById("login");

    switchToSignUp = () => {

        login.style.transform = "rotate(-5deg)";
        login.style.animationName = "toRightSignup"
        login.style.animationDuration = "1s";
        setTimeout(() => {
            login.style.zIndex = "10"
            signup.style.zIndex = "20";
            login.style.animationName = "toPositionSignup"
            login.style.animationDuration = "1s";
        }, 900);
    };

    switchToLogin = () => {
        signup.style.animationName = "toRightLogin";
        signup.style.animationDuration = "1s";
        setTimeout(() => {
            signup.style.zIndex = "10";
            login.style.zIndex = "20";
            signup.style.animationName = "toPosition";
            signup.style.animationDuration = "1s";
        }, 900);
    };
});