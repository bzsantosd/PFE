
// 1. Recebe a hora e a prioridade
let hora = parseInt(prompt("Digite a hora da tarefa (0-23):"));
let prioridade = parseInt(prompt("Digite o nível de prioridade (1-10):"));

// 6. Validação inicial de entrada
if (hora < 0 || hora > 23) {
    alert("Horário Inválido");
} else if (prioridade < 1 || prioridade > 10) {
    alert("Nível de Prioridade Inválida");
} else {
    
    // 2. Definindo o turno
    let turno = "";
    if (hora >= 0 && hora <= 11) {
        turno = "Manhã";
    } else if (hora >= 12 && hora <= 17) {
        turno = "Tarde";
    } else if (hora >= 18 && hora <= 23){
        turno = "Noite";
    }

    // Verificação de categorias de tarefas baseada nos turnos e prioridade
    
    // 5. Noite: Prioridade ao lazer
    if (turno === "Noite") {
        alert("TAREFA NÃO IMPORTANTE");
    } 
    // 3. Tarefa Crítica: Prioridade > 8 e (Manhã ou Tarde)
    else if (prioridade > 8 && (turno === "Manhã" || turno === "Tarde")) {
        alert("TAREFA CRÍTICA/URGENTE");
    } 
    // 4. Tarefa Importante: 7 <= Prioridade < 9 e (Manhã ou Tarde)
    else if (prioridade >= 7 && prioridade < 9 && (turno === "Manhã" || turno === "Tarde")) {
        alert("TAREFA IMPORTANTE");
    } 

}

