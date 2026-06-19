document.addEventListener("DOMContentLoaded", function() {

const form = document.getElementById("form");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const usuario = {
    email: email,
    senha: senha
};

localStorage.setItem(email, JSON.stringify(usuario));

    // Verifica se já existe usuário
    const usuarioSalvo = localStorage.getItem(email);

    if (usuarioSalvo) {
        resultado.innerHTML = "❌ Usuário já cadastrado!";
        return;
    }

    // Salva no localStorage
    localStorage.setItem(email, senha);

    resultado.innerHTML = "✅ Cadastro realizado com sucesso!";
    form.reset();
});
});