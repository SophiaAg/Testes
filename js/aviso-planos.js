// Seleciona os elementos do modal e os botões
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModal");
const redirectButton = document.getElementById("redirectButton");

// Função para exibir o modal automaticamente quando a página carregar
window.onload = function() {
    modal.style.display = "block";
}

// Função para fechar o modal
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal ao clicar fora da área do conteúdo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Função para redirecionar para outra página
redirectButton.onclick = function() {
    window.location.href = "https://www.exemplo.com"; // Altere para o link desejado
}
