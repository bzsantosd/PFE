
function limparNomeContato(nome) {
  // 1. Remove espaços no início e fim
  // 2. Transforma tudo em maiúsculas
  const nomeFormatado = nome.trim().toUpperCase();

  // Bônus: Conta as palavras
  // O split(/\s+/) lida bem com múltiplos espaços no meio
  const palavras = nomeFormatado.split(/\s+/);
  const quantidadePalavras = nomeFormatado === "" ? 0 : palavras.length;

  return {
    nome: nomeFormatado,
    totalPalavras: quantidadePalavras
  };
}

// SOLUÇÃO: Usamos apenas prompt() para textos.
// (O parseInt só seria usado se pedíssemos a idade ou telefone)
const nomeDigitado = prompt("Digite o nome do contato:");

if (nomeDigitado !== null) {
  const resultado = limparNomeContato(nomeDigitado);

  alert("Nome formatado: " + resultado.nome);
  alert("Total de palavras: " + resultado.totalPalavras);
}