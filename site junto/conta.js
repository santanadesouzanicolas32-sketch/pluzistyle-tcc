const elementos = document.querySelectorAll(".animar-avaliacao");

function animarAoScroll() {
  const alturaTela = window.innerHeight;

  elementos.forEach((el) => {
    const posicao = el.getBoundingClientRect().top;

    if (posicao < alturaTela - 100) {
      el.classList.add("ativo");
    }
  });
}
window.addEventListener("scroll", animarAoScroll);
window.addEventListener("load", animarAoScroll);



let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {
    alert("Você precisa estar logado!");
    window.location.href = "senha.html";
}

// preencher dados
document.getElementById("nomeUser").innerText = usuarioLogado.nome;
document.getElementById("emailUser").innerText = usuarioLogado.email;
document.getElementById("criadoEm").innerText = usuarioLogado.criadoEm || "-";
document.getElementById("ultimoLogin").innerText = usuarioLogado.ultimoLogin || "-";
 document.addEventListener("DOMContentLoaded", () => {

    let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    let historico = document.getElementById("historicoCompras");

    if (!usuarioLogado.compras || usuarioLogado.compras.length === 0) {
    historico.innerHTML = "<p>Você ainda não fez nenhuma compra 🛒</p>";
    return;
}

    usuarioLogado.compras.forEach(compra => {

        let html = `
            <div class="bloco-compra">
                <p><b>🧾 Compra em:</b> ${compra.data}</p>
        `;

        compra.produtos.forEach(item => {
            html += `
                <div class="item-compra">
                    <img src="${item.imagem}" width="50">
                    <p>${item.titulo}</p>
                    <p>Qtd: ${item.quantidade}</p>
                    <p>${item.valor}</p>
                </div>
            `;
        });

        html += `
            <p><b>Total:</b> ${compra.total}</p>
            <hr>
        </div>
        `;

        historico.innerHTML += html;
    });

});
console.log(usuarioLogado.compras);