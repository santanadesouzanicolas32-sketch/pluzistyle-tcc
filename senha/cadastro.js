
  let form = document.getElementById("form");
  let resultado = document.getElementById("resultado");

  // Pega usuários já salvos ou cria lista vazia
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  form.addEventListener("submit", function (e) {
    e.preventDefault();
let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    

    // procura usuário existente
    let usuarioExiste = usuarios.find(u => u.email === email);

    if (usuarioExiste) {
      // se já existe, verifica senha (login)
      if (usuarioExiste.senha === senha) {
        resultado.innerText = "Esse usuário ja está cadastrado!";
      } else {
        resultado.innerText = "Senha incorreta!";
      }
    } else {
      // se não existe, cadastra novo usuário
      usuarios.push({ nome, email, senha });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      resultado.innerText = "Novo usuário cadastrado!";
    }

    form.reset();
  });
