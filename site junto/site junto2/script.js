document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
const navList = document.getElementById("navList");

menuToggle.addEventListener("click", () => {
  if (navList.classList.contains("active")) {
    // FECHAR

    navList.classList.add("closing");

    // ⛔ NÃO remove active ainda!

    setTimeout(() => {
      navList.classList.remove("active");
      navList.classList.remove("closing");
    }, 900); // 0.5s + delays

  } else {
    // ABRIR

    navList.classList.remove("closing");

    // força reinício da animação
    void navList.offsetWidth;

    navList.classList.add("active");
  }

  menuToggle.classList.toggle("active");
  const textoLogin = document.getElementById("textoLogin");

  let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (usuarioLogado) {
    // usuário logado → mostra botão sair
    textoLogin.innerHTML = `<a href="#" id="logoutBtn">Sair da conta</a> / <a href="#" id="conta"> Minha conta </a>`;
   
    document.getElementById("conta").addEventListener("click", (e) => {
      e.preventDefault();
      // redireciona para login
      window.location.href = "senha.html";
    });
    // adiciona evento de logout
    document.getElementById("logoutBtn").addEventListener("click", (e) => {
      e.preventDefault();

      localStorage.removeItem("usuarioLogado");

      // redireciona para login
      window.location.href = "senha.html";
    });

  } else {
    // usuário NÃO logado → mantém padrão
    textoLogin.innerHTML = `
      <a href="cadastro.html">Criar conta</a> /
      <a href="senha.html">Iniciar sessão</a>
    `;
  }
});
})
  

// daqui pra baixo é o codigo da barra de pesquisa

let Roupas = 
[ 
    {
       imagem: "/img/imgvestidorecortado.jfif",
     titulo: "VESTIDO ROSA",
     categoria:"vestido",
     tamanho: "tam:46-60",
     valor: "R$108,00",
     valor2:"R$100,00 no pix",
     descricao3: "Ou 3x de 36,00",
     button: "Adicionar ao carrinho"
    },
    { 
        imagem: "/img/imagemnaosei.jfif",
      titulo: "CONJUNTO ",
      categoria:"conjunto",
        tamanho: "tam:46-60",
        valor:"R$120,00",
        valor2: " ",
        descricao3: " ",
        button: "Adicionar ao carrinho"
    },
    {
       imagem: "/img/imgcalcarecortada.jfif",
     titulo: "CALÇA ALFAITERIA",
     categoria:"calca",
     tamanho: "tam:46-60",
     valor: "R$120,00",
     valor2:" ",
     descricao3: " ",
     button: "Adicionar ao carrinho"
    },
    {
       imagem: "/img/vestidovinho.jfif",
     titulo: "VESTIDO VINHO",
     categoria:"vestido",
     tamanho: "tam:46-60",
     valor: "R$120,00",
     valor2:" R$100,00 no pix ",
     descricao3: " Ou 3x de 36,00 ",
     button: "Adicionar ao carrinho"
    }
]
let cardeContainer = document.querySelector(".card-container");
let searchInput = document.querySelector("#searchInput")

let displayRoupas = Roupas =>{
    cardeContainer.innerHTML = "";
if(Roupas.length === 0){
    cardeContainer.innerHTML =` <p class="produton">Produto não encontrado</p>`
    return;
}
    Roupas.forEach(produto =>{
        cardeContainer.innerHTML += `
        <div class="card">
        <img class="imagem" src="${produto.imagem}" alt="${produto.titulo}">
        <p>${produto.titulo}</p>
        <p class="tamanho">${produto.tamanho}</p>
         <p class="valor1"> <b>${produto.valor}</b> </p>
        <p> <b> ${produto.valor2} </b></p>
        <p> ${produto.descricao3} </p>
      <button class="button" data-produto="${produto.titulo}">
  ${produto.button}
</button>
        </div>
       
        `
        
        
    })
}
 
searchInput.addEventListener("keyup", (produto) =>{
    let search = Roupas.filter(i => i.titulo.toLocaleLowerCase().includes(produto.target.value.toLocaleLowerCase()));
    displayRoupas(search)
})


window.addEventListener("load", displayRoupas.bind(null,Roupas))

let carrinho = [];

// 👉 pega usuário logado
let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

// 👉 chave única do carrinho por usuário
let chaveCarrinho = usuarioLogado ? "carrinho_" + usuarioLogado.email : null;

// 👉 carrega carrinho salvo (se estiver logado)
if (chaveCarrinho) {
    carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];
}

const iconeCarrinho = document.querySelector(".icon-cart");
const contadorIcone = document.querySelector(".icon-cart span");

const carrinhoBox = document.getElementById("carrinho");
const listaCarrinho = document.getElementById("listaCarrinho");
const totalCarrinho = document.getElementById("totalCarrinho");
const fecharCarrinho = document.getElementById("fecharCarrinho");

// 👉 ATUALIZA CONTADOR
function atualizarContador() {
    let totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    contadorIcone.innerText = totalItens;
}

// 👉 SALVAR CARRINHO (SÓ SE LOGADO)
function salvarCarrinho() {
    if (chaveCarrinho) {
        localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
    }
}

// 👉 ABRIR / FECHAR carrinho COM ANIMAÇÃO
iconeCarrinho.addEventListener("click", () => {
    carrinhoBox.classList.toggle("ativo");
    renderCarrinho();
});

// 👉 FECHAR carrinho
fecharCarrinho.addEventListener("click", () => {
    carrinhoBox.classList.remove("ativo");
});

// 👉 ADICIONAR PRODUTO
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("button")) {

        let nomeProduto = e.target.dataset.produto;
        let produto = Roupas.find(p => p.titulo === nomeProduto);
        let itemExistente = carrinho.find(p => p.titulo === nomeProduto);

        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({
                ...produto,
                quantidade: 1
            });
        }

        salvarCarrinho();
        atualizarContador();
    }
});

// 👉 RENDERIZAR CARRINHO
function renderCarrinho() {
    listaCarrinho.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {

        let valorNumero = Number(item.valor.replace(/[^0-9,]/g, "").replace(",", "."));

        total += valorNumero * item.quantidade;

        listaCarrinho.innerHTML += `
        <div class="item-carrinho">
            <img src="${item.imagem}">
            <p><b>${item.titulo}</b></p>
            <p>${item.valor}</p>

            <div class="contador">
                <button class="diminuir" onclick="diminuir(${index})">-</button>
                <span>${item.quantidade}</span>
                <button class="aumentar" onclick="aumentar(${index})">+</button>
            </div>

            <button class="remover" onclick="removerItem(${index})">Remover item</button>
        </div>
        `;
    });

    totalCarrinho.innerText = "Total: R$ " + total.toFixed(2);

    atualizarContador();
    salvarCarrinho();
}

// 👉 BOTÃO +
function aumentar(index) {
    carrinho[index].quantidade++;
    renderCarrinho();
}

// 👉 BOTÃO -
function diminuir(index) {
    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade--;
    }
    renderCarrinho();
}

// 👉 REMOVER ITEM COMPLETO
function removerItem(index) {
    carrinho.splice(index, 1);
    renderCarrinho();
}

// 👉 INICIALIZA
window.addEventListener("load", () => {
    atualizarContador();
});

  const iconeFiltro = document.getElementById("iconeFiltro");
  const filtroBox = document.getElementById("filtroBox");
  const btnLimpar = document.getElementById("limparFiltros");
  const btnConcluir = document.getElementById("concluirFiltro");
  const filtroAtivoTexto = document.getElementById("filtroAtivo");

  // 🔹 ESTADO REAL (aplicado)
  let categoriaAtiva = "todos";
  let precoAtivo = null;

  // 🔹 ESTADO TEMPORÁRIO (seleção dentro do filtro)
  let categoriaTemp = "todos";
  let precoTemp = null;

  // 🔹 ABRIR / FECHAR
  iconeFiltro.addEventListener("click", (e) => {
    e.stopPropagation();
    filtroBox.classList.toggle("filtro-hidden");

    // copia estado atual para edição
    categoriaTemp = categoriaAtiva;
    precoTemp = precoAtivo;

    atualizarVisualTemp();
  });

  // 🔹 FECHAR AO CLICAR FORA
  document.addEventListener("click", (e) => {
    if (!filtroBox.contains(e.target) && !iconeFiltro.contains(e.target)) {
      filtroBox.classList.add("filtro-hidden");
    }
  });

  function pegarPreco(valor) {
    return Number(valor.replace("R$", "").replace(",", "."));
  }

  // 🔥 APLICAR FILTROS (USA ESTADO REAL)
  function aplicarFiltros() {
    let resultado = Roupas;

    if (categoriaAtiva !== "todos") {
      resultado = resultado.filter(p => p.categoria === categoriaAtiva);
    }

    if (precoAtivo) {
      resultado = resultado.filter(p => {
        const preco = pegarPreco(p.valor);
        return preco >= precoAtivo.min && preco <= precoAtivo.max;
      });
    }

    displayRoupas(resultado);
    atualizarTextoFiltro();
  }

  // 🔹 TEXTO + BOTÃO X
  function atualizarTextoFiltro() {
    let html = "";

    if (categoriaAtiva !== "todos") {
      html += `Categoria: ${categoriaAtiva} <span class="remover" data-tipo="cat">✖</span> `;
    }

    if (precoAtivo) {
      html += `Preço: ${precoAtivo.min}-${precoAtivo.max} <span class="remover" data-tipo="preco">✖</span>`;
    }

    filtroAtivoTexto.innerHTML = html ? "Filtro ativo: " + html : "";

    document.querySelectorAll(".remover").forEach(btn => {
      btn.addEventListener("click", () => {
        const tipo = btn.dataset.tipo;

        if (tipo === "cat") categoriaAtiva = "todos";
        if (tipo === "preco") precoAtivo = null;

        aplicarFiltros();
      });
    });
  }

  // 🔹 VISUAL (TEMPORÁRIO)
  function atualizarVisualTemp() {
    document.querySelectorAll(".filtro-cat").forEach(item => {
      item.classList.toggle("ativo", item.dataset.cat === categoriaTemp);
    });

    document.querySelectorAll(".filtro-preco").forEach(item => {
      if (!precoTemp) {
        item.classList.remove("ativo");
      } else {
        item.classList.toggle(
          "ativo",
          item.dataset.preco === `${precoTemp.min}-${precoTemp.max}`
        );
      }
    });
  }

  // 🔹 SELEÇÃO DE CATEGORIA (NÃO APLICA AINDA)
  document.querySelectorAll(".filtro-cat").forEach(item => {
    item.addEventListener("click", () => {
      categoriaTemp = item.dataset.cat;
      atualizarVisualTemp();
    });
  });

  // 🔹 SELEÇÃO DE PREÇO (NÃO APLICA AINDA)
  document.querySelectorAll(".filtro-preco").forEach(item => {
    item.addEventListener("click", () => {
      const faixa = item.dataset.preco.split("-");

      precoTemp = {
        min: Number(faixa[0]),
        max: Number(faixa[1])
      };

      atualizarVisualTemp();
    });
  });

  // 🔥 BOTÃO CONCLUIR (APLICA DE VERDADE)
  btnConcluir.addEventListener("click", () => {
    categoriaAtiva = categoriaTemp;
    precoAtivo = precoTemp;

    aplicarFiltros();
    filtroBox.classList.add("filtro-hidden");
  });

  // 🔹 LIMPAR
  btnLimpar.addEventListener("click", () => {
    categoriaAtiva = "todos";
    precoAtivo = null;

    categoriaTemp = "todos";
    precoTemp = null;

    aplicarFiltros();
    atualizarVisualTemp();
  });


const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
menu.classList.toggle("active");
})
const btnComprar = document.getElementById("comprar");

btnComprar.addEventListener("click", () => {

  // 🛑 carrinho vazio
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  // 💰 calcula total
  let total = carrinho.reduce((acc, item) => {
    let valor = Number(item.valor.replace(/[^0-9,]/g, "").replace(",", "."));
    return acc + (valor * item.quantidade);
  }, 0);

  // 🎉 simulação de compra
  alert(`Compra realizada com sucesso!\nTotal: R$ ${total.toFixed(2)}`);

  // 🧹 limpa carrinho
  carrinho = [];

  salvarCarrinho();
  renderCarrinho();
  atualizarContador();

  // fecha carrinho
  carrinhoBox.classList.remove("ativo");
});

