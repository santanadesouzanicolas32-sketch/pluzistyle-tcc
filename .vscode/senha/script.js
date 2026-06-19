Use import []   
    const form = document.getElementById("form");
    const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // Verifica se já existe usuário
        const usuarioSalvo = localStorage.getItem(email);

        if (usuarioSalvo) {
            resultado.innerHTML = "❌ Usuário já cadastrado!";
            return;
        }

        // Cria objeto
        const usuario = {
            email: email,
            senha: senha
        };

        // Salva corretamente
        localStorage.setItem(email, JSON.stringify(usuario));

        resultado.innerHTML = "✅ Cadastro realizado com sucesso!";
        form.reset();
    });

});