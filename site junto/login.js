document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
if (!email.endsWith("@gmail.com")) {
  resultado.innerText = "O e-mail deve ser um endereço @gmail.com válido!";
  return;
}

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(
      u => u.email.trim() === email && u.senha === senha
    );
    function pegarHorarioAtual() {
    const agora = new Date();

    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();

    const hora = String(agora.getHours()).padStart(2, '0');
    const min = String(agora.getMinutes()).padStart(2, '0');

    return `${dia}/${mes}/${ano} ${hora}:${min}`;
}

   if (usuarioEncontrado) {

    let horario = pegarHorarioAtual();

    // 🔥 adiciona último login
    usuarioEncontrado.ultimoLogin = horario;

    // 🔥 pega lista completa
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // 🔥 encontra o índice do usuário
    let index = usuarios.findIndex(u => u.email === usuarioEncontrado.email);

    if (index !== -1) {
        usuarios[index] = usuarioEncontrado; // atualiza
    }

    // 🔥 salva lista atualizada
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // 🔥 garante nome de exibição em caso de registro sem nome
    if (!usuarioEncontrado.nome || !usuarioEncontrado.nome.trim()) {
      usuarioEncontrado.nome = usuarioEncontrado.email.split('@')[0];
    }

    // 🔥 salva usuário logado
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

    // 🔥 redireciona para a página inicial relativa ao diretório atual
    window.location.href = "index.html";
  } else {
      resultado.innerText = "Usuário não encontrado. Crie um novo usuário.";
      resultado.style.color = "red";
    }

    form.reset();
  });
});

function excluirContaLogada(e) {
  e.preventDefault();
  document.getElementById("modalConfirmacao").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modalConfirmacao").style.display = "none";
}

function confirmarExclusao() {
  const emailDigitado = document.getElementById("emailExcluir").value.trim();
  const senhaDigitada = document.getElementById("senhExcluir").value;
  const resultadoExcluir = document.getElementById("resultado-excluir");

 const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!gmailRegex.test(emailDigitado)) {
    resultadoExcluir.innerText = "O e-mail deve ser um endereço @gmail.com válido!";
    resultadoExcluir.style.color = "red";
    return;
  }


  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(u => u.email === emailDigitado);

  if (!usuario) {
    resultadoExcluir.innerText = "Usuário não encontrado.";
    resultadoExcluir.style.color = "red";
    return;
  }

  if (usuario.senha !== senhaDigitada) {
    resultadoExcluir.innerText = "Senha incorreta.";
    resultadoExcluir.style.color = "red";
    return;
  }

  usuarios = usuarios.filter(u => u.email !== emailDigitado);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  localStorage.removeItem("carrinho_" + emailDigitado);

  // ✅ ADICIONE ESSAS 3 LINHAS AQUI:
  localStorage.removeItem("pluzistyle_visitou_" + emailDigitado);
  localStorage.removeItem("pluzistyle_busca_"   + emailDigitado);
  localStorage.removeItem("pluzistyle_cor_"     + emailDigitado);

  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (usuarioLogado && usuarioLogado.email === emailDigitado) {
    localStorage.removeItem("usuarioLogado");
  }

  resultadoExcluir.innerText = "Conta excluída com sucesso!";
  resultadoExcluir.style.color = "green";

  document.getElementById("emailExcluir").value = "";
  document.getElementById("senhExcluir").value = "";

  setTimeout(() => {
    window.location.href = "senha.html";
  }, 1500);
}