
  let form = document.getElementById("form");
  let resultado = document.getElementById("resultado");

  // Pega usuários já salvos ou cria lista vazia
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


function pegarHorarioAtual() {
    const agora = new Date();

    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();

    const hora = String(agora.getHours()).padStart(2, '0');
    const min = String(agora.getMinutes()).padStart(2, '0');
    const seg = String(agora.getSeconds()).padStart(2, '0');

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    
// Valida se o email termina com @gmail.com
const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
if (!email.endsWith("@gmail.com")) {
  resultado.innerText = "O e-mail deve ser um endereço @gmail.com válido!";
  return;
}

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
      usuarios.push({ 
    nome, 
    email, 
    senha,
    criadoEm: pegarHorarioAtual()
});
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      let horario = pegarHorarioAtual();

resultado.innerHTML = `
    Novo usuário cadastrado! ✅<br>
    <small>Cadastrado em: ${horario}</small>
`;
    }
    
    form.reset();
  });
  // 👉 PEGAR USUÁRIO LOGADO
let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

// 👉 LOGOUT
let btnLogout = document.getElementById("logout");

if (btnLogout) {
    btnLogout.addEventListener("click", () => {
        localStorage.removeItem("usuarioLogado");
        window.location.href = "senha.html";
    });
}

// 👉 EXCLUIR CONTA
let btnExcluir = document.getElementById("excluirConta");

if (btnExcluir) {
    btnExcluir.addEventListener("click", () => {

        if (!usuarioLogado) return;

        if (!confirm("Tem certeza que deseja excluir sua conta?")) return;

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        usuarios = usuarios.filter(u => u.email !== usuarioLogado.email);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        localStorage.removeItem("usuarioLogado");

        alert("Conta excluída com sucesso!");
        window.location.href = "cadastro.html";
    });
}
