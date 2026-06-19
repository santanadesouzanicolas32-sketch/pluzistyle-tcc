document.addEventListener("DOMContentLoaded", () => {
console.log(document.getElementById("resultado"));
  const form = document.getElementById("form");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
let nome = document.getElementById("nome").value
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // pega usuários salvos no cadastro
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
   
    // procura usuário com email e senha iguais
    const usuarioEncontrado = usuarios.find(
      u => u.email.trim() === email && u.senha === senha
    );

    if (usuarioEncontrado) {
     resultado.innerText = "Acesso liberado!";
      resultado.style.color = "green";
    } else {
      resultado.innerText = "Usuário não encontrado. Crie um novo usuário.";
      resultado.style.color = "red";
    }
    form.reset();
  });
});




