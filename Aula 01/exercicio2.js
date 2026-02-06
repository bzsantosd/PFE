
// 1. Definição das variáveis (Valores de exemplo)
let salario = Number(prompt("Digite seu salário:"));
let aluguel = Number(prompt("Digite seu aluguel:"));
let alimentacao = Number(prompt("Digite o valor da alimentação:"));
let lazer = Number(prompt("Digite seu lazer:"));

// 2. Cálculo do total de despesas e saldo restante
let totalDespesas = aluguel + alimentacao + lazer;
let saldoRestante = salario - totalDespesas;

// Exibição dos valores no console

alert(`Salário: R$ ${salario}`);
alert(`Total de Despesas: R$ ${totalDespesas}`);
alert(`Saldo Final: R$ ${saldoRestante}`);

// 3. Estrutura if/else para verificar a situação do saldo
if (saldoRestante > 0) {
    alert("Status: Saldo Positivo");
} else if (saldoRestante === 0) {
    alert("Status: No Limite");
} else {
    alert("Status: Saldo Negativo");
}