(function() {
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  cursor.style.cssText = `
    width: 10px; height: 10px;
    background: #7b1034;
    border-radius: 50%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    z-index: 999999999;
    transition: transform 0.15s ease, background 0.2s ease;
    mix-blend-mode: multiply;
  `;
  const cursorRing = document.createElement('div');
  cursorRing.style.cssText = `
    width: 32px; height: 32px;
    border: 1.5px solid rgba(123,16,52,0.4);
    border-radius: 50%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    z-index: 999999998;
    transition: all 0.12s ease;
  `;
  document.body.appendChild(cursor);
  document.body.appendChild(cursorRing);

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
  });

  function animRing() {
    rx += (mx - rx - 16) * 0.18;
    ry += (my - ry - 16) * 0.18;
    cursorRing.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(animRing);
  }
  animRing();

  document.querySelectorAll('button, a, .card, .tamanho, .btn-calc').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform += ' scale(2.5)';
      cursor.style.background = '#c9a96e';
      cursorRing.style.borderColor = 'rgba(201,169,110,0.6)';
      cursorRing.style.transform += ' scale(0.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.background = '#7b1034';
      cursorRing.style.borderColor = 'rgba(123,16,52,0.4)';
    });
  });
})();

// idiomas
// =============================================
// TRADUÇÕES COMPLETAS — PluziStyle
// =============================================
const traducoes = {
  pt: {
    // NAVBAR
    "nav-inicio":          "Início",
    "nav-roupas":          "Roupas",
    "nav-avaliacoes":      "Avaliações",
    "nav-contato":         "Contato",
    "nav-calculadora":     "📏 Calculadora de Tamanho",
    "nav-camisa":          "Camisa",
    "nav-conjunto":        "Conjuntos",
    "nav-calca":           "Calças",
    "nav-vestido":         "Vestidos",
    "nav-macacao":         "Macacões",
    "nav-maisInformacoes": "Mais informações",

    // LOGIN / NAVEGAÇÃO
    "login-criar":         "Criar conta",
    "login-entrar":        "Iniciar sessão",
    "btn-navegacao":       "Navegação",

    // BUSCA / FILTRO
    "placeholder-busca":      "Pesquisar na PluziStyle",
    "filtro-limpar":           "Limpar filtros",
    "filtro-concluir":         "Concluir",
    "filtro-preco-titulo":     "Preço",
    "filtro-categoria-titulo": "Categoria",
    "filtro-cat-todos":        "Todos os produtos",

    // SPLASH
    "splash-subtitulo":        "✦   MODA PLUS SIZE   ✦",
    "splash-boas-vindas":      "Bem-vinda à\nPluziStyle",
    "splash-scroll":           "Role para continuar",
    "splash-form-subtitulo":   "✦   PERSONALIZAÇÃO   ✦",
    "splash-titulo":           "Coloque suas informações para que a gente encontre a melhor roupa para você",
    "splash-label-busca":      "O que você procura?",
    "splash-label-cor":        "Qual sua cor de preferência?",
    "splash-placeholder-busca":"Ex: camisa, calça, vestido...",
    "splash-placeholder-cor":  "Ex: preto, rosa, azul...",
    "splash-btn-entrar":       "Ver minhas sugestões ✨",
    "splash-btn-pular":        "Prefiro não dizer",

    // HOME
    "home-titulo1":      "VENHA CONHEÇER",
    "home-titulo2":      "A PLUZISTYLE",
    "home-desc1":        "A PluziStyle tem como objetivo entregar a melhor",
    "home-desc2":        "variedade de modelos de roupas Plus Size e variação de cores e conforto para",
    "home-desc3":        "que você consiga ter opções para todas as ocasiões com qualidade",
    "home-btn-catalogo": "Veja o catalogo de roupas completo",
    "home-conheca":      "Conheça alguns de nossos produtos❤︎",
    "saudacao":          "Olá!",

    // INFOS (parcelamento, frete, etc.)
    "info-parcelamento-titulo": "Parcelamento",
    "info-parcelamento-desc":   "Em até 3x sem juros",
    "info-frete-titulo":        "Frete grátis",
    "info-frete-desc1":         "Acima de 299,90",
    "info-frete-desc2":         "em todas as regiões",
    "info-brinde-titulo":       "Brinde",
    "info-brinde-desc1":        "com muito carinho",
    "info-brinde-desc2":        "para todos",
    "info-contato-titulo":      "Entre em contato",

    // MANIFESTO
    "manifesto-label":   "Nossa filosofia",
    "manifesto-titulo":  "Cada peça é um",
    "manifesto-titulo-em": "capítulo",
    "manifesto-titulo2": "da sua existência",
    "manifesto-body":    "Roupa não é apenas tecido. É memória, identidade, presença. Na PluziStyle, cada roupa é pensada para te dar conforto e alegria. Materiais nobres, silhuetas intemporais, alma contemporânea.",

    // STATS
    "stat-vendidas": "Unidades vendidas",
    "stat-pecas":    "Peças únicas",
    "stat-meses":    "meses",
    "stat-mercado":  "Nosso tempo no mercado",

    // CARDS / CARROSSEL
    "btn-ver-produto":     "Ver produto",
    "pessoas-vendo-1":     "pessoa vendo isso agora",
    "pessoas-vendo-n":     "pessoas vendo isso agora",
    "tamanho-esgotado":    "❌ Tamanho esgotado",
    "estoque-restam-apenas": "⚠️ Restam apenas {quantidade} unidades!",
    "estoque-disponivel":  "✅ {quantidade} unidades disponíveis",
    "produto-nao-encontrado": "Produto não encontrado",
    "ultimos-vistos":      "👀 Últimos vistos",
    "limpar-sel":          "🗑️ Limpar selecionados",
    "selecionar-todos":    "Selecionar todos",
    "sugestoes-titulo":    "✨ Sugestões para você",
    "sugestoes-titulo-busca-cor": "✨ {busca} na cor {cor} — nossas sugestões",
    "sugestoes-titulo-busca": "✨ Sugestões de {busca}",
    "sugestoes-titulo-cor": "✨ Peças na cor {cor} para você",
    "blog-modal-cta":      "Veja nossas roupas",
    "blog-modal-close-label": "Fechar",
    "saudacao-prefix":     "Olá",
    "excluir-rec":         "🗑️ Excluir recomendações",
    "fazer-rec":           "✨ Fazer a recomendação",
    "ultimos-vistos":      "👀 Últimos vistos",
    "limpar-sel":          "🗑️ Limpar selecionados",
    "selecionar-todos":    "Selecionar todos",

    // CATÁLOGO / DESTAQUES
    "catalogo-titulo":  "Catálogo de Roupas",
    "destaques-titulo": "Mais\nVendidos",
    "destaques-cta":    "Ver catálogo completo →",
    "lancamentos-titulo": "lançamentos",
    "btn-voltar":       "← Voltar",

    // CATEGORIAS (cards)
    "cat-camisas":    "Categoria: Camisas sociais/basicas.",
    "cat-calca-alf":  "Categoria: Calça alfaiteria.",
    "cat-conjuntos":  "Categoria: Conjuntos e peças de festa.",
    "cat-basicas":    "Categoria: Roupas basicas.",
    "preco-partir":   "R$ a partir de 120,00",

    // PRODUTOS (nomes)
    "prod-calca":         "Calça alfaiteria",
    "prod-festa-vinho":   "Peça de festa vinho",
    "prod-body-branco":   "Body branco",
    "prod-camisa-branca": "CAMISA BRANCA BASICA",
    "prod-camisa-preta":  "CAMISA BASICA PRETA",
    "prod-camisa-vinho":  "CAMISA BASICA VINHO",

    // MODAL PRODUTO
    "modal-tamanho":  "Tamanho:",
    "modal-cor":      "Cor:",
    "btn-carrinho":   "Adicionar ao Carrinho",
    "btn-comprar":    "⚡ Comprar agora",

    // CARRINHO
    "carrinho-titulo":       "Meu Carrinho",
    "carrinho-vazio":        "Seu carrinho está vazio.",
    "btn-fechar-carrinho":   "Fechar",
    "frete-label":           "Frete:",
    "prazo-label":           "Prazo:",
    "total-label":           "Total:",
    "btn-finalizar":         "Finalizar compra",
    "btn-continuar":         "Continuar comprando",
    "cupom-placeholder":     "Cupom de desconto",
    "cupom-btn":             "Aplicar",
    "cep-placeholder":       "CEP",
    "toast-carrinho":        "Produto adicionado ao carrinho",

    // CHECKOUT
    "checkout-titulo":        "Seu pedido",
    "checkout-produtos":      "Produtos",
    "checkout-ir-entrega":    "Prosseguir para entrega",
    "checkout-entrega-titulo":"Entrega e pagamento",
    "checkout-nome":          "Nome completo",
    "checkout-cpf":           "CPF",
    "checkout-rua":           "Rua",
    "checkout-numero":        "Número",
    "checkout-complemento":   "Complemento",
    "checkout-cidade":        "Cidade",
    "checkout-estado":        "Estado",
    "checkout-voltar":        "Voltar",
    "pagamento-cartao":       "Cartão de crédito",
    "pagamento-pix":          "Pix",
    "pagamento-boleto":       "Boleto",

    // CALCULADORA
    "calc-titulo":   "Calculadora",
    "aba-calc":      "🔢 Tradicional",
    "aba-medidas":   "📐 Medidas",
    "med-instrucao": "Digite suas informações:",
    "med-busto":     "Busto (cm):",
    "med-cintura":   "Cintura (cm):",
    "med-quadril":   "Quadril (cm):",
    "med-altura":    "Altura (cm):",
    "med-peso":      "Peso (kg):",
    "med-busto-placeholder":   "ex: 100",
    "med-cintura-placeholder": "ex: 85",
    "med-quadril-placeholder": "ex: 110",
    "med-altura-placeholder":  "ex: 165",
    "med-peso-placeholder":    "ex: 90",
    "btn-calcular":  "Calcular meu tamanho",

    // BLOG
    "blog-eyebrow":  "NOVIDADES & DICAS",
    "blog-titulo1":  "Ajudas e",
    "blog-titulo2":  "explicações",
    "blog-subtitulo":"Conteúdo para te ajudar a organizar eventos com mais segurança e profissionalismo.",
    "blog-autor":    "por PluziStyle",
    "blog-ler-mais": "Ler mais",
    "blog1-tag":     "Como escolher sua roupa na PluziStyle?",
    "blog1-titulo":  "Como escolher a sua roupa passo a passo com dicas dos criadores e muito mais...",
    "blog1-excerpt": "A seguir, nós iremos dar dicas, opções e ideias que você pode gostar e se inspirara para achar o melhor modelo pra você...",
    "blog1-readtime": "5 min de leitura",
    "blog1-modal-content": `
      <h3>Moda Plus Size para cada momento da sua vida</h3>
      <p>Escolher a roupa certa vai muito além do tamanho. É sobre entender o seu corpo, o seu estilo e a ocasião — e a PluziStyle está aqui para te ajudar em cada passo dessa jornada.</p>
      <h3>Casual e dia a dia</h3>
      <p>Para o cotidiano, aposte em peças confortáveis e versáteis. Camisetas básicas, conjuntos leves e calças alfaiteria são ótimas opções que combinam praticidade com estilo. Na PluziStyle você encontra essas peças do 46 ao 60.</p>
      <h3>Trabalho e ocasiões formais</h3>
      <p>Para o ambiente profissional, invista em camisas sociais, calças alfaiteria e blazers. Cores neutras como preto, branco e vinho transmitem elegância e podem ser combinadas de diversas formas.</p>
      <h3>Festas e eventos especiais</h3>
      <p>Para ocasiões especiais, nossa linha de conjuntos e peças de festa é perfeita. Tecidos nobres, cores vibrantes e modelagens que valorizam a silhueta fazem toda a diferença na sua autoestima.</p>
      <h3>Dicas para combinar peças</h3>
      <ul>
        <li><strong>Cores</strong> — misture tons neutros com uma peça de cor para dar vida ao look</li>
        <li><strong>Tecidos</strong> — combine texturas diferentes para criar looks mais interessantes</li>
        <li><strong>Proporção</strong> — peças mais largas em cima combinam com peças mais justas embaixo, e vice-versa</li>
        <li><strong>Acessórios</strong> — um cinto, colar ou brinco pode transformar completamente o visual</li>
        <li><strong>Conforto</strong> — nunca abra mão de se sentir bem na roupa que você está usando</li>
      </ul>
      <h3>Nossa tabela de preços</h3>
      <p>Roupas básicas (camisetas, bodies): R$ 50,00 | Vestidos e macacões: R$ 100,00 | Calças jeans e alfaiteria: R$ 120,00–180,00 | Conjuntos e peças de festa: R$ 120,00–250,00.</p>
    `,
    "blog2-tag":     "Autoestima",
    "blog2-titulo":  "Por que investir em roupas que te fazem bem é um ato de amor próprio",
    "blog2-excerpt": "Vestir-se bem não é frescura — é autocuidado. A forma como nos apresentamos ao mundo reflete diretamente na nossa confiança...",
    "blog2-readtime": "7 min de leitura",
    "blog2-modal-content": `
      <h3>A roupa que você veste faz parte de quem você é</h3>
      <p>Vestir-se bem não é frescura — é autocuidado. A forma como nos apresentamos ao mundo reflete diretamente na nossa confiança, no nosso humor e na maneira como nos relacionamos com as pessoas ao redor.</p>
      <h3>O impacto da moda na autoestima</h3>
      <p>Estudos mostram que usar roupas com as quais nos identificamos aumenta a autoconfiança e melhora o humor. Para mulheres Plus Size, encontrar peças que caibam bem e valorizem o corpo é ainda mais transformador.</p>
      <h3>Moda inclusiva é um direito</h3>
      <p>Durante muito tempo, o mercado da moda ignorou corpos maiores. A PluziStyle nasceu justamente para mudar isso — oferecendo peças modernas, estilosas e confortáveis do tamanho 46 ao 60, sem abrir mão da qualidade.</p>
      <h3>Conforto e estilo andam juntos</h3>
      <p>Acreditamos que não é preciso escolher entre se sentir confortável e se sentir bonita. Nossas peças são desenvolvidas com tecidos de qualidade e modelagens pensadas para valorizar cada tipo de corpo.</p>
      <h3>Você merece se sentir incrível todos os dias</h3>
      <p>Independente da ocasião — seja um dia comum de trabalho ou uma festa especial — você merece olhar no espelho e se sentir poderosa. Esse é o propósito da PluziStyle: te dar roupa e confiança para conquistar o mundo.</p>
    `,
    "blog3-tag":     "Guia de compras",
    "blog3-titulo":  "Guia completo para comprar na PluziStyle online",
    "blog3-excerpt": "Aqui tem dicas, orientações e muito mais para você ter um guia completo para comprar na PluziStyle",
    "blog3-readtime": "10 min de leitura",
    "blog3-modal-content": `
      <h3>Antes de comprar — conheça o seu corpo</h3>
      <ul>
        <li>✅ Tire suas medidas de busto, cintura e quadril</li>
        <li>✅ Consulte a tabela de tamanhos da loja antes de escolher</li>
        <li>✅ Anote sua altura e peso para usar a nossa calculadora de tamanho</li>
        <li>✅ Pense na ocasião para qual está comprando a peça</li>
        <li>✅ Verifique quais cores combinam melhor com seu tom de pele</li>
      </ul>
      <h3>Na hora de escolher a peça</h3>
      <ul>
        <li>✅ Leia a descrição completa do produto — tecido, modelagem e caimento</li>
        <li>✅ Veja todas as fotos disponíveis, incluindo fotos com modelo</li>
        <li>✅ Confira a disponibilidade do tamanho e da cor desejados</li>
        <li>✅ Duvide? Entre em contato pelo WhatsApp antes de finalizar</li>
      </ul>
      <h3>Na hora de pagar</h3>
      <ul>
        <li>✅ Escolha entre PIX, boleto ou cartão em até 3x sem juros</li>
        <li>✅ Verifique se o pedido atinge R$ 299,90 para frete grátis</li>
        <li>✅ Guarde o comprovante de pagamento</li>
        <li>✅ Acompanhe o status do seu pedido</li>
      </ul>
      <h3>Após receber a peça</h3>
      <ul>
        <li>✅ Experimente a roupa com a etiqueta ainda presa</li>
        <li>✅ Confira se o tamanho, cor e modelo estão corretos</li>
        <li>✅ Em caso de troca, entre em contato em até 7 dias pelo WhatsApp</li>
        <li>✅ Avalie o produto para ajudar outras clientes a escolherem</li>
      </ul>
      <h3>Dica PluziStyle</h3>
      <p>Em caso de dúvida entre dois tamanhos, opte sempre pelo maior. Nossas peças têm modelagem pensada para valorizar o corpo — o conforto faz toda a diferença no resultado final.</p>
    `,

    // AVALIAÇÕES
    "reviews-eyebrow": "O que dizem nossas clientes",
    "reviews-titulo1": "Amor em",
    "reviews-titulo2": "cada avaliação",
    "review1-texto":   "\"Parabéns! O pedido chegou muito bem embalado, juntamente com o brinde. A malha é boa e confortável, e o tamanho veio certinho.\"",
    "review2-texto":   "\"Sem palavras. Tudo muito bom! Pretendo comprar novamente!\"",
    "review3-texto":   "\"Confortável, tamanho certo e chegou no prazo. Parabéns pela qualidade e pelo atendimento!\"",

    // LOCALIZAÇÃO / RODAPÉ
    "localizacao-titulo":       "Nossa localização:",
    "footer-departamentos":     "Departamentos",
    "footer-troca":             "Politica de Troca e devolucões",
    "footer-privacidade":       "Politica de privacidade",
    "footer-sobre":             "Sobre nós",
    "footer-sobre-link":        "Conheça melhor sobre a PluziStyle",
    "footer-guia":              "Guia de tamanhos PlusStyle",
    "footer-redes":             "Redes sociais",
    "footer-contato":           "Entre em contato",
    "footer-localizacao-label": "localização:",
    "footer-copy":              "©Copyright",

    // GERAL
    "voltar-topo": "↑ Voltar ao topo",
  },

  // ─────────────────────────────────────────
  en: {
    "nav-inicio":          "Home",
    "nav-roupas":          "Clothes",
    "nav-avaliacoes":      "Reviews",
    "nav-contato":         "Contact",
    "nav-calculadora":     "📏 Size Calculator",
    "nav-camisa":          "Shirts",
    "nav-conjunto":        "Sets",
    "nav-calca":           "Pants",
    "nav-vestido":         "Dresses",
    "nav-macacao":         "Jumpsuits",
    "nav-maisInformacoes": "More info",

    "login-criar":   "Create account",
    "login-entrar":  "Sign in",
    "btn-navegacao": "Navigation",

    "placeholder-busca":      "Search PluziStyle",
    "filtro-limpar":           "Clear filters",
    "filtro-concluir":         "Apply",
    "filtro-preco-titulo":     "Price",
    "filtro-categoria-titulo": "Category",
    "filtro-cat-todos":        "All products",

    "splash-subtitulo":        "✦   PLUS SIZE FASHION   ✦",
    "splash-boas-vindas":      "Welcome to\nPluziStyle",
    "splash-scroll":           "Scroll to continue",
    "splash-form-subtitulo":   "✦   PERSONALIZATION   ✦",
    "splash-titulo":           "Tell us about yourself so we can find the best outfit for you",
    "splash-label-busca":      "What are you looking for?",
    "splash-label-cor":        "What's your favorite color?",
    "splash-placeholder-busca":"e.g.: shirt, pants, dress...",
    "splash-placeholder-cor":  "e.g.: black, pink, blue...",
    "splash-btn-entrar":       "See my suggestions ✨",
    "splash-btn-pular":        "I'd rather not say",

    "home-titulo1":      "COME AND DISCOVER",
    "home-titulo2":      "PLUZISTYLE",
    "home-desc1":        "PluziStyle aims to deliver the best",
    "home-desc2":        "variety of Plus Size clothing models with colors and comfort so",
    "home-desc3":        "you have options for every occasion with quality",
    "home-btn-catalogo": "See the full clothing catalog",
    "home-conheca":      "Meet some of our products❤︎",
    "saudacao":          "Hello!",

    "info-parcelamento-titulo": "Installments",
    "info-parcelamento-desc":   "Up to 3x interest-free",
    "info-frete-titulo":        "Free shipping",
    "info-frete-desc1":         "Orders over R$299.90",
    "info-frete-desc2":         "to all regions",
    "info-brinde-titulo":       "Free gift",
    "info-brinde-desc1":        "with lots of love",
    "info-brinde-desc2":        "for everyone",
    "info-contato-titulo":      "Contact us",

    "manifesto-label":     "Our philosophy",
    "manifesto-titulo":    "Each piece is a",
    "manifesto-titulo-em": "chapter",
    "manifesto-titulo2":   "of your existence",
    "manifesto-body":      "Clothing is not just fabric. It's memory, identity, presence. At PluziStyle, every garment is designed to give you comfort and joy. Noble materials, timeless silhouettes, contemporary soul.",

    "stat-vendidas": "Units sold",
    "stat-pecas":    "Unique pieces",
    "stat-meses":    "months",
    "stat-mercado":  "Our time in the market",

    "btn-ver-produto":  "View product",
    "pessoas-vendo-1":  "person viewing this now",
    "pessoas-vendo-n":  "people viewing this now",
    "tamanho-esgotado": "❌ Size sold out",
    "estoque-restam-apenas": "⚠️ Only {quantidade} units left!",
    "estoque-disponivel": "✅ {quantidade} units available",
    "produto-nao-encontrado": "Product not found",
    "sugestoes-titulo": "✨ Suggestions for you",
    "sugestoes-titulo-busca-cor": "✨ {busca} in {cor} color — our suggestions",
    "sugestoes-titulo-busca": "✨ Suggestions for {busca}",
    "sugestoes-titulo-cor": "✨ Pieces in {cor} color for you",
    "blog-modal-cta":      "See our clothes",
    "blog-modal-close-label": "Close",
    "saudacao-prefix":     "Hello",
    "excluir-rec":      "🗑️ Delete recommendations",
    "fazer-rec":        "✨ Make a recommendation",
    "ultimos-vistos":   "👀 Recently viewed",
    "limpar-sel":       "🗑️ Clear selected",
    "selecionar-todos": "Select all",

    "catalogo-titulo":    "Clothing Catalog",
    "destaques-titulo":   "Best\nSellers",
    "destaques-cta":      "See full catalog →",
    "lancamentos-titulo": "new arrivals",
    "btn-voltar":         "← Back",

    "cat-camisas":   "Category: Basic / dress shirts.",
    "cat-calca-alf": "Category: Tailored pants.",
    "cat-conjuntos": "Category: Sets & party wear.",
    "cat-basicas":   "Category: Basic clothing.",
    "preco-partir":  "From R$ 120.00",

    "prod-calca":         "Tailored pants",
    "prod-festa-vinho":   "Wine party outfit",
    "prod-body-branco":   "White bodysuit",
    "prod-camisa-branca": "BASIC WHITE SHIRT",
    "prod-camisa-preta":  "BASIC BLACK SHIRT",
    "prod-camisa-vinho":  "BASIC WINE SHIRT",

    "modal-tamanho": "Size:",
    "modal-cor":     "Color:",
    "btn-carrinho":  "Add to Cart",
    "btn-comprar":   "⚡ Buy now",

    "carrinho-titulo":     "My Cart",
    "carrinho-vazio":      "Your cart is empty.",
    "btn-fechar-carrinho": "Close",
    "frete-label":         "Shipping:",
    "prazo-label":         "Deadline:",
    "total-label":         "Total:",
    "btn-finalizar":       "Checkout",
    "btn-continuar":       "Continue shopping",
    "cupom-placeholder":   "Discount coupon",
    "cupom-btn":           "Apply",
    "cep-placeholder":     "ZIP code",
    "toast-carrinho":      "Product added to cart",

    "checkout-titulo":         "Your order",
    "checkout-produtos":       "Products",
    "checkout-ir-entrega":     "Proceed to delivery",
    "checkout-entrega-titulo": "Delivery & payment",
    "checkout-nome":           "Full name",
    "checkout-cpf":            "Tax ID (CPF)",
    "checkout-rua":            "Street",
    "checkout-numero":         "Number",
    "checkout-complemento":    "Complement",
    "checkout-cidade":         "City",
    "checkout-estado":         "State",
    "checkout-voltar":         "Back",
    "pagamento-cartao":        "Credit card",
    "pagamento-pix":           "Pix",
    "pagamento-boleto":        "Bank slip",

    "calc-titulo":   "Calculator",
    "aba-calc":      "🔢 Traditional",
    "aba-medidas":   "📐 Measurements",
    "med-instrucao": "Enter your information:",
    "med-busto":     "Bust (cm):",
    "med-cintura":   "Waist (cm):",
    "med-quadril":   "Hip (cm):",
    "med-altura":    "Height (cm):",
    "med-peso":      "Weight (kg):",
    "med-busto-placeholder":   "e.g.: 100",
    "med-cintura-placeholder": "e.g.: 85",
    "med-quadril-placeholder": "e.g.: 110",
    "med-altura-placeholder":  "e.g.: 165",
    "med-peso-placeholder":    "e.g.: 90",
    "btn-calcular":  "Calculate my size",

    "blog-eyebrow":  "NEWS & TIPS",
    "blog-titulo1":  "Help and",
    "blog-titulo2":  "explanations",
    "blog-subtitulo":"Content to help you shop more confidently and professionally.",
    "blog-autor":    "by PluziStyle",
    "blog-ler-mais": "Read more",
    "blog1-tag":     "How to choose your outfit at PluziStyle?",
    "blog1-titulo":  "How to choose your outfit step by step with creator tips and more...",
    "blog1-excerpt": "We'll give you tips, options and ideas you might enjoy to find the best style for you...",
    "blog1-readtime": "5 min read",
    "blog1-modal-content": `
      <h3>Plus Size fashion for every moment of your life</h3>
      <p>Choosing the right outfit goes far beyond size. It is about understanding your body, your style and the occasion — and PluziStyle is here to help you every step of the way.</p>
      <h3>Casual and everyday</h3>
      <p>For daily wear, choose comfortable and versatile pieces. Basic tees, light sets and tailored pants are great options that combine practicality with style. At PluziStyle you can find these pieces from size 46 to 60.</p>
      <h3>Work and formal occasions</h3>
      <p>For professional settings, invest in dress shirts, tailored trousers and blazers. Neutral colors like black, white and wine convey elegance and can be combined in many ways.</p>
      <h3>Parties and special events</h3>
      <p>For special occasions, our party sets and occasion pieces are perfect. Noble fabrics, vibrant colors and silhouettes that flatter the body make a big difference for your confidence.</p>
      <h3>Tips for combining pieces</h3>
      <ul>
        <li><strong>Colors</strong> — mix neutrals with one colorful piece to bring the look to life</li>
        <li><strong>Fabrics</strong> — combine different textures for more interesting looks</li>
        <li><strong>Proportion</strong> — looser tops pair well with more fitted bottoms, and vice versa</li>
        <li><strong>Accessories</strong> — a belt, necklace or earrings can completely transform the look</li>
        <li><strong>Comfort</strong> — never give up feeling good in what you're wearing</li>
      </ul>
      <h3>Our price table</h3>
      <p>Basic clothes (tees, bodys): R$ 50.00 | Dresses and jumpsuits: R$ 100.00 | Jeans and tailored pants: R$ 120.00–180.00 | Sets and party pieces: R$ 120.00–250.00.</p>
    `,
    "blog2-tag":     "Self-esteem",
    "blog2-titulo":  "Why investing in clothes that make you feel good is an act of self-love",
    "blog2-excerpt": "Dressing well is not vanity — it's self-care. How we present ourselves directly affects our confidence...",
    "blog2-readtime": "7 min read",
    "blog2-modal-content": `
      <h3>The clothes you wear are part of who you are</h3>
      <p>Getting dressed well isn't about vanity — it's about self-care. How we present ourselves to the world directly influences our confidence, mood, and relationships.</p>
      <h3>Fashion and self-esteem</h3>
      <p>Research shows that wearing clothes we identify with boosts self-confidence and happiness. For Plus Size women, finding well-fitting pieces can be especially transformative.</p>
      <h3>Inclusive fashion is a right</h3>
      <p>For too long, the fashion industry ignored larger bodies. PluziStyle was created to change that by offering modern, stylish and comfortable pieces from sizes 46 to 60.</p>
      <h3>Comfort and style together</h3>
      <p>You do not need to choose between feeling comfortable and looking beautiful. Our pieces are made with quality fabrics and cuts designed to flatter every body.</p>
      <h3>You deserve to feel amazing every day</h3>
      <p>Whether it is a regular workday or a special event, you deserve to look in the mirror and feel powerful. That is the purpose of PluziStyle: to give you clothing and confidence to conquer the world.</p>
    `,
    "blog3-tag":     "Shopping guide",
    "blog3-titulo":  "Complete guide to shopping at PluziStyle online",
    "blog3-excerpt": "Tips, guidance and much more for a complete shopping guide at PluziStyle",
    "blog3-readtime": "10 min read",
    "blog3-modal-content": `
      <h3>Before buying — know your body</h3>
      <ul>
        <li>✅ Take your bust, waist and hip measurements</li>
        <li>✅ Check the store size chart before choosing</li>
        <li>✅ Write down your height and weight for our size calculator</li>
        <li>✅ Think about the occasion you are buying for</li>
        <li>✅ See which colors suit your skin tone best</li>
      </ul>
      <h3>Choosing the piece</h3>
      <ul>
        <li>✅ Read the full product description — fabric, fit and drape</li>
        <li>✅ Look at all available photos, including model images</li>
        <li>✅ Check size and color availability</li>
        <li>✅ If in doubt, contact us on WhatsApp before checkout</li>
      </ul>
      <h3>When paying</h3>
      <ul>
        <li>✅ Choose PIX, boleto, or card up to 3x interest-free</li>
        <li>✅ Check if your order reaches R$ 299.90 for free shipping</li>
        <li>✅ Keep the payment receipt</li>
        <li>✅ Track your order status</li>
      </ul>
      <h3>After receiving the piece</h3>
      <ul>
        <li>✅ Try the garment with the tag still attached</li>
        <li>✅ Confirm size, color and model are correct</li>
        <li>✅ If you need an exchange, contact us within 7 days via WhatsApp</li>
        <li>✅ Review the product to help other customers choose</li>
      </ul>
      <h3>PluziStyle tip</h3>
      <p>If you are unsure between two sizes, choose the larger one. Our pieces are designed to flatter the body — comfort makes all the difference.</p>
    `,

    "reviews-eyebrow": "What our customers say",
    "reviews-titulo1": "Love in",
    "reviews-titulo2": "every review",
    "review1-texto":   "\"Amazing! The order arrived beautifully packaged with a gift. The fabric is good and comfortable, and the size was perfect.\"",
    "review2-texto":   "\"Speechless. Everything was great! I'll definitely buy again!\"",
    "review3-texto":   "\"Comfortable, right size, and arrived on time. Congrats on the quality and service!\"",

    "localizacao-titulo":       "Our location:",
    "footer-departamentos":     "Departments",
    "footer-troca":             "Exchange & Return Policy",
    "footer-privacidade":       "Privacy Policy",
    "footer-sobre":             "About us",
    "footer-sobre-link":        "Learn more about PluziStyle",
    "footer-guia":              "PluziStyle size guide",
    "footer-redes":             "Social media",
    "footer-contato":           "Contact us",
    "footer-localizacao-label": "location:",
    "footer-copy":              "©Copyright",

    "voltar-topo": "↑ Back to top",
  },

  // ─────────────────────────────────────────
  es: {
    "nav-inicio":          "Inicio",
    "nav-roupas":          "Ropa",
    "nav-avaliacoes":      "Reseñas",
    "nav-contato":         "Contacto",
    "nav-calculadora":     "📏 Calculadora de Talla",
    "nav-camisa":          "Camisas",
    "nav-conjunto":        "Conjuntos",
    "nav-calca":           "Pantalones",
    "nav-vestido":         "Vestidos",
    "nav-macacao":         "Monos",
    "nav-maisInformacoes": "Más información",

    "login-criar":   "Crear cuenta",
    "login-entrar":  "Iniciar sesión",
    "btn-navegacao": "Navegación",

    "placeholder-busca":      "Buscar en PluziStyle",
    "filtro-limpar":           "Limpiar filtros",
    "filtro-concluir":         "Aplicar",
    "filtro-preco-titulo":     "Precio",
    "filtro-categoria-titulo": "Categoría",
    "filtro-cat-todos":        "Todos los productos",

    "splash-subtitulo":        "✦   MODA TALLAS GRANDES   ✦",
    "splash-boas-vindas":      "Bienvenida a\nPluziStyle",
    "splash-scroll":           "Desliza para continuar",
    "splash-form-subtitulo":   "✦   PERSONALIZACIÓN   ✦",
    "splash-titulo":           "Cuéntanos sobre ti para que encontremos el mejor outfit para vos",
    "splash-label-busca":      "¿Qué buscas?",
    "splash-label-cor":        "¿Cuál es tu color favorito?",
    "splash-placeholder-busca":"ej.: camisa, pantalón, vestido...",
    "splash-placeholder-cor":  "ej.: negro, rosa, azul...",
    "splash-btn-entrar":       "Ver mis sugerencias ✨",
    "splash-btn-pular":        "Prefiero no decir",

    "home-titulo1":      "VEN Y CONOCE",
    "home-titulo2":      "PLUZISTYLE",
    "home-desc1":        "PluziStyle tiene como objetivo ofrecer la mejor",
    "home-desc2":        "variedad de modelos de ropa en tallas grandes con colores y comodidad para",
    "home-desc3":        "que tengas opciones para todas las ocasiones con calidad",
    "home-btn-catalogo": "Ver el catálogo completo de ropa",
    "home-conheca":      "Conoce algunos de nuestros productos❤︎",
    "saudacao":          "¡Hola!",

    "info-parcelamento-titulo": "Cuotas",
    "info-parcelamento-desc":   "Hasta 3 cuotas sin interés",
    "info-frete-titulo":        "Envío gratis",
    "info-frete-desc1":         "En pedidos sobre R$299,90",
    "info-frete-desc2":         "en todas las regiones",
    "info-brinde-titulo":       "Regalo",
    "info-brinde-desc1":        "con mucho cariño",
    "info-brinde-desc2":        "para todos",
    "info-contato-titulo":      "Contáctanos",

    "manifesto-label":     "Nuestra filosofía",
    "manifesto-titulo":    "Cada pieza es un",
    "manifesto-titulo-em": "capítulo",
    "manifesto-titulo2":   "de tu existencia",
    "manifesto-body":      "La ropa no es solo tela. Es memoria, identidad, presencia. En PluziStyle, cada prenda está pensada para brindarte comodidad y alegría. Materiales nobles, siluetas atemporales, alma contemporánea.",

    "stat-vendidas": "Unidades vendidas",
    "stat-pecas":    "Piezas únicas",
    "stat-meses":    "meses",
    "stat-mercado":  "Nuestro tiempo en el mercado",

    "btn-ver-produto":  "Ver producto",
    "pessoas-vendo-1":  "persona viendo esto ahora",
    "pessoas-vendo-n":  "personas viendo esto ahora",
    "tamanho-esgotado": "❌ Talla agotada",
    "estoque-restam-apenas": "⚠️ ¡Solo quedan {quantidade} unidades!",
    "estoque-disponivel": "✅ {quantidade} unidades disponibles",
    "produto-nao-encontrado": "Producto no encontrado",
    "sugestoes-titulo": "✨ Sugerencias para ti",
    "sugestoes-titulo-busca-cor": "✨ {busca} en color {cor} — nuestras sugerencias",
    "sugestoes-titulo-busca": "✨ Sugerencias de {busca}",
    "sugestoes-titulo-cor": "✨ Prendas en color {cor} para ti",
    "blog-modal-cta":      "Mira nuestra ropa",
    "blog-modal-close-label": "Cerrar",
    "saudacao-prefix":     "¡Hola",
    "excluir-rec":      "🗑️ Eliminar recomendaciones",
    "fazer-rec":        "✨ Hacer una recomendación",
    "ultimos-vistos":   "👀 Vistos recientemente",
    "limpar-sel":       "🗑️ Limpiar seleccionados",
    "selecionar-todos": "Seleccionar todos",

    "catalogo-titulo":    "Catálogo de Ropa",
    "destaques-titulo":   "Más\nVendidos",
    "destaques-cta":      "Ver catálogo completo →",
    "lancamentos-titulo": "novedades",
    "btn-voltar":         "← Volver",

    "cat-camisas":   "Categoría: Camisas sociales/básicas.",
    "cat-calca-alf": "Categoría: Pantalón sastre.",
    "cat-conjuntos": "Categoría: Conjuntos y prendas de fiesta.",
    "cat-basicas":   "Categoría: Ropa básica.",
    "preco-partir":  "Desde R$ 120,00",

    "prod-calca":         "Pantalón sastre",
    "prod-festa-vinho":   "Prenda de fiesta vino",
    "prod-body-branco":   "Body blanco",
    "prod-camisa-branca": "CAMISA BÁSICA BLANCA",
    "prod-camisa-preta":  "CAMISA BÁSICA NEGRA",
    "prod-camisa-vinho":  "CAMISA BÁSICA VINO",

    "modal-tamanho": "Talla:",
    "modal-cor":     "Color:",
    "btn-carrinho":  "Añadir al carrito",
    "btn-comprar":   "⚡ Comprar ahora",

    "carrinho-titulo":     "Mi Carrito",
    "carrinho-vazio":      "Tu carrito está vacío.",
    "btn-fechar-carrinho": "Cerrar",
    "frete-label":         "Envío:",
    "prazo-label":         "Plazo:",
    "total-label":         "Total:",
    "btn-finalizar":       "Finalizar compra",
    "btn-continuar":       "Seguir comprando",
    "cupom-placeholder":   "Cupón de descuento",
    "cupom-btn":           "Aplicar",
    "cep-placeholder":     "Código postal",
    "toast-carrinho":      "Producto añadido al carrito",

    "checkout-titulo":         "Tu pedido",
    "checkout-produtos":       "Productos",
    "checkout-ir-entrega":     "Continuar con la entrega",
    "checkout-entrega-titulo": "Entrega y pago",
    "checkout-nome":           "Nombre completo",
    "checkout-cpf":            "CPF",
    "checkout-rua":            "Calle",
    "checkout-numero":         "Número",
    "checkout-complemento":    "Complemento",
    "checkout-cidade":         "Ciudad",
    "checkout-estado":         "Estado",
    "checkout-voltar":         "Volver",
    "pagamento-cartao":        "Tarjeta de crédito",
    "pagamento-pix":           "Pix",
    "pagamento-boleto":        "Boleto bancario",

    "calc-titulo":   "Calculadora",
    "aba-calc":      "🔢 Tradicional",
    "aba-medidas":   "📐 Medidas",
    "med-instrucao": "Ingresa tu información:",
    "med-busto":     "Busto (cm):",
    "med-cintura":   "Cintura (cm):",
    "med-quadril":   "Cadera (cm):",
    "med-altura":    "Altura (cm):",
    "med-peso":      "Peso (kg):",
    "med-busto-placeholder":   "ej.: 100",
    "med-cintura-placeholder": "ej.: 85",
    "med-quadril-placeholder": "ej.: 110",
    "med-altura-placeholder":  "ej.: 165",
    "med-peso-placeholder":    "ej.: 90",
    "btn-calcular":  "Calcular mi talla",

    "blog-eyebrow":  "NOVEDADES Y CONSEJOS",
    "blog-titulo1":  "Ayudas y",
    "blog-titulo2":  "explicaciones",
    "blog-subtitulo":"Contenido para ayudarte a comprar con más seguridad y profesionalismo.",
    "blog-autor":    "por PluziStyle",
    "blog-ler-mais": "Leer más",
    "blog1-tag":     "¿Cómo elegir tu ropa en PluziStyle?",
    "blog1-titulo":  "Cómo elegir tu ropa paso a paso con consejos de los creadores y mucho más...",
    "blog1-excerpt": "A continuación, te daremos consejos, opciones e ideas para que encuentres el mejor modelo para ti...",
    "blog2-tag":     "Autoestima",
    "blog2-titulo":  "Por qué invertir en ropa que te hace bien es un acto de amor propio",
    "blog2-excerpt": "Vestirse bien no es vanidad — es autocuidado. La forma en que nos presentamos al mundo refleja directamente en nuestra confianza...",
    "blog2-readtime": "7 min de lectura",
    "blog2-modal-content": `
      <h3>La ropa que vistes es parte de quién eres</h3>
      <p>Vestirse bien no se trata de vanidad, sino de autocuidado. La forma en que nos presentamos al mundo influye directamente en nuestra confianza, estado de ánimo y relaciones.</p>
      <h3>Moda y autoestima</h3>
      <p>Las investigaciones muestran que usar ropa con la que nos identificamos aumenta la confianza y la felicidad. Para las mujeres Plus Size, encontrar prendas que queden bien puede ser especialmente transformador.</p>
      <h3>La moda inclusiva es un derecho</h3>
      <p>Durante mucho tiempo, la industria de la moda ignoró los cuerpos grandes. PluziStyle nació para cambiar eso, ofreciendo piezas modernas, estilosas y cómodas de la talla 46 a la 60.</p>
      <h3>Comodidad y estilo juntos</h3>
      <p>No necesitas elegir entre sentirte cómoda y verte hermosa. Nuestras prendas están hechas con tejidos de calidad y cortes pensados para resaltar cada cuerpo.</p>
      <h3>Mereces sentirte increíble todos los días</h3>
      <p>Ya sea un día normal de trabajo o un evento especial, mereces mirarte al espejo y sentirte poderosa. Ese es el propósito de PluziStyle: darte ropa y confianza para conquistar el mundo.</p>
    `,
    "blog3-tag":     "Guía de compras",
    "blog3-titulo":  "Guía completa para comprar en PluziStyle online",
    "blog3-excerpt": "Aquí encontrarás consejos, orientaciones y mucho más para tener una guía completa para comprar en PluziStyle",
    "blog3-readtime": "10 min de lectura",
    "blog3-modal-content": `
      <h3>Antes de comprar — conoce tu cuerpo</h3>
      <ul>
        <li>✅ Toma tus medidas de busto, cintura y cadera</li>
        <li>✅ Consulta la tabla de tallas antes de elegir</li>
        <li>✅ Anota tu altura y peso para usar nuestra calculadora de tallas</li>
        <li>✅ Piensa en la ocasión para la que compras la prenda</li>
        <li>✅ Revisa qué colores combinan mejor con tu tono de piel</li>
      </ul>
      <h3>Al elegir la prenda</h3>
      <ul>
        <li>✅ Lee la descripción completa del producto — tejido, corte y caída</li>
        <li>✅ Mira todas las fotos disponibles, incluyendo imágenes con modelo</li>
        <li>✅ Verifica la disponibilidad de talla y color deseados</li>
        <li>✅ Si tienes dudas, contáctanos por WhatsApp antes de finalizar</li>
      </ul>
      <h3>Al pagar</h3>
      <ul>
        <li>✅ Elige entre PIX, boleto o tarjeta en hasta 3x sin interés</li>
        <li>✅ Verifica si tu pedido alcanza R$ 299,90 para envío gratis</li>
        <li>✅ Guarda el comprobante de pago</li>
        <li>✅ Sigue el estado de tu pedido</li>
      </ul>
      <h3>Después de recibir la prenda</h3>
      <ul>
        <li>✅ Prueba la prenda con la etiqueta aún puesta</li>
        <li>✅ Confirma que la talla, color y modelo sean correctos</li>
        <li>✅ Si necesitas un cambio, contáctanos dentro de 7 días por WhatsApp</li>
        <li>✅ Califica el producto para ayudar a otras clientas a elegir</li>
      </ul>
      <h3>Consejo PluziStyle</h3>
      <p>Si dudas entre dos tallas, elige siempre la mayor. Nuestras prendas están diseñadas para realzar el cuerpo — la comodidad marca la diferencia.</p>
    `,

    "reviews-eyebrow": "Lo que dicen nuestras clientas",
    "reviews-titulo1": "Amor en",
    "reviews-titulo2": "cada reseña",
    "review1-texto":   "\"¡Felicitaciones! El pedido llegó muy bien empacado con el regalo. La tela es buena y cómoda, y la talla fue perfecta.\"",
    "review2-texto":   "\"Sin palabras. ¡Todo muy bueno! ¡Pienso comprar de nuevo!\"",
    "review3-texto":   "\"Cómoda, talla correcta y llegó a tiempo. ¡Felicitaciones por la calidad y la atención!\"",

    "localizacao-titulo":       "Nuestra ubicación:",
    "footer-departamentos":     "Departamentos",
    "footer-troca":             "Política de Cambios y Devoluciones",
    "footer-privacidade":       "Política de privacidad",
    "footer-sobre":             "Sobre nosotros",
    "footer-sobre-link":        "Conoce mejor PluziStyle",
    "footer-guia":              "Guía de tallas PluziStyle",
    "footer-redes":             "Redes sociales",
    "footer-contato":           "Contáctanos",
    "footer-localizacao-label": "ubicación:",
    "footer-copy":              "©Copyright",

    "voltar-topo": "↑ Volver arriba",
  }
};

function traduzir(key, params = {}) {
  const lang = localStorage.getItem("idioma") || "pt";
  const t = traducoes[lang] || traducoes.pt;
  let texto = t[key] !== undefined ? t[key] : "";
  Object.entries(params).forEach(([chave, valor]) => {
    texto = texto.replace(new RegExp(`\{${chave}\}`, 'g'), valor);
  });
  return texto;
}

// =============================================
// FUNÇÃO APLICAR IDIOMA
// Suporta: data-i18n (textContent), data-i18n-placeholder (placeholder),
//          <option data-i18n> e <select> com opções traduzíveis
// =============================================
function aplicarIdioma(lang) {
  const t = traducoes[lang];
  if (!t) return;

  // Salva preferência
  localStorage.setItem("idioma", lang);

  // Marca botão ativo
  document.querySelectorAll(".btn-idioma").forEach(btn => {
    btn.classList.toggle("ativo", btn.dataset.lang === lang);
  });

  // Traduz textContent
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (key === "saudacao" && usuarioLogado && (usuarioLogado.nome || usuarioLogado.email)) {
      return; // preserve personalized greeting when logged in
    }
    if (t[key] !== undefined) {
      // Preserva ícones filhos (svg, i) — só altera texto se não houver filhos de elemento
      const hasElementChildren = [...el.children].some(c => c.tagName !== "BR");
      if (!hasElementChildren) {
        el.textContent = t[key];
      } else {
        // Apenas atualiza nós de texto diretos
        el.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            node.textContent = t[key];
          }
        });
      }
    }
  });

  // Traduz placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Traduz <option> individuais
  document.querySelectorAll("option[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Atualiza lang do <html>
  document.documentElement.lang = lang;
}

// Aplica idioma salvo ou padrão PT ao carregar
document.addEventListener("DOMContentLoaded", () => {
  const idiomaSalvo = localStorage.getItem("idioma") || "pt";
  aplicarIdioma(idiomaSalvo);
});

  // Atualiza "pessoas vendo" dinamicamente
  document.querySelectorAll('.pessoas-vendo').forEach(el => {
    const num = parseInt(el.textContent.match(/\d+/)?.[0]) || 1;
    const txt = num === 1 ? t['pessoas-vendo-1'] : t['pessoas-vendo-n'];
    el.textContent = `👁️ ${num} ${txt}`;
  });


// Inicia com idioma salvo ou português
window.addEventListener('load', () => {
  const idiomaSalvo = localStorage.getItem('idioma') || 'pt';
  aplicarIdioma(idiomaSalvo);
});
// NAVBAR LINKS
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('ativo'));
    this.classList.add('ativo');
    document.querySelector('.navbar').classList.remove('aberto');

    if (this.getAttribute('href') === '#roupas') {
      e.preventDefault();
      abrirTelaRoupas();
    }
  });
});

// BOTÃO TOGGLE NAVBAR
const btnMenu = document.getElementById('btnMenu');
const navbar = document.querySelector('.navbar');

btnMenu.addEventListener('click', function() {
  if (navbar.classList.contains('aberto')) {
    navbar.classList.add('fechando');
    navbar.classList.remove('aberto');
    setTimeout(() => {
      navbar.classList.remove('fechando');
    }, 600);
  } else {
    navbar.classList.remove('fechando');
    navbar.classList.add('aberto');
  }
});

// TEMA DARK/LIGHT
const btnTema = document.getElementById('btnTema');

if (localStorage.getItem('tema') === 'dark') {
  document.body.classList.add('dark');
  btnTema.textContent = '☀️';
}

btnTema.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    btnTema.textContent = '☀️';
    localStorage.setItem('tema', 'dark');
  } else {
    btnTema.textContent = '🌙';
    localStorage.setItem('tema', 'light');
  }
});

const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // counter animation
      const counter = e.target.querySelector('.count-up');
      if (counter && !counter.dataset.animated) {
        counter.dataset.animated = '1';
        const target = +counter.dataset.target;
        const duration = 1800;
        const start = performance.now();
        function step(now) {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 4);
          counter.textContent = Math.round(ease * target);
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => obs.observe(el));

//splash
(function () {

  const splash     = document.getElementById('splash');
  const fase1      = document.getElementById('splash-fase1');
  const fase2      = document.getElementById('splash-fase2');
  const btnEntrar  = document.getElementById('splash-btn-entrar');
  const btnPular   = document.getElementById('splash-btn-pular');
  const inputBusca = document.getElementById('splash-input-busca');
  const inputCor   = document.getElementById('splash-input-cor');

  // ── Pega o usuário logado ────────────────────────────
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  // Chaves únicas por conta (ou "guest" se não estiver logado)
  const chaveVisita = usuarioLogado
    ? 'pluzistyle_visitou_' + usuarioLogado.email
    : 'pluzistyle_visitou_guest';

  const chaveB = usuarioLogado
    ? 'pluzistyle_busca_' + usuarioLogado.email
    : 'pluzistyle_busca_guest';

  const chaveC = usuarioLogado
    ? 'pluzistyle_cor_' + usuarioLogado.email
    : 'pluzistyle_cor_guest';

  // Verifica se é a primeira vez DESTA conta
  const primeiraVez = !localStorage.getItem(chaveVisita);

  // Bloqueia scroll enquanto splash está ativo
  document.body.classList.add('no-scroll');

  // ── Fecha o splash ───────────────────────────────────
  function fecharSplash(busca, cor) {
    splash.classList.add('sumir');
    document.body.classList.remove('no-scroll');

    setTimeout(() => {
      splash.remove();

      if (busca || cor) {
        // Salva preferências vinculadas à conta
        localStorage.setItem(chaveB, busca || '');
        localStorage.setItem(chaveC, cor   || '');
        aplicarSugestoes(busca, cor);
      }
    }, 850);
  }

  // ── Fase 1 → Fase 2 (ao rolar) ──────────────────────
  function irParaFase2() {
    fase1.classList.add('saindo');

    // Não é primeira vez: fecha direto sem mostrar formulário
    if (!primeiraVez) {
      setTimeout(() => fecharSplash(null, null), 950);
      return;
    }

    // Primeira vez: mostra o formulário após a fase1 sair
    setTimeout(() => {
      fase2.classList.add('visivel');
    }, 400);
  }

  // ── Detecta qualquer tipo de scroll ─────────────────
let scrollJaDisparado = false;

function dispararScroll() {
  if (scrollJaDisparado) return;
  scrollJaDisparado = true;
  irParaFase2();
}

// Mouse normal e trackpad (wheel cobre os dois)
window.addEventListener('wheel', dispararScroll, { passive: true });

// Touch (celular e trackpad em modo touch)
window.addEventListener('touchmove', dispararScroll, { passive: true });

// Teclado
window.addEventListener('keydown', (e) => {
  if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' '].includes(e.key)) {
    dispararScroll();
  }
});

// Trackpad horizontal (dois dedos pra lado)
window.addEventListener('scroll', dispararScroll, { passive: true });

// Fallback para trackpads que usam pointer events
window.addEventListener('pointermove', (e) => {
  // Só dispara se for movimento de dois dedos simulando scroll (pressure/tilt)
  if (e.pointerType === 'touch' || (e.pointerType === 'mouse' && e.buttons === 0 && e.movementY !== 0)) {
    // não faz nada aqui, o wheel já cobre
  }
}, { passive: true });

// Fallback agressivo: qualquer interação após 1.5s já avança
setTimeout(() => {
  window.addEventListener('mousemove', dispararScroll, { once: true, passive: true });
}, 1500);

  // ── Botão "Ver sugestões" ────────────────────────────
  if (btnEntrar) {
    btnEntrar.addEventListener('click', () => {
      const busca = inputBusca?.value.trim() || '';
      const cor   = inputCor?.value.trim()   || '';
      localStorage.setItem(chaveVisita, '1');
      fecharSplash(busca, cor);
    });
  }

  // ── Botão "Prefiro não dizer" ────────────────────────
  if (btnPular) {
    btnPular.addEventListener('click', () => {
      localStorage.setItem(chaveVisita, '1');
      localStorage.removeItem(chaveB);
      localStorage.removeItem(chaveC);
      fecharSplash(null, null);
    });
  }

  // ── Aplica sugestões salvas ao reabrir o site ────────
  window.addEventListener('load', () => {
    const buscaSalva = localStorage.getItem(chaveB);
    const corSalva   = localStorage.getItem(chaveC);

    if (buscaSalva || corSalva) {
      setTimeout(() => {
        aplicarSugestoes(buscaSalva, corSalva);
      }, 1200);
    }
  });

  // ── Aplica sugestões abaixo do carrossel ─────────────
  function aplicarSugestoes(busca, cor) {

    const tentarAplicar = () => {
      if (typeof Roupas === 'undefined') {
        setTimeout(tentarAplicar, 100);
        return;
      }

      const normalizar = (str) =>
        (str || '').toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .trim();

      const buscaNorm = normalizar(busca);
      const corNorm   = normalizar(cor);

      const mapaCategoria = {
        'camisa':    'Camisas sociais/basicas',
        'camisas':   'Camisas sociais/basicas',
        'blusa':     'Camisas sociais/basicas',
        'social':    'Camisas sociais/basicas',
        'basica':    'Roupas basicas',
        'basicas':   'Roupas basicas',
        'shorts':    'Roupas basicas',
        'body':      'Roupas basicas',
        'calca':     'Calças',
        'calcas':    'Calças',
        'jeans':     'Calças',
        'vestido':   'Vestidos',
        'vestidos':  'Vestidos',
        'conjunto':  'Conjuntos e peças de festas',
        'conjuntos': 'Conjuntos e peças de festas',
        'festa':     'Conjuntos e peças de festas',
        'peca':      'Conjuntos e peças de festas',
      };

      const mapaCores = {
        'preto': 'preto', 'preta': 'preto', 'black': 'preto',
        'branco': 'branco', 'branca': 'branco', 'white': 'branco',
        'rosa': 'rosa', 'pink': 'rosa',
        'roxo': 'roxo', 'roxa': 'roxo', 'purple': 'roxo', 'lilas': 'roxo',
        'vinho': 'vinho', 'bordo': 'vinho', 'marsala': 'vinho',
        'azul': 'azul', 'blue': 'azul',
        'azul claro': 'azul claro', 'celeste': 'azul claro',
        'azul escuro': 'azul escuro', 'marinho': 'azul escuro', 'navy': 'azul escuro',
        'amarelo': 'amarelo', 'yellow': 'amarelo',
        'vermelho': 'vermelho', 'vermelha': 'vermelho', 'red': 'vermelho',
        'verde': 'verde', 'green': 'verde',
        'cinza': 'cinza', 'gray': 'cinza', 'grey': 'cinza',
        'bege': 'bege', 'nude': 'bege',
        'caramelo': 'caramelo',
      };

      const categoriaBuscada = mapaCategoria[buscaNorm] || null;
      const corBuscada       = mapaCores[corNorm] || corNorm || null;

      let sugestoes = Roupas.filter(p => {
        let ok = true;

        if (buscaNorm) {
          const catNorm = normalizar(p.categoria);
          const titNorm = normalizar(p.titulo);
          if (categoriaBuscada) {
            ok = ok && p.categoria === categoriaBuscada;
          } else {
            ok = ok && (titNorm.includes(buscaNorm) || catNorm.includes(buscaNorm));
          }
        }

        if (corBuscada && p.cores && p.cores.length > 0) {
          ok = ok && p.cores.some(c => normalizar(c).includes(corBuscada));
        }

        return ok;
      });

      if (sugestoes.length === 0) sugestoes = Roupas.slice(0, 6);
      sugestoes = sugestoes.slice(0, 8);

      const secao       = document.getElementById('secaoSugestoes');
      const titulo      = document.getElementById('tituloSugestoes');
      const cardsSugest = document.getElementById('cardsSugestoes');

      if (!secao || !cardsSugest) return;

      const idioma = localStorage.getItem('idioma') || 'pt';
      const t = traducoes[idioma] || traducoes.pt;

      let tituloTexto = t['sugestoes-titulo'] || '✨ Sugestões para você';
      if (busca && cor) {
        tituloTexto = (t['sugestoes-titulo-busca-cor'] || '✨ {busca} na cor {cor} — nossas sugestões')
          .replace('{busca}', busca)
          .replace('{cor}', cor);
      } else if (busca) {
        tituloTexto = (t['sugestoes-titulo-busca'] || '✨ Sugestões de {busca}').replace('{busca}', busca);
      } else if (cor) {
        tituloTexto = (t['sugestoes-titulo-cor'] || '✨ Peças na cor {cor} para você').replace('{cor}', cor);
      }

      // Saudação personalizada se logado
      if (usuarioLogado && usuarioLogado.nome) {
        tituloTexto += `, ${usuarioLogado.nome.split(' ')[0]} 💕`;
      }

      titulo.innerText = tituloTexto;
      cardsSugest.innerHTML = '';

      sugestoes.forEach(produto => {
        const preco = produto.precos
          ? `A partir de R$ ${Math.min(...Object.values(produto.precos)).toFixed(2).replace('.', ',')}`
          : produto.valor;

        const pessoasVendo = Math.floor(Math.random() * 8) + 1;
        const pessoasVendoTexto = pessoasVendo === 1 ? t['pessoas-vendo-1'] : t['pessoas-vendo-n'];

        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.nome = produto.titulo;
        card.innerHTML = `
          <img class="imagem" src="${produto.imagem}" alt="${produto.titulo}">
          <p>${produto.titulo}</p>
          <p class="tamanho">${produto.tamanho}</p>
          <p class="valor1"><b>${preco}</b></p>
          <p><b>${produto.valor2 || ''}</b></p>
          <p class="pessoas-vendo">👁️ ${pessoasVendo} ${pessoasVendoTexto}</p>
        `;

        card.addEventListener('click', () => {
          produtoAtual = produto;
          if (typeof salvarUltimoVisto === 'function') salvarUltimoVisto(produto);

          document.querySelectorAll('.tamanho').forEach(tam => {
            const nomeTam = tam.innerText.trim();
            tam.classList.remove('sem-estoque', 'selecionado');
            if (produto.estoquePorTamanho && produto.estoquePorTamanho[nomeTam] === 0) {
              tam.classList.add('sem-estoque');
            }
          });

          document.getElementById('modalEstoque').innerHTML = '';
          document.getElementById('modalImg').src           = produto.imagem;
          document.getElementById('modalTitulo').innerText  = produto.titulo;
          document.getElementById('modalTamanho').innerText = produto.tamanho;
          document.getElementById('modalValor').innerText   = produto.valor;
          document.getElementById('modalPix').innerText     = produto.valor2 || '';
          document.getElementById('modalDesc').innerText    = produto.descricao3 || '';

          if (typeof renderizarCoresModal === 'function') renderizarCoresModal(produto);

          const modal = document.getElementById('modalProduto');
          modal.style.display = 'flex';
          modal.classList.remove('fechando');
          modal.classList.add('abrindo');
        });

        cardsSugest.appendChild(card);
      });

      secao.style.display = 'block';

// Remove botão antigo se existir
const btnAntigo = document.getElementById('btnExcluirRecomendacoes');
if (btnAntigo) btnAntigo.remove();
const btnRefazerAntigo = document.getElementById('btnRefazerRecomendacao');
if (btnRefazerAntigo) btnRefazerAntigo.remove();

// Cria botão "Excluir recomendações"
const btnExcluir = document.createElement('button');
btnExcluir.id = 'btnExcluirRecomendacoes';
btnExcluir.innerText = '🗑️ Excluir recomendações';
btnExcluir.style.cssText = `
  display: block;
  margin: 10px auto 40px;
  padding: 12px 28px;
  background: transparent;
  border: 1px solid #aaa;
  border-radius: 50px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s;
`;

btnExcluir.addEventListener('mouseenter', () => {
  btnExcluir.style.borderColor = '#7b1034';
  btnExcluir.style.color = '#7b1034';
});
btnExcluir.addEventListener('mouseleave', () => {
  btnExcluir.style.borderColor = '#aaa';
  btnExcluir.style.color = '#666';
});

btnExcluir.addEventListener('click', () => {
  // Apaga do localStorage
  localStorage.removeItem(chaveB);
  localStorage.removeItem(chaveC);

  // Esconde a seção de sugestões
  secao.style.display = 'none';
  cardsSugest.innerHTML = '';
  btnExcluir.remove();

  // Cria botão "Fazer a recomendação"
  const btnRefazer = document.createElement('button');
  btnRefazer.id = 'btnRefazerRecomendacao';
  btnRefazer.innerText = '✨ Fazer a recomendação';
  btnRefazer.style.cssText = `
    display: block;
    margin: 20px auto;
    padding: 14px 32px;
    background: #1a1a1a;
    border: none;
    border-radius: 50px;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s;
  `;

  btnRefazer.addEventListener('mouseenter', () => {
    btnRefazer.style.background = '#7b1034';
    btnRefazer.style.transform = 'translateY(-2px)';
  });
  btnRefazer.addEventListener('mouseleave', () => {
    btnRefazer.style.background = '#1a1a1a';
    btnRefazer.style.transform = 'translateY(0)';
  });

  // Abre o formulário da splash novamente
  btnRefazer.addEventListener('click', () => {
    // Recria o splash só com a fase 2
    const splashNovo = document.createElement('div');
    splashNovo.id = 'splashRefazer';
    splashNovo.style.cssText = `
      position: fixed;
      inset: 0;
      background: #C9ADAC;
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.4s ease;
    `;

    splashNovo.innerHTML = `
      <div style="
        background: #1a1a1a;
        color: #fff;
        border-radius: 24px;
        padding: 52px 44px;
        width: 90%;
        max-width: 500px;
        text-align: center;
        box-shadow: 0 40px 100px rgba(0,0,0,0.35);
      ">
        <p style="font-size:10px;letter-spacing:6px;color:#c9a96e;margin-bottom:14px;text-transform:uppercase;">
          ✦ &nbsp; PERSONALIZAÇÃO &nbsp; ✦
        </p>
        <h2 style="font-family:'Playfair Display',serif;font-size:17px;font-weight:300;line-height:1.7;color:#f0f0f0;margin-bottom:36px;">
          Atualize suas preferências para novas sugestões
        </h2>

        <div style="text-align:left;margin-bottom:22px;">
          <label style="display:block;font-size:11px;letter-spacing:2.5px;color:#c9a96e;margin-bottom:10px;text-transform:uppercase;">
            O que você procura?
          </label>
          <input id="refazerBusca" type="text" placeholder="Ex: camisa, calça, vestido..."
            style="width:100%;padding:15px 20px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:12px;color:#fff;font-size:15px;font-family:'Poppins',sans-serif;outline:none;">
        </div>

        <div style="text-align:left;margin-bottom:22px;">
          <label style="display:block;font-size:11px;letter-spacing:2.5px;color:#c9a96e;margin-bottom:10px;text-transform:uppercase;">
            Qual sua cor de preferência?
          </label>
          <input id="refazerCor" type="text" placeholder="Ex: preto, rosa, azul..."
            style="width:100%;padding:15px 20px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:12px;color:#fff;font-size:15px;font-family:'Poppins',sans-serif;outline:none;">
        </div>

        <div style="display:flex;flex-direction:column;gap:14px;margin-top:32px;">
          <button id="refazerConfirmar" style="
            padding:16px;background:#7b1034;color:#fff;border:none;
            border-radius:50px;font-size:15px;font-family:'Poppins',sans-serif;
            cursor:pointer;transition:background 0.3s;
          ">Ver minhas sugestões ✨</button>

          <button id="refazerCancelar" style="
            padding:12px;background:transparent;color:rgba(255,255,255,0.35);
            border:none;font-size:13px;cursor:pointer;font-family:'Poppins',sans-serif;
          ">Cancelar</button>
        </div>
      </div>
    `;

    document.body.appendChild(splashNovo);
    document.body.classList.add('no-scroll');

    requestAnimationFrame(() => {
      splashNovo.style.opacity = '1';
    });

    // Confirmar novas preferências
    document.getElementById('refazerConfirmar').addEventListener('click', () => {
      const novaBusca = document.getElementById('refazerBusca').value.trim();
      const novaCor   = document.getElementById('refazerCor').value.trim();

      localStorage.setItem(chaveVisita, '1');
      if (novaBusca || novaCor) {
        localStorage.setItem(chaveB, novaBusca);
        localStorage.setItem(chaveC, novaCor);
      }

      splashNovo.style.opacity = '0';
      document.body.classList.remove('no-scroll');
      setTimeout(() => {
        splashNovo.remove();
        btnRefazer.remove();
        if (novaBusca || novaCor) aplicarSugestoes(novaBusca, novaCor);
      }, 400);
    });

    // Cancelar
    document.getElementById('refazerCancelar').addEventListener('click', () => {
      splashNovo.style.opacity = '0';
      document.body.classList.remove('no-scroll');
      setTimeout(() => splashNovo.remove(), 400);
    });
  });

  // Insere botão "Fazer a recomendação" onde estava a seção
  secao.parentNode.insertBefore(btnRefazer, secao.nextSibling);
});

// Insere botão "Excluir" abaixo das sugestões
secao.parentNode.insertBefore(btnExcluir, secao.nextSibling);
    };

    tentarAplicar();
  }

})();// fim do IIFE do splash

// VOLTAR AO TOPO
window.addEventListener('scroll', function () {
  const btnTopo = document.getElementById('btnTopo');
  if (window.scrollY > 300) {
    btnTopo.classList.add('visivel');
  } else {
    btnTopo.classList.remove('visivel');
  }
});

document.getElementById('btnTopo').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.body.classList.add("no-scroll");
document.body.classList.remove("no-scroll");

// CALCULADORA MODAL
document.getElementById("abrirCalc").addEventListener("click", () => {
  document.getElementById("modalCalc").classList.remove("hidden");
});

document.getElementById("fecharCalc").addEventListener("click", () => {
  document.getElementById("modalCalc").classList.add("hidden");
});

// ABAS DA CALCULADORA
document.querySelectorAll(".aba").forEach(aba => {
  aba.addEventListener("click", function () {
    document.querySelectorAll(".aba").forEach(a => a.classList.remove("ativa"));
    document.querySelectorAll(".aba-conteudo").forEach(c => c.classList.add("hidden"));
    this.classList.add("ativa");
    document.getElementById("aba-" + this.dataset.aba).classList.remove("hidden");
  });
});

// FUNÇÃO DE CALCULAR TAMANHO
function calcularTamanho(busto, cintura, quadril) {
  let maior = Math.max(busto, cintura, quadril);
  if (maior <= 96) return "G (46)";
  if (maior <= 100) return "G1 (48)";
  if (maior <= 104) return "G3 (50)";
  if (maior <= 108) return "G5 (52)";
  if (maior <= 114) return "G7 (54)";
  return "G9 (56+)";
}

// CALCULADORA TRADICIONAL
let calcValor = "0";
let calcOperador = null;
let calcAnterior = null;
let calcNovoNumero = false;

function calcAtualizar() {
  document.getElementById("calc-display").innerText = calcValor;
}

function calcNum(n) {
  if (calcNovoNumero) {
    calcValor = n === "." ? "0." : n;
    calcNovoNumero = false;
  } else {
    if (n === "." && calcValor.includes(".")) return;
    calcValor = calcValor === "0" && n !== "." ? n : calcValor + n;
  }
  calcAtualizar();
}

function calcOp(op) {
  calcAnterior = parseFloat(calcValor);
  calcOperador = op;
  calcNovoNumero = true;
  const simbolos = { "+": "+", "-": "−", "*": "×", "/": "÷" };
  document.getElementById("calc-historico").innerText = `${calcAnterior} ${simbolos[op]}`;
}

function calcIgual() {
  if (calcOperador === null || calcAnterior === null) return;
  let atual = parseFloat(calcValor);
  let resultado;
  if (calcOperador === "+") resultado = calcAnterior + atual;
  if (calcOperador === "-") resultado = calcAnterior - atual;
  if (calcOperador === "*") resultado = calcAnterior * atual;
  if (calcOperador === "/") {
    if (atual === 0) {
      calcValor = "Erro";
      calcAtualizar();
      return;
    }
    resultado = calcAnterior / atual;
  }
  const simbolos = { "+": "+", "-": "−", "*": "×", "/": "÷" };
  document.getElementById("calc-historico").innerText =
    `${calcAnterior} ${simbolos[calcOperador]} ${atual} =`;
  calcValor = parseFloat(resultado.toFixed(10)).toString();
  calcOperador = null;
  calcAnterior = null;
  calcNovoNumero = true;
  calcAtualizar();
}

function calcLimpar() {
  calcValor = "0";
  calcOperador = null;
  calcAnterior = null;
  calcNovoNumero = false;
  document.getElementById("calc-historico").innerText = "";
  calcAtualizar();
}

function calcApagarUltimo() {
  if (calcValor.length === 1) {
    calcValor = "0";
  } else {
    calcValor = calcValor.slice(0, -1);
  }
  calcAtualizar();
}

function calcPorcento() {
  calcValor = (parseFloat(calcValor) / 100).toString();
  calcAtualizar();
}

// ABA MEDIDAS
document.getElementById("calcMed").addEventListener("click", () => {
  let busto = parseFloat(document.getElementById("med-busto").value);
  let cintura = parseFloat(document.getElementById("med-cintura").value);
  let quadril = parseFloat(document.getElementById("med-quadril").value);
  let altura = parseFloat(document.getElementById("med-altura").value);
  let peso = parseFloat(document.getElementById("med-peso").value);

  if (!busto || !cintura || !quadril || !altura || !peso) {
    document.getElementById("resultadoMed").innerText = "⚠️ Preencha todos os campos!";
    return;
  }

  let tamanho = calcularTamanho(busto, cintura, quadril);
  let dica = "";
  let imc = peso / ((altura / 100) ** 2);

  if (imc < 25) dica = "💡 Dica: prefira tecidos mais justos!";
  else if (imc < 30) dica = "💡 Dica: tecidos com elastano ficam ótimos!";
  else dica = "💡 Dica: prefira tecidos fluidos e confortáveis!";

  document.getElementById("resultadoMed").innerHTML = `✅ Seu tamanho: ${tamanho}<br><small>${dica}</small>`;
});

// ANIMAÇÕES DE SCROLL
const elementos = document.querySelectorAll(".animar-avaliacao");

function animarAoScroll() {
  const alturaTela = window.innerHeight;
  elementos.forEach((el) => {
    const posicao = el.getBoundingClientRect().top;
    if (posicao < alturaTela - 100) el.classList.add("ativo");
  });
}

const cards = document.querySelectorAll(".card-animado");

function animarCards() {
  const alturaTela = window.innerHeight;
  cards.forEach((card) => {
    const posicao = card.getBoundingClientRect().top;
    if (posicao < alturaTela - 100) card.classList.add("ativo");
  });
}

window.addEventListener("scroll", animarCards);
window.addEventListener("load", animarCards);
window.addEventListener("scroll", animarAoScroll);
window.addEventListener("load", animarAoScroll);

// MENU HAMBURGUER
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.getElementById("navList");

  menuToggle.addEventListener("click", () => {
    if (navList.classList.contains("active")) {
      navList.classList.add("closing");
      setTimeout(() => {
        navList.classList.remove("active");
        navList.classList.remove("closing");
      }, 900);
    } else {
      navList.classList.remove("closing");
      void navList.offsetWidth;
      navList.classList.add("active");

      if (window.innerWidth <= 999) {
        const rect = menuToggle.getBoundingClientRect();
        navList.style.top = (rect.bottom + window.scrollY) + "px";
        navList.style.left = "auto";
        navList.style.right = "0";
      } else {
        navList.style.top = "";
        navList.style.left = "";
        navList.style.right = "";
      }
    }

    menuToggle.classList.toggle("active");
    const textoLogin = document.getElementById("textoLogin");
    let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuarioLogado) {
      textoLogin.innerHTML = `<a href="#" id="logoutBtn">Sair da conta</a> / <a href="#" id="conta"> Minha conta </a>`;
      document.getElementById("conta").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "conta.html";
      });
      document.getElementById("logoutBtn").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("usuarioLogado");
        window.location.href = "senha.html";
      });
    } else {
      textoLogin.innerHTML = `
        <a href="cadastro.html">Criar conta</a> /
        <a href="senha.html">Iniciar sessão</a>
      `;
    }
  });
});

// MAPA DE CORES
const mapaCorCSS = {
  "preto":      "#1a1a1a",
  "branco":     "#f0f0f0",
  "rosa":       "#f48fb1",
  "roxo":       "#7e57c2",
  "vinho":      "#7b1034",
  "azul":       "#1565c0",
  "azul claro": "#64b5f6",
  "azul escuro":"#0d1b4b",
  "bege":       "#d7c4a3",
  "vermelho":   "#e53935",
  "verde":      "#43a047",
  "amarelo":    "#fdd835",
  "cinza":      "#9e9e9e",
  "caramelo":   "#b5651d",
};

const coresTextoEscuro = ["branco", "bege", "azul claro", "amarelo", "rosa"];

function renderizarCoresModal(produto) {
  const coresModal = document.getElementById("coresModal");
  if (!coresModal) return;
  coresModal.innerHTML = "";
  if (!produto.cores || produto.cores.length === 0) return;

  produto.cores.forEach(cor => {
    const span = document.createElement("span");
    span.classList.add("cor");
    span.dataset.cor = cor;

    const corCSS = mapaCorCSS[cor] || cor;
    const corTexto = coresTextoEscuro.includes(cor) ? "#333" : "#fff";

    span.style.cssText = `
      background-color: ${corCSS};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid #ccc;
      margin: 4px;
      overflow: hidden;
      flex-shrink: 0;
    `;

    span.innerHTML = `<span style="
      font-size: 8px;
      font-weight: 700;
      color: ${corTexto};
      text-align: center;
      line-height: 1.1;
      word-break: break-word;
      padding: 3px;
      pointer-events: none;
    ">${cor}</span>`;

    span.title = cor;

    span.addEventListener("click", () => {
      document.querySelectorAll("#coresModal .cor").forEach(c => {
        c.classList.remove("selecionado");
        c.style.border = "2px solid #ccc";
        c.style.transform = "scale(1)";
      });
      span.classList.add("selecionado");
      span.style.border = "3px solid #333";
      span.style.transform = "scale(1.15)";
    });

    coresModal.appendChild(span);
  });
}




// PRODUTOS
let Roupas = [
  {
    imagem: "/img/imagemshortbasico.png",
    titulo: "SHORTS LEGGING",
    categoria: "Roupas basicas",
    tamanho: "tam:46-60",
    valor: "R$50,00",
    valor2: "R$45,00 no pix",
    descricao3: "",
    cores: ["preto", "marinho"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 0, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/camisarosa.png",
    titulo: "CAMISETA ROSA",
    categoria: "Roupas basicas",
    tamanho: "tam:46-60",
    valor: "R$50,00",
    valor2: "R$45,00 no pix",
    descricao3: "",
    cores: ["rosa"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 8, "G9": 10 }
  },
  {
    imagem: "/img/bodybranco.png",
    titulo: "BODY BRANCO",
    categoria: "Roupas basicas",
    tamanho: "tam:46-60",
    valor: "R$50,00",
    valor2: "R$45,00 no pix",
    descricao3: "",
    cores: ["branco"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 8, "G9": 10 }
  },
  {
    imagem: "/img/camisa social azul.png",
    titulo: "CAMISA SOCIAL AZUL CLARO",
    categoria: "Camisas sociais/basicas",
    tamanho: "tam:46-60",
    valor: "R$50,00",
    valor2: "R$45,00 no pix",
    descricao3: "",
    cores: ["azul claro"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/camisa social preta.png",
    titulo: "CAMISA BASICA PRETA",
    categoria: "Camisas sociais/basicas",
    tamanho: "tam:46-60",
    valor: "R$50,00",
    valor2: "R$45,00 no pix",
    descricao3: "",
    cores: ["preto"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/camisa social manga longa preta.png",
    titulo: "CAMISA MANGA LONGA PRETA",
    categoria: "Camisas sociais/basicas",
    tamanho: "tam:46-60",
    valor: "R$50,00",
    valor2: "R$45,00 no pix",
    descricao3: "",
    cores: ["preto"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/camisa social azul escuro.png",
    titulo: "CAMISA SOCIAL AZUL ESCURO",
    categoria: "Camisas sociais/basicas",
    tamanho: "tam:46-60",
    valor: "R$50,00",
    valor2: "R$45,00 no pix",
    descricao3: "",
    cores: ["azul escuro"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/camisa social branca.png",
    titulo: "CAMISA BASICA BRANCA",
    categoria: "Camisas sociais/basicas",
    tamanho: "tam:46-60",
    valor: "R$50,00",
    valor2: "R$45,00 no pix",
    descricao3: "",
    cores: ["branco"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/camisa social amarela.png",
    titulo: "CAMISA SOCIAL AMARELA",
    categoria: "Camisas sociais/basicas",
    tamanho: "tam:46-60",
    valor: "R$50,00",
    valor2: "R$45,00 no pix",
    descricao3: "",
    cores: ["amarelo"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/camisa social vermelha.png",
    titulo: "CAMISA SOCIAL VERMLHA",
    categoria: "Camisas sociais/basicas",
    tamanho: "tam:46-60",
    valor: "R$50,00",
    valor2: "R$45,00 no pix",
    descricao3: "",
    cores: ["vermelho"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/camisa social vinho.png",
    titulo: "CAMISA BASICA VINHO",
    categoria: "Camisas sociais/basicas",
    tamanho: "tam:46-60",
    valor: "R$50,00",
    valor2: "R$45,00 no pix",
    descricao3: "",
    cores: ["vinho"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/imgvestidorecortado.jfif",
    titulo: "VESTIDO ROSA",
    categoria: "Vestidos",
    tamanho: "tam:46-60",
    valor: "R$108,00",
    valor2: "R$100,00 no pix",
    descricao3: "Ou 3x de 36,00",
    cores: ["rosa"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 0, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/vestido roxo.png",
    titulo: "VESTIDO ROXO",
    categoria: "Vestidos",
    tamanho: "tam:46-60",
    valor: "R$108,00",
    valor2: "R$100,00 no pix",
    descricao3: "",
    cores: ["roxo"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 8, "G9": 10 }
  },
  {
    imagem: "/img/vestido preto.png",
    titulo: "VESTIDO PRETO",
    categoria: "Vestidos",
    tamanho: "tam:46-60",
    valor: "R$108,00",
    valor2: "R$100,00 no pix",
    descricao3: "",
    cores: ["preto"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 8, "G9": 10 }
  },
  {
    imagem: "/img/imagemnaosei.jfif",
    titulo: "CONJUNTO",
    categoria: "Conjuntos e peças de festas",
    tamanho: "tam:46-60",
    valor: "R$120,00",
    valor2: " ",
    descricao3: " ",
    cores: ["preto"],
    precos: { "G": 120, "G1": 145, "G3": 165, "G5": 190, "G7": 210, "G9": 250 },
    estoquePorTamanho: { "G": 3, "G1": 0, "G3": 6, "G5": 2, "G7": 4, "G9": 1 }
  },
  {
    imagem: "/img/conjunto e festa preto.png",
    titulo: "PEÇA DE FESTA PRETO",
    categoria: "Conjuntos e peças de festas",
    tamanho: "tam:46-60",
    valor: "R$120,00",
    valor2: "",
    descricao3: "",
    cores: ["preto"],
    precos: { "G": 120, "G1": 145, "G3": 165, "G5": 190, "G7": 210, "G9": 250 },
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 0, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/conjunto e festa vinho.png",
    titulo: "PEÇA DE FESTA VINHO",
    categoria: "Conjuntos e peças de festas",
    tamanho: "tam:46-60",
    valor: "R$120,00",
    valor2: "",
    descricao3: "",
    cores: ["vinho"],
    precos: { "G": 120, "G1": 145, "G3": 165, "G5": 190, "G7": 210, "G9": 250 },
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/imgcalcarecortada.jfif",
    titulo: "CALÇA ALFAITERIA",
    categoria: "Calças",
    tamanho: "tam:46-60",
    valor: "R$120,00",
    valor2: " ",
    descricao3: " ",
    cores: ["preto"],
    precos: { "G": 120, "G1": 135, "G3": 150, "G5": 160, "G7": 170, "G9": 180 },
    estoquePorTamanho: { "G": 7, "G1": 3, "G3": 0, "G5": 5, "G7": 2, "G9": 4 }
  },
  {
    imagem: "/img/calca clara.png",
    titulo: "CALÇA JEANS CLARA",
    categoria: "Calças",
    tamanho: "tam:46-60",
    valor: "R$120,00",
    valor2: "",
    descricao3: "",
    cores: ["azul claro"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/calca canela.png",
    titulo: "CALÇA JEANS ATÉ A CANELA",
    categoria: "Calças",
    tamanho: "tam:46-60",
    valor: "R$120,00",
    valor2: "",
    descricao3: "",
    cores: ["azul escuro"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 0, "G5": 8, "G7": 1, "G9": 10 }
  },
  {
    imagem: "/img/calca escura.png",
    titulo: "CALÇA JEANS ESCURA",
    categoria: "Calças",
    tamanho: "tam:46-60",
    valor: "R$120,00",
    valor2: "",
    descricao3: "",
    cores: ["azul escuro"],
    estoquePorTamanho: { "G": 5, "G1": 2, "G3": 10, "G5": 8, "G7": 8, "G9": 10 }
  },
  {
    imagem: "/img/vestidovinho.jfif",
    titulo: "VESTIDO VINHO",
    categoria: "Conjuntos e peças de festas",
    tamanho: "tam:46-60",
    valor: "R$120,00",
    valor2: " R$100,00 no pix ",
    descricao3: " Ou 3x de 36,00 ",
    cores: ["vinho"],
    estoquePorTamanho: { "G": 4, "G1": 1, "G3": 9, "G5": 0, "G7": 3, "G9": 6 }
  }
];

// PESSOAS VENDO
function simularPessoasVendo() {
  return Math.floor(Math.random() * 8) + 1;
}

// ÚLTIMOS VISTOS
function salvarUltimoVisto(produto) {
  let vistos = JSON.parse(localStorage.getItem("ultimosVistos")) || [];
  vistos = vistos.filter(p => p.titulo !== produto.titulo);
  vistos.unshift({ titulo: produto.titulo, imagem: produto.imagem, valor: produto.valor });
  if (vistos.length > 4) vistos = vistos.slice(0, 4);
  localStorage.setItem("ultimosVistos", JSON.stringify(vistos));
  renderUltimosVistos();
}

function renderUltimosVistos() {
  let vistos = JSON.parse(localStorage.getItem("ultimosVistos")) || [];
  const container = document.getElementById("ultimosVistos");
  if (!container) return;

  if (vistos.length === 0) {
    container.style.display = "none";
    return;
  }

  container.style.display = "block";
  container.innerHTML = `
    <h2>👀 Últimos vistos</h2>
    <div class="vistos-acoes">
      <label class="selecionar-todos">
        <input type="checkbox" id="selecionarTodos"> Selecionar todos
      </label>
      <button id="limparVistos">🗑️ Limpar selecionados</button>
    </div>
    <div class="vistos-grid">
      ${vistos.map((p, i) => `
        <div class="card-visto" data-nome="${p.titulo}" data-index="${i}">
          <input type="checkbox" class="check-visto" data-index="${i}">
          <img src="${p.imagem}" alt="${p.titulo}">
          <p>${p.titulo}</p>
          <p><b>${p.valor}</b></p>
        </div>
      `).join("")}
    </div>
  `;

  document.getElementById("selecionarTodos").addEventListener("change", function () {
    document.querySelectorAll(".check-visto").forEach(cb => {
      cb.checked = this.checked;
      cb.closest(".card-visto").classList.toggle("selecionado-visto", this.checked);
    });
  });

  document.querySelectorAll(".check-visto").forEach(cb => {
    cb.addEventListener("change", function () {
      this.closest(".card-visto").classList.toggle("selecionado-visto", this.checked);
      let todos = document.querySelectorAll(".check-visto");
      let marcados = document.querySelectorAll(".check-visto:checked");
      document.getElementById("selecionarTodos").checked = todos.length === marcados.length;
    });
  });

  document.getElementById("limparVistos").addEventListener("click", () => {
    let selecionados = [...document.querySelectorAll(".check-visto:checked")]
      .map(cb => parseInt(cb.dataset.index));
    if (selecionados.length === 0) {
      alert("Selecione pelo menos um produto!");
      return;
    }
    vistos = vistos.filter((_, i) => !selecionados.includes(i));
    localStorage.setItem("ultimosVistos", JSON.stringify(vistos));
    renderUltimosVistos();
  });

  container.querySelectorAll(".card-visto").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.type === "checkbox") return;
      let nome = card.dataset.nome;
      let produto = Roupas.find(p => p.titulo === nome);
      if (!produto) return;

      produtoAtual = produto;
      modalImg.src = produto.imagem;
      modalTitulo.innerText = produto.titulo;
      modalTamanho.innerText = produto.tamanho;
      modalValor.innerText = produto.valor;
      modalPix.innerText = produto.valor2;
      modalDesc.innerText = produto.descricao3;

      document.querySelectorAll('.tamanho').forEach(tam => {
        let nomeTamanho = tam.innerText.trim();
        tam.classList.remove('sem-estoque', 'selecionado');
        if (produto.estoquePorTamanho && produto.estoquePorTamanho[nomeTamanho] === 0) {
          tam.classList.add('sem-estoque');
        }
      });

      renderizarCoresModal(produto);
      document.getElementById("modalEstoque").innerHTML = "";
      modal.style.display = "flex";
      modal.classList.remove("fechando");
      modal.classList.add("abrindo");
    });
  });
}

// DISPLAY DE ROUPAS
let cardeContainer = document.querySelector(".card-container");
let searchInput = document.querySelector("#searchInput");
const resultadoBusca = document.getElementById("resultadoBusca");
const topoSite = document.getElementById("topoSite");

let displayRoupas = Roupas => {
  cardeContainer.innerHTML = "";

  if (Roupas.length === 0) {
    cardeContainer.innerHTML = `<p class="produton">${traduzir('produto-nao-encontrado')}</p>`;
    return;
  }

  const categorias = [...new Set(Roupas.map(p => p.categoria))];
  const nomes = {
    camisa: "Camisas", calca: "Calças", conjunto: "Conjuntos",
    macacao: "Macacões", vestido: "Vestidos"
  };

  categorias.forEach(categoria => {
    const produtosDaCategoria = Roupas.filter(p => p.categoria === categoria);
    cardeContainer.innerHTML += `<h2 class="titulo-categoria">${nomes[categoria] || categoria}</h2>`;

    produtosDaCategoria.forEach(produto => {
      let precoHTML = produto.precos
        ? `<p class="valor1"><b>A partir de R$ ${Math.min(...Object.values(produto.precos)).toFixed(2).replace(".", ",")}</b></p>`
        : `<p class="valor1"><b>${produto.valor}</b></p>`;

      const t = traducoes[localStorage.getItem('idioma') || 'pt'] || traducoes.pt;
      let estoqueHTML = produto.estoque === 0 ? `<p class="estoque esgotado">${traduzir('tamanho-esgotado')}</p>` : "";
      let pessoasVendo = simularPessoasVendo();
      let pessoasHTML = `<p class="pessoas-vendo">👁️ ${pessoasVendo} ${pessoasVendo === 1 ? t['pessoas-vendo-1'] : t['pessoas-vendo-n']}</p>`;

      cardeContainer.innerHTML += `
        <div class="card" data-nome="${produto.titulo}">
          <img class="imagem" src="${produto.imagem}" alt="${produto.titulo}">
          <p>${produto.titulo}</p>
          <p class="tamanho">${produto.tamanho}</p>
          ${precoHTML}
          <p><b>${produto.valor2}</b></p>
          <p>${produto.descricao3}</p>
          ${estoqueHTML}
          ${pessoasHTML}
        </div>
      `;
    });
  });
};

// BUSCA
searchInput.addEventListener("keyup", (e) => {
  let texto = e.target.value.trim();
  let search = Roupas.filter(i => i.titulo.toLowerCase().includes(texto.toLowerCase()));

  if (texto !== "") {
    if (resultadoBusca) {
      if (search.length > 0) {
        resultadoBusca.innerHTML = `
          ${search.length} resultado${search.length !== 1 ? "s" : ""} encontrado${search.length !== 1 ? "s" : ""} para:
          <span>"${texto}"</span>
          — Produto encontrado em <b>"Catálogo de Roupas"</b>
          <button id="btnVerRoupas" style="
            background: #23232e;
            color: white;
            border: none;
            padding: 5px 14px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 13px;
            margin-left: 8px;
          ">Veja mais</button>
        `;

        document.getElementById("btnVerRoupas").addEventListener("click", () => {
          abrirTelaRoupasFiltrada(texto);
        });

      } else {
        resultadoBusca.innerHTML = `
          0 resultados encontrados para: <span>"${texto}"</span>
        `;
      }

      resultadoBusca.style.display = "block";
    }

    // Esconde o topo mas NÃO mexe nos cards da página principal
    if (topoSite) topoSite.style.setProperty("display", "none", "important");

  } else {
    if (resultadoBusca) {
      resultadoBusca.innerHTML = "";
      resultadoBusca.style.display = "none";
    }
    if (topoSite) topoSite.style.display = "block";
  }
});
// MODAL
let modal = document.getElementById("modalProduto");
let modalImg = document.getElementById("modalImg");
let modalTitulo = document.getElementById("modalTitulo");
let modalTamanho = document.getElementById("modalTamanho");
let modalValor = document.getElementById("modalValor");
let modalPix = document.getElementById("modalPix");
let modalDesc = document.getElementById("modalDesc");
let fechar = document.getElementById("fecharModal");
let modalContent = document.querySelector(".modal-content");

// CARROSSEL
const track = document.getElementById("carrossel-track");
let indice = 0;
let intervaloCarrossel;

function montarCarrossel() {
  if (!track) return;
  track.innerHTML = "";
  const dots = document.getElementById("carrossel-dots");
  dots.innerHTML = "";

  Roupas.forEach((produto, i) => {
    let precoExibido = produto.precos
      ? `A partir de R$ ${Math.min(...Object.values(produto.precos)).toFixed(2).replace(".", ",")}`
      : produto.valor;

    track.innerHTML += `
      <div class="card-produto ${i === 0 ? 'ativo' : ''}" data-index="${i}">
        <img src="${produto.imagem}" alt="${produto.titulo}">
        <h3>${produto.titulo}</h3>
        <p class="preco">${precoExibido}</p>
        <p class="pix-preco">${produto.valor2 || ""}</p>
        <button class="btn-card" data-nome="${produto.titulo}">Ver produto</button>
      </div>
    `;
    dots.innerHTML += `<div class="dot ${i === 0 ? 'ativo' : ''}" onclick="irPara(${i})"></div>`;
  });

  document.querySelectorAll(".btn-card").forEach(btn => {
    btn.addEventListener("click", () => {
      let nome = btn.getAttribute("data-nome");
      let produto = Roupas.find(p => p.titulo === nome);
      if (!produto) return;

      produtoAtual = produto;
      salvarUltimoVisto(produto);
      modalImg.src = produto.imagem;
      modalTitulo.innerText = produto.titulo;
      modalTamanho.innerText = produto.tamanho;
      modalValor.innerText = produto.valor;
      modalPix.innerText = produto.valor2;
      modalDesc.innerText = produto.descricao3;

      document.querySelectorAll('.tamanho').forEach(tam => {
        let nomeTamanho = tam.innerText.trim();
        tam.classList.remove('sem-estoque', 'selecionado');
        if (produto.estoquePorTamanho && produto.estoquePorTamanho[nomeTamanho] === 0) {
          tam.classList.add('sem-estoque');
        }
      });

      document.getElementById("modalEstoque").innerHTML = "";
      renderizarCoresModal(produto);
      modal.style.display = "flex";
      modal.classList.remove("fechando");
      modal.classList.add("abrindo");
    });
  });

  atualizarCarrossel();
  iniciarCarrosselAutomatico();
}

function atualizarCarrossel() {
  const cards = document.querySelectorAll(".card-produto");
  const dots = document.querySelectorAll(".dot");
  const cardWidth = 220 + 20; // largura + gap

  cards.forEach((card, i) => {
    card.classList.remove("ativo");
    if (i === indice) card.classList.add("ativo");
  });

  dots.forEach((dot, i) => {
    dot.classList.remove("ativo");
    if (i === indice) dot.classList.add("ativo");
  });

  const totalCards = cards.length;
  const trackWidth = totalCards * cardWidth - 20; // largura total do track
  const containerWidth = track.parentElement.offsetWidth; // largura do .carrossel-container

  // O track começa centralizado pelo justify-content:center
  // Então o offset inicial já tem (containerWidth - trackWidth) / 2 de margem à esquerda
  const margemInicial = (containerWidth - trackWidth) / 2;

  // Centro do card ativo em relação ao início do track
  const centroCard = indice * cardWidth + cardWidth / 2;

  // Queremos que o centro do card fique no centro do container
  const offset = centroCard - containerWidth / 2;

  // Só desloca se o track for maior que o container (evita deslocar desnecessariamente)
  track.style.transform = `translateX(-${Math.max(0, offset)}px)`;
}

function mover(direcao) {
  clearInterval(intervaloCarrossel);
  const cards = document.querySelectorAll(".card-produto");
  indice += direcao;
  if (indice < 0) indice = cards.length - 1;
  if (indice >= cards.length) indice = 0;
  atualizarCarrossel();
  setTimeout(() => iniciarCarrosselAutomatico(), 3000);
}

function irPara(i) {
  clearInterval(intervaloCarrossel);
  indice = i;
  atualizarCarrossel();
  setTimeout(() => iniciarCarrosselAutomatico(), 3000);
}

function iniciarCarrosselAutomatico() {
  clearInterval(intervaloCarrossel);
  intervaloCarrossel = setInterval(() => {
    const cards = document.querySelectorAll(".card-produto");
    indice++;
    if (indice >= cards.length) indice = 0;
    atualizarCarrossel();
  }, 3000);
}

// LOAD PRINCIPAL
window.addEventListener("load", () => {
  displayRoupas(Roupas);
  atualizarContador();
  renderCarrinho();
  renderUltimosVistos();
  montarCarrossel();

  setInterval(() => {
    document.querySelectorAll(".pessoas-vendo").forEach(el => {
      const t = traducoes[localStorage.getItem('idioma') || 'pt'] || traducoes.pt;
      let novo = simularPessoasVendo();
      el.textContent = `👁️ ${novo} ${novo === 1 ? t['pessoas-vendo-1'] : t['pessoas-vendo-n']}`;
    });
  }, 10000);

  document.querySelectorAll(".menu-filtro").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    // Fecha o menu hambúrguer se estiver aberto
    const navList = document.getElementById("navList");
    if (navList.classList.contains("active")) {
      navList.classList.add("closing");
      setTimeout(() => {
        navList.classList.remove("active");
        navList.classList.remove("closing");
      }, 900);
      document.getElementById("menuToggle").classList.remove("active");
    }

    const categoria = item.dataset.cat;

    // Abre o catálogo já filtrado pela categoria
    _montarBuscaInterna('');
    _renderizarCardsTela('', categoria);
    _abrirTela();
  });
});
});
document.querySelectorAll('.btn-ver-produto').forEach(btn => {
  btn.addEventListener('click', () => {
    let nome = btn.dataset.nome;
    let produto = Roupas.find(p => p.titulo === nome);
    if (!produto) return;

    produtoAtual = produto;
    salvarUltimoVisto(produto);

    modalImg.src = produto.imagem;
    modalTitulo.innerText = produto.titulo;
    modalTamanho.innerText = produto.tamanho;
    modalValor.innerText = produto.valor;
    modalPix.innerText = produto.valor2;
    modalDesc.innerText = produto.descricao3;

    document.querySelectorAll('.tamanho').forEach(tam => {
      let nomeTamanho = tam.innerText.trim();
      tam.classList.remove('sem-estoque', 'selecionado');
      if (produto.estoquePorTamanho && produto.estoquePorTamanho[nomeTamanho] === 0) {
        tam.classList.add('sem-estoque');
      }
    });

    document.getElementById('modalEstoque').innerHTML = '';
    renderizarCoresModal(produto);

    modal.style.display = 'flex';
    modal.classList.remove('fechando');
    modal.classList.add('abrindo');
  });
});
// CLIQUE NO CARD
cardeContainer.addEventListener("click", (e) => {
  let card = e.target.closest(".card");
  if (!card) return;

  let nome = card.dataset.nome;
  let produto = Roupas.find(p => p.titulo === nome);

  produtoAtual = produto;
  salvarUltimoVisto(produto);

  document.querySelectorAll('.tamanho').forEach(tam => {
    let nomeTamanho = tam.innerText.trim();
    tam.classList.remove('sem-estoque', 'selecionado');
    if (produto.estoquePorTamanho && produto.estoquePorTamanho[nomeTamanho] === 0) {
      tam.classList.add('sem-estoque');
    }
  });

  document.getElementById("modalEstoque").innerHTML = "";
  modalImg.src = produto.imagem;
  modalTitulo.innerText = produto.titulo;
  modalTamanho.innerText = produto.tamanho;
  modalValor.innerText = produto.valor;
  modalPix.innerText = produto.valor2;
  modalDesc.innerText = produto.descricao3;
  renderizarCoresModal(produto);

  modal.style.display = "flex";
  modal.classList.remove("fechando");
  modal.classList.add("abrindo");
});

function fecharModalAnimado() {
  modal.classList.remove("abrindo");
  modal.classList.add("fechando");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fechando");
  }, 1000);
}

fechar.onclick = fecharModalAnimado;

modal.addEventListener("click", (e) => {
  if (e.target === modal) fecharModalAnimado();
});

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

// TAMANHOS
document.querySelectorAll('.tamanho').forEach(tam => {
  tam.addEventListener('click', () => {
    if (tam.classList.contains('sem-estoque')) return;
    document.querySelectorAll('.tamanho').forEach(t => t.classList.remove('selecionado'));
    tam.classList.add('selecionado');

    if (!produtoAtual) return;

    if (produtoAtual.precos) {
      let tamanhoSelecionado = tam.innerText.trim();
      let preco = produtoAtual.precos[tamanhoSelecionado];
      if (preco) modalValor.innerText = "R$ " + preco.toFixed(2).replace(".", ",");
    }

    if (produtoAtual.estoquePorTamanho) {
      let tamanhoSelecionado = tam.innerText.trim();
      let estoque = produtoAtual.estoquePorTamanho[tamanhoSelecionado];
      const modalEstoque = document.getElementById("modalEstoque");

      if (estoque === 0) {
        modalEstoque.innerHTML = `<p class="estoque esgotado">${traduzir('tamanho-esgotado')}</p>`;
      } else if (estoque <= 3) {
        modalEstoque.innerHTML = `<p class="estoque urgente">${traduzir('estoque-restam-apenas', { quantidade: estoque })}</p>`;
      } else {
        modalEstoque.innerHTML = `<p class="estoque disponivel">${traduzir('estoque-disponivel', { quantidade: estoque })}</p>`;
      }
    }
  });
});

// CARRINHO
const btnCartModal = document.querySelector(".btn-cart");
const btnBuyModal = document.querySelector(".btn-buy");

function pegarVariacoes() {
  let tamanho = document.querySelector(".tamanho.selecionado");
  let cor = document.querySelector("#coresModal .cor.selecionado");
  if (!tamanho) { alert("Escolha um tamanho!"); return null; }
  if (!cor) { alert("Escolha uma cor!"); return null; }
  return { tamanho: tamanho.innerText, cor: cor.dataset.cor };
}

btnCartModal.addEventListener("click", () => {
  if (!produtoAtual) return;
  let variacao = pegarVariacoes();
  if (!variacao) return;

  if (produtoAtual.estoquePorTamanho) {
    let estoqueDisponivel = produtoAtual.estoquePorTamanho[variacao.tamanho];
    if (estoqueDisponivel === 0) { alert(`${traduzir('tamanho-esgotado')}`); return; }

    let itemExistente = carrinho.find(p =>
      p.titulo === produtoAtual.titulo &&
      p.tamanhoSelecionado === variacao.tamanho &&
      p.corSelecionada === variacao.cor
    );
    let quantidadeNoCarrinho = itemExistente ? itemExistente.quantidade : 0;
    if (quantidadeNoCarrinho >= estoqueDisponivel) {
      alert(`⚠️ Limite atingido! Só temos ${estoqueDisponivel} unidade(s) deste tamanho.`);
      return;
    }
  }

  let imgModal = document.getElementById("modalImg");
  animarProduto(imgModal);

  if (toast) { toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2000); }
  if (som) { som.currentTime = 0; som.play(); }

  let precoFinal = produtoAtual.valor;
  if (produtoAtual.precos) {
    let precoNumero = produtoAtual.precos[variacao.tamanho];
    if (precoNumero) precoFinal = "R$ " + precoNumero.toFixed(2).replace(".", ",");
  }

  let itemExistente = carrinho.find(p =>
    p.titulo === produtoAtual.titulo &&
    p.tamanhoSelecionado === variacao.tamanho &&
    p.corSelecionada === variacao.cor
  );

  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({
      ...produtoAtual,
      valor: precoFinal,
      tamanhoSelecionado: variacao.tamanho,
      corSelecionada: variacao.cor,
      quantidade: 1
    });
  }

  salvarCarrinho();
  atualizarContador();
});

let carrinho = [];
let produtoAtual = null;
let compraDireta = null;

let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
let chaveCarrinho = usuarioLogado ? "carrinho_" + usuarioLogado.email : null;
if (chaveCarrinho) carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];

const iconeCarrinho = document.querySelector(".icon-cart");
const contadorIcone = document.querySelector(".icon-cart span");
const carrinhoBox = document.getElementById("carrinho");
const listaCarrinho = document.getElementById("listaCarrinho");
const totalCarrinho = document.getElementById("totalCarrinho");
const fecharCarrinho = document.getElementById("fecharCarrinho");
const toast = document.getElementById("toastCarrinho");
const som = document.getElementById("somCarrinho");
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

function atualizarContador() {
  let totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  contadorIcone.innerText = totalItens;
}

function salvarCarrinho() {
  if (chaveCarrinho) localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
}

function calcularFrete(cep, total) {
  cep = cep.replace(/\D/g, '');
  if (cep.length !== 8) return null;
  if (total >= 299.90) return 0;
  return 20;
}

function calcularPrazo(cep, total) {
  cep = cep.replace(/\D/g, '');
  if (cep.length !== 8) return "";
  let prefixo = parseInt(cep.substring(0, 2));
  let prazo = prefixo <= 19 ? "3 a 5 dias úteis" : prefixo <= 39 ? "4 a 7 dias úteis" : "5 a 10 dias úteis";
  if (total >= FRETE_GRATIS_MIN) prazo += " 🚀";
  return prazo;
}

function calcularDesconto(total, frete) {
  if (!cupomAplicado) return 0;
  if (cupomAplicado.tipo === "percentual") return total * (cupomAplicado.valor / 100);
  if (cupomAplicado.tipo === "fixo") return cupomAplicado.valor;
  if (cupomAplicado.tipo === "frete") return frete;
  return 0;
}

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

if (cepInput) {
  cepInput.addEventListener("input", () => {
    if (compraDireta) renderCheckoutDireto();
    else renderCarrinho();

    // ViaCEP automático
    const cepLimpo = cepInput.value.replace(/\D/g, '');
    if (cepLimpo.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(r => r.json())
        .then(dados => {
          if (dados.erro) return;
          document.getElementById('ruaInput').value    = dados.logradouro || '';
          document.getElementById('cidadeInput').value = dados.localidade  || '';
          document.getElementById('estadoInput').value = dados.uf          || '';
        })
        .catch(() => {}); // ignora erro silenciosamente
    }
  });
}

iconeCarrinho.addEventListener("click", () => {
  carrinhoBox.classList.toggle("ativo");
  renderCarrinho();
});

fecharCarrinho.addEventListener("click", () => {
  carrinhoBox.classList.remove("ativo");
});

function animarProduto(imgElemento) {
  const carrinhoIcon = document.querySelector(".icon-cart");
  if (!carrinhoIcon) return;

  const imgClone = imgElemento.cloneNode(true);
  const rect = imgElemento.getBoundingClientRect();
  const carrinhoRect = carrinhoIcon.getBoundingClientRect();

  imgClone.classList.add("voando");
  imgClone.style.top = rect.top + "px";
  imgClone.style.left = rect.left + "px";
  imgClone.style.width = rect.width + "px";
  imgClone.style.height = rect.height + "px";
  document.body.appendChild(imgClone);

  requestAnimationFrame(() => {
    imgClone.style.top = carrinhoRect.top + "px";
    imgClone.style.left = carrinhoRect.left + "px";
    imgClone.style.width = "30px";
    imgClone.style.height = "30px";
    imgClone.style.opacity = "0.5";
  });

  setTimeout(() => imgClone.remove(), 700);
  carrinhoIcon.classList.add("animar");
  setTimeout(() => carrinhoIcon.classList.remove("animar"), 300);
}

function renderCarrinho() {
  if (compraDireta) return;
  listaCarrinho.innerHTML = "";
  const resumoItens = document.getElementById("resumoItens");

  if (resumoItens) {
    resumoItens.innerHTML = "";
    carrinho.forEach(item => {
      resumoItens.innerHTML += `
        <div class="item-carrinho">
          <img src="${item.imagem}" class="img-resumo">
          <div class="info-resumo">
            <p><b>${item.titulo}</b></p>
            <p>Qtd: ${item.quantidade}</p>
            <p>Cor: ${item.corSelecionada || "-"}</p>
            <p>Tam: ${item.tamanhoSelecionado || "-"}</p>
            <p>${item.valor}</p>
          </div>
        </div>
      `;
    });
  }

  function calcularTotalProdutos() {
    return carrinho.reduce((total, item) => {
      let valor = Number(item.valor.replace(/[^0-9,]/g, "").replace(",", "."));
      return total + (valor * item.quantidade);
    }, 0);
  }

  let totalProdutos = calcularTotalProdutos();
  if (totalCarrinho) totalCarrinho.innerHTML = "<b>Total: R$ " + totalProdutos.toFixed(2) + "</b>";

  let frete = calcularFrete(cepInput?.value || "", totalProdutos);
  let desconto = calcularDesconto(totalProdutos, frete);
  let totalFinal = totalProdutos + frete - desconto;

  carrinho.forEach((item, index) => {
    listaCarrinho.innerHTML += `
      <div class="item-carrinho">
        <img src="${item.imagem}">
        <div class="info-produto">
          <p class="nome"><b>${item.titulo}</b></p>
          <p class="variacao">Cor: ${item.corSelecionada || "-"}<br>Tam: ${item.tamanhoSelecionado || "-"}</p>
          <p class="preco">${item.valor}</p>
        </div>
        <div class="acoes">
          <div class="contador">
            <button onclick="diminuir(${index})">-</button>
            <span>${item.quantidade}</span>
            <button onclick="aumentar(${index})">+</button>
          </div>
          <button class="remover" onclick="removerItem(${index})">Remover</button>
        </div>
      </div>
    `;
  });

  if (freteValor) {
    if (totalProdutos >= 299.90) freteValor.innerText = "Frete: GRÁTIS 🎉";
    else if (frete === null) freteValor.innerText = "Frete: digite o CEP";
    else freteValor.innerText = "Frete: R$ " + frete.toFixed(2);
  }

  if (prazoEntrega) {
    let prazo = calcularPrazo(cepInput?.value || "", totalProdutos);
    prazoEntrega.innerText = prazo ? "Prazo: " + prazo : "Prazo: -";
  }

  if (descontoValor) descontoValor.innerText = desconto > 0 ? "Desconto: -R$ " + desconto.toFixed(2) : "";

  const totalCheckout = document.getElementById("totalCheckout");
  if (totalCheckout) totalCheckout.innerHTML = "<b>Total: R$ " + totalFinal.toFixed(2) + "</b>";

  const totalFinalEl = document.getElementById("totalFinal");
  if (totalFinalEl) {
    let tp = calcularTotalProdutos();
    let fr = calcularFrete(cepInput?.value || "", tp) || 0;
    let desc = calcularDesconto(tp, fr) || 0;
    let tf = tp + fr - desc;
    totalFinalEl.innerHTML = `<b>Total: R$ ${tf.toFixed(2).replace(".", ",")}</b>`;
  }

  atualizarContador();
  salvarCarrinho();
}

function aumentar(index) { carrinho[index].quantidade++; renderCarrinho(); }
function diminuir(index) { if (carrinho[index].quantidade > 1) carrinho[index].quantidade--; renderCarrinho(); }
function removerItem(index) { carrinho.splice(index, 1); renderCarrinho(); }

window.addEventListener("load", () => {
  atualizarContador();
  renderCarrinho();

  const btnComprar = document.getElementById("comprar");
  const btnContinuar = document.getElementById("continuarComprando");
  const btnIrEntrega = document.getElementById("irParaEntrega");
  const btnVoltarEtapa = document.getElementById("voltarEtapa");
  const checkout = document.getElementById("checkout");
  const fecharCheckout = document.getElementById("fecharCheckout");
  const etapa1 = document.getElementById("etapa1");
  const etapa2 = document.getElementById("etapa2");

  if (btnComprar) btnComprar.addEventListener("click", () => {
    checkout.classList.remove("checkout-hidden");
    setTimeout(() => checkout.classList.add("ativo"), 10);
  });

  if (fecharCheckout) fecharCheckout.addEventListener("click", () => {
    checkout.classList.add("checkout-hidden");
  });

  if (btnContinuar) btnContinuar.addEventListener("click", () => {
    checkout.classList.remove("ativo");
    setTimeout(() => checkout.classList.add("checkout-hidden"), 300);
  });

  if (btnIrEntrega) btnIrEntrega.addEventListener("click", () => {
    etapa1.style.display = "none";
    etapa2.style.display = "block";
    atualizarResumoFinal();
  });

  if (btnVoltarEtapa) btnVoltarEtapa.addEventListener("click", () => {
    etapa1.style.display = "block";
    etapa2.style.display = "none";
  });
});

// FORMULÁRIO CHECKOUT
function validarFormulario() {
  const erro = document.getElementById("erroFormulario");
  let nome = document.getElementById("nomeInput")?.value.trim();
  let cpf = document.getElementById("cpfInput")?.value.trim();
  let cep = document.getElementById("cepInput")?.value.trim();
  let rua = document.getElementById("ruaInput")?.value.trim();
  let numero = document.getElementById("numeroInput")?.value.trim();
  let cidade = document.getElementById("cidadeInput")?.value.trim();
  let estado = document.getElementById("estadoInput")?.value.trim();

  if (!nome || !cpf || !cep || !rua || !numero || !cidade || !estado) {
    erro.style.display = "block";
    erro.innerText = "⚠️ Preencha todos os campos obrigatórios!";
    return false;
  }
  if (cpf.replace(/\D/g, "").length !== 11) {
    erro.style.display = "block";
    erro.innerText = "⚠️ CPF inválido!";
    return false;
  }
  if (cep.replace(/\D/g, "").length !== 8) {
    erro.style.display = "block";
    erro.innerText = "⚠️ CEP inválido!";
    return false;
  }
  erro.style.display = "none";
  erro.innerText = "";
  return true;
}

document.getElementById("finalizarCompra").addEventListener("click", () => {
  if (!validarFormulario()) return;

  let carrinho = chaveCarrinho ? JSON.parse(localStorage.getItem(chaveCarrinho)) || [] : [];
  if (carrinho.length === 0) { alert("Seu carrinho está vazio!"); return; }

  let pagamento = document.getElementById("formaPagamento")?.value || "-";
  let nome = document.getElementById("nomeInput")?.value.trim();
  let cpf = document.getElementById("cpfInput")?.value.trim();
  let cep = document.getElementById("cepInput")?.value.trim();
  let rua = document.getElementById("ruaInput")?.value.trim();
  let numero = document.getElementById("numeroInput")?.value.trim();
  let cidade = document.getElementById("cidadeInput")?.value.trim();
  let estado = document.getElementById("estadoInput")?.value.trim();

  let mensagem = "Olá! Quero comprar os seguintes produtos:%0A%0A";
  let usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  mensagem += `👤 Cliente: ${usuario?.nome || "-"}%0A%0A`;

  let total = 0;
  carrinho.forEach(item => {
    let valorNumero = Number(item.valor.replace(/[^0-9,]/g, "").replace(",", "."));
    mensagem += `🛍️ ${item.titulo}%0A`;
    mensagem += `Cor: ${item.corSelecionada || "-"}%0A`;
    mensagem += `Tamanho: ${item.tamanhoSelecionado || "-"}%0A`;
    mensagem += `Qtd: ${item.quantidade}%0A`;
    mensagem += `Valor: ${item.valor}%0A%0A`;
    total += valorNumero * item.quantidade;
  });

  let frete = 0;
  const freteTexto = document.getElementById("freteValor")?.innerText;
  if (freteTexto && freteTexto.includes("R$")) {
    frete = Number(freteTexto.replace(/[^0-9,]/g, "").replace(",", ".")) || 0;
  }

  let totalTexto = document.getElementById("totalFinal")?.innerText || "R$ 0,00";
  mensagem += `💳 Pagamento: ${pagamento}%0A`;
  mensagem += `🚚 Frete: R$ ${frete.toFixed(2)}%0A`;
  mensagem += `💰 Total: R$ ${totalTexto}%0A%0A`;
  mensagem += `CPF: ${cpf}%0A`;
  mensagem += `📦 Endereço:%0A`;
  mensagem += `Rua: ${rua}%0A Numero:${numero}%0A Cidade: ${cidade}%0A Estado: ${estado}%0ACEP: ${cep}%0A`;

  window.open(`https://wa.me/5511913296171?text=${mensagem}`, "_blank");
});

function renderCheckoutDireto() {
  const resumo = document.getElementById("resumoItens");
  if (!compraDireta) return;

  resumo.innerHTML = `
    <div class="item-resumo">
      <div class="info-resumo">
        <img src="${compraDireta.imagem}" class="img-resumo">
        <div>
          <p><b>${compraDireta.titulo}</b></p>
          <p>Cor: ${compraDireta.corSelecionada || "-"}</p>
          <p>Tam: ${compraDireta.tamanhoSelecionado || "-"}</p>
        </div>
      </div>
      <div class="preco-compra">${compraDireta.valor}</div>
      <hr class="linha">
    </div>
  `;

  const totalFinalEl = document.getElementById("totalFinal");
  if (totalFinalEl) {
    let totalProdutos = carrinho.reduce((total, item) => {
      let valor = Number(item.valor.replace(/[^0-9,]/g, "").replace(",", "."));
      return total + (valor * item.quantidade);
    }, 0);
    let frete = calcularFrete(cepInput?.value || "", totalProdutos) || 0;
    let desconto = calcularDesconto(totalProdutos, frete) || 0;
    totalFinalEl.innerHTML = `<b>Total: R$ ${(totalProdutos + frete - desconto).toFixed(2)}</b>`;
  }
}

// FILTROS
const iconeFiltro = document.getElementById("iconeFiltro");
const filtroBox = document.getElementById("filtroBox");
const btnLimpar = document.getElementById("limparFiltros");
const btnConcluir = document.getElementById("concluirFiltro");
const filtroAtivoTexto = document.getElementById("filtroAtivo");

let categoriaAtiva = "todos";
let precoAtivo = null;
let categoriaTemp = "todos";
let precoTemp = null;

iconeFiltro.addEventListener("click", (e) => {
  e.stopPropagation();
  filtroBox.classList.toggle("filtro-hidden");
  categoriaTemp = categoriaAtiva;
  precoTemp = precoAtivo;
  atualizarVisualTemp();
});

document.addEventListener("click", (e) => {
  if (!filtroBox.contains(e.target) && !iconeFiltro.contains(e.target)) {
    filtroBox.classList.add("filtro-hidden");
  }
});

function pegarPreco(valor) {
  return Number(valor.replace("R$", "").replace(",", "."));
}

function aplicarFiltros() {
  let resultado = Roupas;
  if (categoriaAtiva !== "todos") resultado = resultado.filter(p => p.categoria === categoriaAtiva);
  if (precoAtivo) resultado = resultado.filter(p => {
    const preco = pegarPreco(p.valor);
    return preco >= precoAtivo.min && preco <= precoAtivo.max;
  });
  displayRoupas(resultado);
  atualizarTextoFiltro();
}

function atualizarTextoFiltro() {
  let html = "";
  if (categoriaAtiva !== "todos") html += `Categoria: ${categoriaAtiva} <span class="remover" data-tipo="cat">✖</span> `;
  if (precoAtivo) html += `Preço: ${precoAtivo.min}-${precoAtivo.max} <span class="remover" data-tipo="preco">✖</span>`;
  filtroAtivoTexto.innerHTML = html ? "Filtro ativo: " + html : "";

  document.querySelectorAll(".remover").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.tipo === "cat") categoriaAtiva = "todos";
      if (btn.dataset.tipo === "preco") precoAtivo = null;
      aplicarFiltros();
    });
  });
}

function atualizarVisualTemp() {
  document.querySelectorAll(".filtro-cat").forEach(item => {
    item.classList.toggle("ativo", item.dataset.cat === categoriaTemp);
  });
  document.querySelectorAll(".filtro-preco").forEach(item => {
    if (!precoTemp) item.classList.remove("ativo");
    else item.classList.toggle("ativo", item.dataset.preco === `${precoTemp.min}-${precoTemp.max}`);
  });
}

document.querySelectorAll(".filtro-cat").forEach(item => {
  item.addEventListener("click", () => { categoriaTemp = item.dataset.cat; atualizarVisualTemp(); });
});

document.querySelectorAll(".filtro-preco").forEach(item => {
  item.addEventListener("click", () => {
    const faixa = item.dataset.preco.split("-");
    precoTemp = { min: Number(faixa[0]), max: Number(faixa[1]) };
    atualizarVisualTemp();
  });
});

btnConcluir.addEventListener("click", () => {
  categoriaAtiva = categoriaTemp;
  precoAtivo = precoTemp;
  aplicarFiltros();
  filtroBox.classList.add("filtro-hidden");
});

btnLimpar.addEventListener("click", () => {
  categoriaAtiva = "todos";
  precoAtivo = null;
  categoriaTemp = "todos";
  precoTemp = null;
  aplicarFiltros();
  atualizarVisualTemp();
});

// SAUDAÇÃO
document.addEventListener("DOMContentLoaded", () => {
  const idioma = localStorage.getItem('idioma') || 'pt';
  const t = traducoes[idioma] || traducoes.pt;
  const saudacaoPrefix = t['saudacao-prefix'] || (t['saudacao'] || 'Olá').replace(/[!¡]/g, '');

  let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  let saudacao = document.getElementById("saudacao");

  if (usuarioLogado && usuarioLogado.nome && usuarioLogado.nome.trim()) {
    const nomeExibicao = usuarioLogado.nome.trim().split(" ")[0] || usuarioLogado.email.split('@')[0];
    saudacao.innerText = `${saudacaoPrefix}, ${nomeExibicao}!`;
  } else if (usuarioLogado && usuarioLogado.email) {
    const emailLocal = usuarioLogado.email.split('@')[0];
    saudacao.innerText = `${saudacaoPrefix}, ${emailLocal}!`;
  } else {
    saudacao.innerText = t['saudacao'] || "Olá!";
  }
});

// REVEAL SCROLL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
reveals.forEach(el => observer.observe(el));

// ─── HELPERS DA TELA DE ROUPAS ───────────────────────────────

function _montarBuscaInterna(termoBusca) {
  const anterior = document.getElementById('wrapperBuscaInterna');
  if (anterior) anterior.remove();

  const wrapper = document.createElement('div');
  wrapper.id = 'wrapperBuscaInterna';
  // Usa a mesma classe da busca original para herdar o CSS
  wrapper.className = 'search';
  wrapper.style.cssText = 'display:none;';

  const input = document.createElement('input');
  input.id = 'buscaInterna';
  input.type = 'text';
  input.value = termoBusca;
  input.placeholder = 'Pesquisar no catálogo...';
  input.style.cssText = 'padding:8px;border:none;background:transparent;width:100%;outline:none;';

  const btnLimpar = document.createElement('button');
  btnLimpar.textContent = '✕';
  btnLimpar.style.cssText = 'background:none;border:none;font-size:18px;cursor:pointer;color:#555;';

  input.addEventListener('input', () => {
    _renderizarCardsTela(input.value.trim());
  });

  btnLimpar.addEventListener('click', () => {
    input.value = '';
    _renderizarCardsTela('');
    input.focus();
  });

  wrapper.appendChild(input);
  wrapper.appendChild(btnLimpar);

  // Insere no NAV, logo depois da barra principal
  const barraPrincipal = document.getElementById('barraBuscaPrincipal');
  barraPrincipal.parentNode.insertBefore(wrapper, barraPrincipal.nextSibling);
}

function _renderizarCardsTela(termo, categoriaFiltro) {
  const cardContainerTela = document.getElementById('cardContainerTela');
  const nomes = {
    "Roupas basicas": "Roupas Básicas",
    "Camisas sociais/basicas": "Camisas",
    "Vestidos": "Vestidos",
    "Conjuntos e peças de festas": "Conjuntos e Festas",
    "Calças": "Calças"
  };

  // Mapa para converter data-cat do menu para categoria real do produto
  const mapaCategoria = {
    "camisa": "Camisas sociais/basicas",
    "calca": "Calças",
    "conjunto": "Conjuntos e peças de festas",
    "macacao": "Macacões",
    "vestido": "Vestidos"
  };

  let filtrados = Roupas;

  // Filtra por categoria do menu se vier
  if (categoriaFiltro) {
    const categoriaNome = mapaCategoria[categoriaFiltro];
    if (categoriaNome) filtrados = filtrados.filter(p => p.categoria === categoriaNome);
  }

  // Filtra por termo de busca se vier
  if (termo) {
    filtrados = filtrados.filter(p => p.titulo.toLowerCase().includes(termo.toLowerCase()));
  }

  if (filtrados.length === 0) {
    cardContainerTela.innerHTML = `
      <p style="width:100%;text-align:center;padding:40px 0;">
        ${traduzir('produto-nao-encontrado')}
      </p>`;
    return;
  }

  const t = traducoes[localStorage.getItem('idioma') || 'pt'] || traducoes.pt;
  const categorias = [...new Set(filtrados.map(p => p.categoria))];
  let html = '';
  categorias.forEach(categoria => {
    const produtos = filtrados.filter(p => p.categoria === categoria);
    html += `<h2 class="titulo-categoria" style="flex-basis:100%;width:100%;">${nomes[categoria] || categoria}</h2>`;
    produtos.forEach(produto => {
      let precoHTML = produto.precos
        ? `<p class="valor1"><b>A partir de R$ ${Math.min(...Object.values(produto.precos)).toFixed(2).replace('.', ',')}</b></p>`
        : `<p class="valor1"><b>${produto.valor}</b></p>`;
      let pessoasVendo = simularPessoasVendo();
      html += `
        <div class="card" data-nome="${produto.titulo}">
          <img class="imagem" src="${produto.imagem}" alt="${produto.titulo}">
          <p>${produto.titulo}</p>
          <p class="tamanho">${produto.tamanho}</p>
          ${precoHTML}
          <p><b>${produto.valor2}</b></p>
          <p>${produto.descricao3}</p>
          <p class="pessoas-vendo">👁️ ${pessoasVendo} ${pessoasVendo === 1 ? t['pessoas-vendo-1'] : t['pessoas-vendo-n']}</p>
        </div>`;
    });
  });

  cardContainerTela.innerHTML = html;

  cardContainerTela.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const produto = Roupas.find(p => p.titulo === card.dataset.nome);
      if (!produto) return;
      produtoAtual = produto;
      salvarUltimoVisto(produto);
      document.querySelectorAll('.tamanho').forEach(tam => {
        let nomeTamanho = tam.innerText.trim();
        tam.classList.remove('sem-estoque', 'selecionado');
        if (produto.estoquePorTamanho && produto.estoquePorTamanho[nomeTamanho] === 0)
          tam.classList.add('sem-estoque');
      });
      document.getElementById('modalEstoque').innerHTML = '';
      modalImg.src = produto.imagem;
      modalTitulo.innerText = produto.titulo;
      modalTamanho.innerText = produto.tamanho;
      modalValor.innerText = produto.valor;
      modalPix.innerText = produto.valor2;
      modalDesc.innerText = produto.descricao3;
      renderizarCoresModal(produto);
      modal.style.display = 'flex';
      modal.classList.remove('fechando');
      modal.classList.add('abrindo');
    });
  });
}
function _abrirTela() {
  const tela = document.getElementById('telaRoupas');
  const btnVoltarTela = document.getElementById('btnVoltarTela');
  tela.classList.remove('fechando');
  tela.style.display = 'block';
  requestAnimationFrame(() => requestAnimationFrame(() => tela.classList.add('aberta')));
  btnVoltarTela.classList.add('visivel');

  // Troca as barras
  const barraPrincipal = document.getElementById('barraBuscaPrincipal');
  const buscaInterna = document.getElementById('wrapperBuscaInterna');
  if (barraPrincipal) barraPrincipal.style.display = 'none';
  if (buscaInterna) buscaInterna.style.display = 'flex';
}
function abrirTelaRoupas() {
  _montarBuscaInterna('');
  _renderizarCardsTela('');
  _abrirTela();
}

function abrirTelaRoupasFiltrada(termoBusca) {
  _montarBuscaInterna(termoBusca);
  _renderizarCardsTela(termoBusca);
  _abrirTela();
}

function fecharTelaRoupas() {
  const tela = document.getElementById('telaRoupas');
  const btnVoltarTela = document.getElementById('btnVoltarTela');
  const wrapper = document.getElementById('wrapperBuscaInterna');
  if (wrapper) wrapper.remove();
  tela.classList.remove('aberta');
  tela.classList.add('fechando');
  setTimeout(() => {
    tela.classList.remove('fechando');
    tela.style.display = 'none';
    btnVoltarTela.classList.remove('visivel');
  }, 600);

  // Restaura busca principal
  const barraPrincipal = document.getElementById('barraBuscaPrincipal');
  if (barraPrincipal) barraPrincipal.style.display = 'flex';
}

document.getElementById('btnVoltarTela').addEventListener('click', fecharTelaRoupas);

const btnCatalogo = document.getElementById('btnCatalogo');
if (btnCatalogo) btnCatalogo.addEventListener('click', abrirTelaRoupas);

/* ── BLOG MODAL ── */
/* Blog cards */
  const blogCards = document.querySelectorAll('.blog-card');
  if (blogCards.length) {
    const blogObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          blogCards.forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 350);
          });
          blogObserver.disconnect();
        }
      });
    }, { threshold: 0.15 });

    const blogGrid = document.querySelector('.blog-grid');
    if (blogGrid) blogObserver.observe(blogGrid);
  }
const blogPosts = [
  {
    id: 0,
    tag: "Moda",
    title: "Como escolher a roupa certa para cada ocasião sendo Plus Size",
    img: "/img/eventos.jpeg",
    readTime: "5 min de leitura",
    content: `
      <h3>Moda Plus Size para cada momento da sua vida</h3>
      <p>Escolher a roupa certa vai muito além do tamanho. É sobre entender o seu corpo, o seu estilo e a ocasião — e a PluziStyle está aqui para te ajudar em cada passo dessa jornada.</p>
      <h3>Casual e dia a dia</h3>
      <p>Para o cotidiano, aposte em peças confortáveis e versáteis. Camisetas básicas, conjuntos leves e calças alfaiteria são ótimas opções que combinam praticidade com estilo. Na PluziStyle você encontra essas peças do 46 ao 60.</p>
      <h3>Trabalho e ocasiões formais</h3>
      <p>Para o ambiente profissional, invista em camisas sociais, calças alfaiteria e blazers. Cores neutras como preto, branco e vinho transmitem elegância e podem ser combinadas de diversas formas.</p>
      <h3>Festas e eventos especiais</h3>
      <p>Para ocasiões especiais, nossa linha de conjuntos e peças de festa é perfeita. Tecidos nobres, cores vibrantes e modelagens que valorizam a silhueta fazem toda a diferença na sua autoestima.</p>
      <h3>Dicas para combinar peças</h3>
      <ul>
        <li><strong>Cores</strong> — misture tons neutros com uma peça de cor para dar vida ao look</li>
        <li><strong>Tecidos</strong> — combine texturas diferentes para criar looks mais interessantes</li>
        <li><strong>Proporção</strong> — peças mais largas em cima combinam com peças mais justas embaixo, e vice-versa</li>
        <li><strong>Acessórios</strong> — um cinto, colar ou brinco pode transformar completamente o visual</li>
        <li><strong>Conforto</strong> — nunca abra mão de se sentir bem na roupa que você está usando</li>
      </ul>
      <h3>Nossa tabela de preços</h3>
      <p>Roupas básicas (camisetas, bodies): R$ 50,00 | Vestidos e macacões: R$ 100,00 | Calças jeans e alfaiteria: R$ 120,00–180,00 | Conjuntos e peças de festa: R$ 120,00–250,00.</p>
    `
  },
  {
    id: 1,
    tag: "Autoestima",
    title: "Por que investir em roupas que te fazem bem é um ato de amor próprio",
    img: "/img/eventos2.jpeg",
    readTime: "7 min de leitura",
    content: `
      <h3>A roupa que você veste faz parte de quem você é</h3>
      <p>Vestir-se bem não é frescura — é autocuidado. A forma como nos apresentamos ao mundo reflete diretamente na nossa confiança, no nosso humor e na maneira como nos relacionamos com as pessoas ao redor.</p>
      <h3>O impacto da moda na autoestima</h3>
      <p>Estudos mostram que usar roupas com as quais nos identificamos aumenta a autoconfiança e melhora o humor. Para mulheres Plus Size, encontrar peças que caibam bem e valorizem o corpo é ainda mais transformador.</p>
      <h3>Moda inclusiva é um direito</h3>
      <p>Durante muito tempo, o mercado da moda ignorou corpos maiores. A PluziStyle nasceu justamente para mudar isso — oferecendo peças modernas, estilosas e confortáveis do tamanho 46 ao 60, sem abrir mão da qualidade.</p>
      <h3>Conforto e estilo andam juntos</h3>
      <p>Acreditamos que não é preciso escolher entre se sentir confortável e se sentir bonita. Nossas peças são desenvolvidas com tecidos de qualidade e modelagens pensadas para valorizar cada tipo de corpo.</p>
      <h3>Você merece se sentir incrível todos os dias</h3>
      <p>Independente da ocasião — seja um dia comum de trabalho ou uma festa especial — você merece olhar no espelho e se sentir poderosa. Esse é o propósito da PluziStyle: te dar roupa e confiança para conquistar o mundo.</p>
    `
  },
  {
    id: 2,
    tag: "Guia de Compras",
    title: "Guia completo para comprar roupas Plus Size online com segurança",
    img: "/img/contrato.jpeg",
    readTime: "10 min de leitura",
    content: `
      <h3>Antes de comprar — conheça o seu corpo</h3>
      <ul>
        <li>✅ Tire suas medidas de busto, cintura e quadril</li>
        <li>✅ Consulte a tabela de tamanhos da loja antes de escolher</li>
        <li>✅ Anote sua altura e peso para usar a nossa calculadora de tamanho</li>
        <li>✅ Pense na ocasião para qual está comprando a peça</li>
        <li>✅ Verifique quais cores combinam melhor com seu tom de pele</li>
      </ul>
      <h3>Na hora de escolher a peça</h3>
      <ul>
        <li>✅ Leia a descrição completa do produto — tecido, modelagem e caimento</li>
        <li>✅ Veja todas as fotos disponíveis, incluindo fotos com modelo</li>
        <li>✅ Confira a disponibilidade do tamanho e da cor desejados</li>
        <li>✅ Duvide? Entre em contato pelo WhatsApp antes de finalizar</li>
      </ul>
      <h3>Na hora de pagar</h3>
      <ul>
        <li>✅ Escolha entre PIX, boleto ou cartão em até 3x sem juros</li>
        <li>✅ Verifique se o pedido atinge R$ 299,90 para frete grátis</li>
        <li>✅ Guarde o comprovante de pagamento</li>
        <li>✅ Acompanhe o status do seu pedido</li>
      </ul>
      <h3>Após receber a peça</h3>
      <ul>
        <li>✅ Experimente a roupa com a etiqueta ainda presa</li>
        <li>✅ Confira se o tamanho, cor e modelo estão corretos</li>
        <li>✅ Em caso de troca, entre em contato em até 7 dias pelo WhatsApp</li>
        <li>✅ Avalie o produto para ajudar outras clientes a escolherem</li>
      </ul>
      <h3>Dica PluziStyle</h3>
      <p>Em caso de dúvida entre dois tamanhos, opte sempre pelo maior. Nossas peças têm modelagem pensada para valorizar o corpo — o conforto faz toda a diferença no resultado final.</p>
    `
  }
];

function openBlogModal(id) {
  const post = blogPosts[id];
  if (!post) return;

  const idioma = localStorage.getItem('idioma') || 'pt';
  const t = traducoes[idioma] || traducoes.pt;

  const title = t[`blog${id + 1}-titulo`] || post.title;
  const tag = t[`blog${id + 1}-tag`] || post.tag;
  const readTime = t[`blog${id + 1}-readtime`] || post.readTime;
  const content = t[`blog${id + 1}-modal-content`] || post.content;
  const authorText = t['blog-autor'] || 'por PluziStyle';
  const closeLabel = t['blog-modal-close-label'] || 'Fechar';
  const ctaText = t['blog-modal-cta'] || 'Veja nossas roupas';

  const existing = document.getElementById('blogModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'blogModal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', title);

  modal.innerHTML = `
    <div class="bm-backdrop"></div>
    <div class="bm-panel">
      <button class="bm-close" aria-label="${closeLabel}"><i class="fa-solid fa-xmark"></i></button>
      <div class="bm-img-wrap">
        <img src="${post.img}" alt="${title}" />
        <span class="bm-tag">${tag}</span>
      </div>
      <div class="bm-body">
        <p class="bm-meta">
          <i class="fa-solid fa-user"></i> ${authorText}
          &nbsp;·&nbsp;
          <i class="fa-solid fa-clock"></i> ${readTime}
        </p>
        <h2 class="bm-title">${title}</h2>
        <div class="bm-content">${content}</div>
        <a href="#" onclick="abrirTelaRoupas()" class="bm-cta" id="bmCta">
          <i class="fa-solid fa-paper-plane"></i> ${ctaText}
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('bm-open'));
  document.body.style.overflow = 'hidden';

  modal.querySelector('.bm-backdrop').addEventListener('click', closeBlogModal);
  modal.querySelector('.bm-close').addEventListener('click', closeBlogModal);
  modal.querySelector('#bmCta').addEventListener('click', closeBlogModal);
  document.addEventListener('keydown', handleModalKey);
}

function closeBlogModal() {
  const modal = document.getElementById('blogModal');
  if (!modal) return;
  modal.classList.remove('bm-open');
  modal.classList.add('bm-closing');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleModalKey);
  setTimeout(() => modal.remove(), 380);
}

function handleModalKey(e) {
  if (e.key === 'Escape') closeBlogModal();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.blog-link').forEach((link, i) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openBlogModal(i);
    });
  });
});

// MENU CIRCULAR
const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => { menu.classList.toggle("active"); });

// ========== TELA CHEIA DE ROUPAS ==========
