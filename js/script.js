
// =====================================
// FILTRO DAS FOTOGRAFIAS
// =====================================

// Seleciona todos os botões de filtro
const botoesFiltro = document.querySelectorAll(".filtro");

// Seleciona todos os cartões de fotografias
const fotos = document.querySelectorAll(".foto-card");

// Percorre os botões
botoesFiltro.forEach(function(botao) {

    botao.addEventListener("click", function() {

        // Descobre qual categoria foi selecionada
        const categoria = botao.dataset.categoria;

        // Percorre todas as fotografias
        fotos.forEach(function(foto) {

            // Verifica se a foto pertence à categoria
            if (
                categoria === "todos" ||
                foto.dataset.categoria === categoria
            ) {
                foto.style.display = "block";
            } else {
                foto.style.display = "none";
            }

        });

        // Atualiza o botão selecionado
        botoesFiltro.forEach(function(item) {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

    });

});


// =====================================
// AMPLIAR FOTOGRAFIAS
// =====================================


// =====================================
// AMPLIAR FOTOGRAFIAS
// =====================================

const imagens = document.querySelectorAll(".foto-card img");

const modal = document.getElementById("modalFoto");
const imagemAmpliada = document.getElementById("imagemAmpliada");
const fecharModal = document.getElementById("fecharModal");

// Verifica se os elementos da galeria existem nesta página
if (modal && imagemAmpliada && fecharModal) {

    // Ao clicar em uma fotografia
    imagens.forEach(function(imagem) {

        imagem.addEventListener("click", function() {

            imagemAmpliada.src = imagem.src;
            imagemAmpliada.alt = imagem.alt;

            modal.classList.add("aberto");
            modal.setAttribute("aria-hidden", "false");

        });

    });

    // Fecha a fotografia ampliada
    fecharModal.addEventListener("click", function() {

        modal.classList.remove("aberto");
        modal.setAttribute("aria-hidden", "true");

    });

    // Fecha ao clicar fora da fotografia
    modal.addEventListener("click", function(evento) {

        if (evento.target === modal) {

            modal.classList.remove("aberto");
            modal.setAttribute("aria-hidden", "true");

        }

    });

    // Fecha ao pressionar ESC
    document.addEventListener("keydown", function(evento) {

        if (evento.key === "Escape") {

            modal.classList.remove("aberto");
            modal.setAttribute("aria-hidden", "true");

        }

    });

}


// Fecha a fotografia ampliada
fecharModal.addEventListener("click", function() {

    modal.classList.remove("aberto");
    modal.setAttribute("aria-hidden", "true");

});

// Também fecha ao clicar fora da fotografia
modal.addEventListener("click", function(evento) {

    if (evento.target === modal) {

        modal.classList.remove("aberto");
        modal.setAttribute("aria-hidden", "true");

    }

});

// Fecha ao pressionar ESC
document.addEventListener("keydown", function(evento) {

    if (evento.key === "Escape") {

        modal.classList.remove("aberto");
        modal.setAttribute("aria-hidden", "true");

    }

});
