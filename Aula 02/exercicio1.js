function converter() {
    // 1. Pega o valor do input e o elemento do corpo da página
    const celsius = document.getElementById('tempCelsius').value;
    const corpo = document.body;
    const resultadoTexto = document.getElementById('resultado');

    // Validação simples para campo vazio
    if (celsius === "") {
        alert("Por favor, digite um valor.");
        return;
    }

    // 2. Cálculo: F = C * 1.8 + 32
    const fahrenheit = (parseFloat(celsius) * 1.8) + 32;

    // 3. Exibe o resultado na tela
    resultadoTexto.innerText = `Resultado: ${fahrenheit.toFixed(1)}°F`;

    // 4. Lógica de Cor
    if (fahrenheit > 80) {
        corpo.className = "quente";
    } else {
        corpo.className = "frio";
    }
}