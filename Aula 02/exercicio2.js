function atualizarCartao() {
    // Captura os valores dos inputs
    const nome = document.getElementById('inputNome').value;
    const cargo = document.getElementById('inputCargo').value;

    // Injeta os valores nas IDs do cartão
    // Se o campo estiver vazio, mantém um texto padrão
    document.getElementById('previewNome').innerText = nome || "Seu Nome";
    document.getElementById('previewCargo').innerText = cargo || "Seu Cargo";
}

function mudarCor(cor) {
    // Altera a variável CSS no elemento raiz (:root)
    document.documentElement.style.setProperty('--card-color', cor);
}