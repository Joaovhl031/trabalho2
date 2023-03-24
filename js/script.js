function ValidarLogin() {
    const inputEmail = document.getElementById("email")
    const inputSenha = document.getElementById("senha")

    if (inputEmail.value !== "joao@gmail.com" && inputSenha.value !== "123j") {
        alert("Email ou Senha incorretos!");
    }
    else {
        button_login = window.open("~/../ptII .html");
    }
}