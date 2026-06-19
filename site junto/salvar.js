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
      titulo: "CONJUNTO",
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
let searchInput = document.querySelector("#searchInput");

// 🔥 NOVO (resultado + topo)
const resultadoBusca = document.getElementById("resultadoBusca");
const topoSite = document.getElementById("topoSite");

let displayRoupas = Roupas => {

    cardeContainer.innerHTML = "";

    if(Roupas.length === 0){
        cardeContainer.innerHTML = `<p class="produton">Produto não encontrado</p>`
        return;
    }

    Roupas.forEach(produto =>{
        cardeContainer.innerHTML += `
        <div class="card">
        <img class="imagem" src="${produto.imagem}" alt="${produto.titulo}">
        <p>${produto.titulo}</p>
        <p class="tamanho">${produto.tamanho}</p>
        <p class="valor1"><b>${produto.valor}</b></p>
        <p><b>${produto.valor2}</b></p>
        <p>${produto.descricao3}</p>

        <button class="button" data-produto="${produto.titulo}">
          ${produto.button}
        </button>

        </div>
        `
    })
}
// 🔥 BUSCA COMPLETA (COM TUDO)
searchInput.addEventListener("keyup", (e) => {

    let texto = e.target.value.trim();

    let search = Roupas.filter(i =>
        i.titulo.toLowerCase().includes(texto.toLowerCase())
    );

    displayRoupas(search);

    // 🔥 RESULTADOS + QUANTIDADE
    if (texto !== "") {

        let quantidade = search.length;

        resultadoBusca.innerHTML = `
          ${quantidade} resultado${quantidade !== 1 ? "s" : ""} encontrado${quantidade !== 1 ? "s" : ""} para:
          <span>"${texto}"</span>
        `;

        resultadoBusca.style.display = "block";

        // 🔥 esconder topo
        if (topoSite) topoSite.style.display = "none";

    } else {

        resultadoBusca.innerHTML = "";
        resultadoBusca.style.display = "none";

        // 🔥 voltar topo
        if (topoSite) topoSite.style.display = "block";
    }

});

// 🔹 carregar tudo no início
window.addEventListener("load", () => {
    displayRoupas(Roupas);
// 🔥 FILTRO PELO MENU
document.querySelectorAll(".menu-filtro").forEach(item => {

    item.addEventListener("click", (e) => {
        e.preventDefault();

        let categoria = item.dataset.cat;

        // filtra produtos
        let filtrado = Roupas.filter(p => p.categoria === categoria);

        displayRoupas(filtrado);

        // 🔥 MOSTRA TEXTO
        if (resultadoBusca) {
            resultadoBusca.innerHTML = `
              ${filtrado.length} resultado${filtrado.length !== 1 ? "s" : ""} encontrado${filtrado.length !== 1 ? "s" : ""} para:
              <span>"${categoria}"</span>
            `;
            resultadoBusca.style.display = "block";
        }

        // 🔥 ESCONDE TOPO
        if (topoSite) {
            topoSite.style.setProperty("display", "none", "important");
        }

        // 🔥 limpa input (opcional)
        searchInput.value = "";
    });

});
});


let carrinho = [];

// 👉 usuário
let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
let chaveCarrinho = usuarioLogado ? "carrinho_" + usuarioLogado.email : null;

if (chaveCarrinho) {
    carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];
}

// 👉 ELEMENTOS
const iconeCarrinho = document.querySelector(".icon-cart");
const contadorIcone = document.querySelector(".icon-cart span");
const carrinhoBox = document.getElementById("carrinho");
const listaCarrinho = document.getElementById("listaCarrinho");
const totalCarrinho = document.getElementById("totalCarrinho");
const fecharCarrinho = document.getElementById("fecharCarrinho");

// 🔥 NOVOS
const toast = document.getElementById("toastCarrinho");
const som = document.getElementById("somCarrinho");

// 🔥 FRETE / PRAZO / CUPOM
const cepInput = document.getElementById("cepInput");
const freteValor = document.getElementById("freteValor");
const prazoEntrega = document.getElementById("prazoEntrega");

const btnCupom = document.getElementById("aplicarCupom");
const mensagemCupom = document.getElementById("mensagemCupom");
const descontoValor = document.getElementById("descontoValor");

const FRETE_GRATIS_MIN = 150;


const cupons = {
    "PLUZISTYLE10": { tipo: "percentual", valor: 10 },
    "PROMO20": { tipo: "fixo", valor: 20 },
    "FRETEGRATIS": { tipo: "frete" }
};

let cupomAplicado = null;

// 👉 CONTADOR
function atualizarContador() {
    let totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    contadorIcone.innerText = totalItens;
}

// 👉 SALVAR
function salvarCarrinho() {
    if (chaveCarrinho) {
        localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
    }
}



// 👉 FRETE
function calcularFrete(cep, total) {
    cep = cep.replace(/\D/g, '');

    // 🚫 NÃO calcula frete sem CEP completo
    if (cep.length !== 8) return null;

    if (total >= 299.90) {
        return 0; // grátis
    } else {
        return 20; // fixo
    }
}


// 👉 PRAZO
function calcularPrazo(cep, total) {
    cep = cep.replace(/\D/g, '');
    if (cep.length !== 8) return "";

    let prefixo = parseInt(cep.substring(0, 2));

    let prazo = "";

    if (prefixo <= 19) prazo = "3 a 5 dias úteis";
    else if (prefixo <= 39) prazo = "4 a 7 dias úteis";
    else prazo = "5 a 10 dias úteis";

    if (total >= FRETE_GRATIS_MIN) prazo += " 🚀";

    return prazo;
}

// 👉 DESCONTO
function calcularDesconto(total, frete) {

    if (!cupomAplicado) return 0;

    if (cupomAplicado.tipo === "percentual") {
        return total * (cupomAplicado.valor / 100);
    }

    if (cupomAplicado.tipo === "fixo") {
        return cupomAplicado.valor;
    }

    if (cupomAplicado.tipo === "frete") {
        return frete;
    }

    return 0;
}

// 👉 CUPOM
if (btnCupom) {
    btnCupom.addEventListener("click", () => {

        const codigo = document.getElementById("cupomInput").value.toUpperCase();

        if (!cupons[codigo]) {
            mensagemCupom.innerText = "Cupom inválido ❌";
            cupomAplicado = null;
            renderCarrinho();
            return;
        }

        cupomAplicado = cupons[codigo];
        mensagemCupom.innerText = "Cupom aplicado! 🎉";

        renderCarrinho();
    });
}

// 👉 CEP
if (cepInput) {
    cepInput.addEventListener("input", () => {
        renderCarrinho();
    });
}

// 👉 ABRIR
iconeCarrinho.addEventListener("click", () => {
    carrinhoBox.classList.toggle("ativo");
    renderCarrinho();
});

// 👉 FECHAR
fecharCarrinho.addEventListener("click", () => {
    carrinhoBox.classList.remove("ativo");
});

// 🔥 PRODUTO VOANDO
function animarProduto(imgElemento) {

    const carrinhoIcon = document.querySelector(".icon-cart");
    const imgClone = imgElemento.cloneNode(true);

    const rect = imgElemento.getBoundingClientRect();
    const carrinhoRect = carrinhoIcon.getBoundingClientRect();

    imgClone.style.position = "fixed";
    imgClone.style.top = rect.top + "px";
    imgClone.style.left = rect.left + "px";
    imgClone.style.width = rect.width + "px";
    imgClone.style.height = rect.height + "px";
    imgClone.style.zIndex = "9999";
    imgClone.style.transition = "all 0.7s cubic-bezier(0.65,-0.55,0.25,1.55)";
    imgClone.style.pointerEvents = "none";

    document.body.appendChild(imgClone);

    setTimeout(() => {
        imgClone.style.top = carrinhoRect.top + "px";
        imgClone.style.left = carrinhoRect.left + "px";
        imgClone.style.width = "30px";
        imgClone.style.height = "30px";
        imgClone.style.opacity = "0.5";
    }, 10);

    setTimeout(() => imgClone.remove(), 700);
}

// 👉 ADICIONAR PRODUTO
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("button")) {

        let nomeProduto = e.target.dataset.produto;
        let produto = Roupas.find(p => p.titulo === nomeProduto);
        let itemExistente = carrinho.find(p => p.titulo === nomeProduto);

        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({ ...produto, quantidade: 1 });
        }

        salvarCarrinho();
        atualizarContador();

        if (carrinhoBox.classList.contains("ativo")) {
            renderCarrinho();
        }

        const card = e.target.closest(".card");
        const img = card.querySelector(".imagem");
        if (img) animarProduto(img);

        e.target.classList.add("animar");
        setTimeout(() => e.target.classList.remove("animar"), 200);

        iconeCarrinho.classList.add("animar");
        setTimeout(() => iconeCarrinho.classList.remove("animar"), 300);

        if (som) {
            som.currentTime = 0;
            som.play();
        }

        if (toast) {
            toast.classList.add("show");
            setTimeout(() => toast.classList.remove("show"), 2000);
        }
    }
})

// 👉 RENDER COMPLETO
function renderCarrinho() {

    listaCarrinho.innerHTML = "";
    const resumoItens = document.getElementById("resumoItens");

if (resumoItens) {
    resumoItens.innerHTML = "";

    carrinho.forEach(item => {
        resumoItens.innerHTML += `
        <div class="item-resumo">
            <img src="${item.imagem}" class="img-resumo">
            
            <div class="info-resumo">
                <p><b>${item.titulo}</b></p>
                <p>Qtd: ${item.quantidade}</p>
                <p>${item.valor}</p>
            </div>
        </div>
        `;
    });
}
// 👉 TOTAL PRODUTOS
function calcularTotalProdutos() {
    return carrinho.reduce((total, item) => {
        let valor = Number(item.valor.replace(/[^0-9,]/g, "").replace(",", "."));
        return total + (valor * item.quantidade);
    }, 0);
}
    let totalProdutos = calcularTotalProdutos();
if (totalCarrinho) {
    totalCarrinho.innerHTML = "<b>Total: R$ " + totalProdutos.toFixed(2) + "</b>";
}
    let frete = calcularFrete(cepInput?.value || "", totalProdutos);
    let desconto = calcularDesconto(totalProdutos, frete);
    let totalFinal = totalProdutos + frete - desconto;

    carrinho.forEach((item, index) => {
        listaCarrinho.innerHTML += `
        <div class="item-carrinho">
            <img src="${item.imagem}">
            <p><b>${item.titulo}</b></p>
            <p>${item.valor}</p>

            <div class="contador">
                <button onclick="diminuir(${index})">-</button>
                <span>${item.quantidade}</span>
                <button onclick="aumentar(${index})">+</button>
            </div>

            <button class="remover"  onclick="removerItem(${index})">Remover</button>
        </div>
        `;
        
    });

console.log(totalProdutos)
    // 💰 FRETE
    if (freteValor) {
    // 🟢 FRETE GRÁTIS automático pelo valor
    if (totalProdutos >= 299.90) {
        freteValor.innerText = "Frete: GRÁTIS 🎉";
    } 
    
    // ⚠️ ainda não digitou CEP
    else if (frete === null) {
        freteValor.innerText = "Frete: digite o CEP";
    } 
    
    // 💰 frete normal
    else {
        freteValor.innerText = "Frete: R$ " + frete.toFixed(2);
    }
}

    // 🚚 PRAZO
    if (prazoEntrega) {
    let prazo = calcularPrazo(cepInput?.value || "", totalProdutos);
    prazoEntrega.innerText = prazo ? "Prazo: " + prazo : "Prazo: -";
}

    // 💸 DESCONTO
    if (descontoValor) {
        descontoValor.innerText =
            desconto > 0 ? "Desconto: -R$ " + desconto.toFixed(2) : "";
    }

    // 🧾 TOTAL
    const totalCheckout = document.getElementById("totalCheckout");

if (totalCheckout) {
    totalCheckout.innerHTML = "<b>Total: R$ " + totalFinal.toFixed(2) + "</b>";
}

    atualizarContador();
    salvarCarrinho();
}

// 👉 CONTROLES
function aumentar(index) {
    carrinho[index].quantidade++;
    renderCarrinho();
}

function diminuir(index) {
    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade--;
    }
    renderCarrinho();
}

function removerItem(index) {
    carrinho.splice(index, 1);
    renderCarrinho();
}

// 👉 INICIAR
window.addEventListener("load", () => {
    atualizarContador();
    renderCarrinho();
});window.addEventListener("load", () => {
    atualizarContador();
    renderCarrinho();

    // 🛒 BOTÃO COMPRAR
    const btnComprar = document.getElementById("comprar");
    const checkout = document.getElementById("checkout");
    const fecharCheckout = document.getElementById("fecharCheckout");

    if (btnComprar) {
        btnComprar.addEventListener("click", () => {

            if (carrinho.length === 0) {
                alert("Seu carrinho está vazio!");
                return;
            }

            carrinhoBox.classList.remove("ativo");
            checkout.classList.remove("checkout-hidden");
        });
    }

    if (fecharCheckout) {
        fecharCheckout.addEventListener("click", () => {
            checkout.classList.add("checkout-hidden");
        });
    }
    console.log(nomeProduto);
console.log(produto);
});
function removerItem(index) {
    carrinho.splice(index, 1);
    renderCarrinho();
}
