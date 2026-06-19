let Roupas = 
[ 
    {
       imagem: "/img/imagemcamisa.jpg",
     titulo: "VESTIDO ROSA",
     tamanho: "tam:46-60",
     valor: "R$108,00",
     valor2:"R$100,00 no pix",
     descricao3: "Ou 3x de 36,00",
     button: "comprar"
    },
    { 
        imagem: "/img/imagem2.jpeg",
      titulo: "CONJUNTO ",
        tamanho: "tam:46-60",
        valor:"R$120,00 - 250,00",
        valor2: " ",
        descricao3: " ",
        button: "comprar"
    },
    {
       imagem: "/img/imagemcalça.jpeg",
     titulo: "CALÇA ALFAITERIA",
     tamanho: "tam:46-60",
     valor: "R$120,00-180,00",
     valor2:" ",
     descricao3: " ",
     button: "comprar"
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
  cardeContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("button")) {
        let produto = event.target.getAttribute("data-produto");
        cardeContainer.innerHTML = `<h1> VOCÊ NÃO TEM DINHEIRO POBRE </h1>`;
        return;
    }
});

searchInput.addEventListener("keyup", (produto) =>{
    let search = Roupas.filter(i => i.titulo.toLocaleLowerCase().includes(produto.target.value.toLocaleLowerCase()));
    displayRoupas(search)
})


window.addEventListener("load", displayRoupas.bind(null,Roupas))