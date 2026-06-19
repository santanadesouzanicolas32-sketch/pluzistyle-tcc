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
