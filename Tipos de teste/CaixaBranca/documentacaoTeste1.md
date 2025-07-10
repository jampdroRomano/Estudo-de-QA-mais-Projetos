
# Teste de Caixa Branca - Validação de Tipos na Função `somar`

---

##  Cenário

---
 A função `somar(num1, num2)` realiza uma soma direta entre dois parâmetros.

#### Problema Identificado
+ Quando um dos parâmetros é uma string, o JavaScript realiza uma concatenação,
+ resultando em um valor incorreto.

+ somar(2, "2dois"); // Resultado: "22dois"

**Esse problema não é identificado se o código não validar o tipo de dado inserido.**

#### Tipo de Teste
- Teste de Caixa Branca: a falha foi identificada a partir da análise da lógica interna da função.
- Observou-se a ausência de uma verificação de tipo (validação com typeof) antes de executar a soma.

#### Solução aplicada
- Foi adicionada uma verificação condicional para garantir que os dois valores sejam do tipo number:


```js
function somar(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Erro: Precisa inserir um número";
    }
    return num1 + num2;
}
```

#### Resultado Esperado
+ Chamadas com entradas inválidas agora retornam uma mensagem de erro controlada, evitando comportamentos inesperados:

+ somar(2, "2dois"); // Resultado: "Erro: Precisa inserir um número"

#### Conclusão
Esse é um exemplo clássico de teste de caixa branca, onde a análise do código-fonte que permitiu detectar e corrigir um erro de lógica relacionado à tipagem de dados.

