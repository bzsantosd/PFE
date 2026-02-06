// 1. Criar os objetos de data
// Você pode editar a data do evento no formato: 'AAAA-MM-DD'
const dataHoje = new Date(); 
const dataEvento = new Date('2026-02-06'); // Data editável

// 2. Calcular a diferença em milissegundos
// Subtrair as datas retorna o valor em ms automaticamente
const diferencaMs = dataEvento - dataHoje;

// 3. Converter a diferença para dias
// 1 dia = 24 horas * 60 min * 60 seg * 1000 ms
const msPorDia = 24 * 60 * 60 * 1000;
const diferencaDias = diferencaMs / msPorDia;

// 4. Usar Math.ceil() para arredondar para cima
const diasFaltantes = Math.ceil(diferencaDias);

// 5. Exibir o resultado no console
alert(`Faltam ${diasFaltantes} dias para o seu compromisso!`);

