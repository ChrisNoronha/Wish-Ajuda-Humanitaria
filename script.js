
    function validateForm() {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
            return false;
        }
        return true;
    }
