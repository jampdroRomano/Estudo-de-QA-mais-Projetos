// Código com erro
function somar(num1, num2){
  
    return num1 + num2; // Aqui não tem validação: se um dos parâmetros não for número, ele só concatena (ex: 2 + "2dois" vira "22dois")
}

resultado = somar(2, "2dois") // Passa string junto com número, o resultado vai ser concatenação, não soma

console.log(resultado) // Saída: "22dois" (não o esperado 4)

// Código corrigido
function somar(num1, num2){

    // Validação para garantir que ambos os argumentos são números
    if(typeof num1 !== "number" || typeof num2 !== "number" ) {
        return "Erro: Precisa inserir um número"; // Retorna erro ao detectar parâmetro inválido
    }
    
    return num1 + num2; // Só chega aqui se os dois forem números, então soma funciona corretamente
}

resultado = somar(2, 2) // Passa números válidos

console.log(resultado) // Saída: 4 (correto)
