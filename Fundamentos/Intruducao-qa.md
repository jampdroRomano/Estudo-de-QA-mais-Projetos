## O que é o controle de qualidade✅
+ Quão bem atende às necessidades e expectativas do cliente
+ Funcionalidade: faz o que se espera que faça
+ Design: Intuitivo, estético, fácil de usar
+ Confiabilidade: Funciona corretamente em diferentes contextos
+ Durabilidade:
+ Preço:

## Garantia✅
+ garantia -> Atende às suas expectativas
            -> Funciona corretamente
            -> Não apresenta problemas

## Teste de software✅
+ Garantir a qualidade de um produto antes que ele chegue aos usuários finais

## Objetivo principal✅
+ Prevenir erros no desenvolvimento e em produção (quando chega aos clientes)

## Características chave do QA✅
+ É um processo preventivo
+ Focado em processos
+ Garante confiança no produto

## Diferenças entre QA e Teste✅
QA -> Processo Preventivo, garante a qualidade. Teste -> Atividade para encontrar defeitos
QA -> Processos padrão. Teste -> No produto final
QA -> Melhora o ciclo de desenvolvimento. Teste -> Verifica se o produto atende aos requisitos

## Mentalidade de QA (Garantia de Qualidade)✅
+ Prevenir antes de corrigir
+ Atenção aos detalhes
+ Pensamento crítico
+ Abordagem colaborativa
+ Mentalidade de melhoria contínua

## Como desenvolver essa mentalidade? ✅
+ Compreender o negócio e o usuário final
+ Adotar padrões de qualidade
+ Devemos fazer perguntas
+ Ser proativo
+ Usar ferramentas e métricas

## Teste de caixa branca - White box testing✅
+ Abordagem de teste onde o código-fonte é testado

## Teste de caixa preta - Black Box testing ✅
+ Funcionalidade sem conhecer o código-fonte

## Teste de caixa cinza - Gray Box Testing✅
+ Acesso parcial ao sistema
+ Centrado nas entradas e saídas em alguns aspectos internos do sistema
Exemplos:
Início de sessão -> após 3 tentativas, bloqueia
Revisar o banco de dados: Usuário Bloqueado, hora de bloqueio: 12:00:12

## Oráculos de Teste✅
+ São fontes de verdade que nos permitem determinar se os resultados estão corretos ou não.
+ O oráculo define qual deve ser o comportamento.

Exemplo:
Busca de OpenAI no Google, o primeiro resultado deve ser um link que leve a openai.com

## O que é Priorização de Testes?✅
+ É uma estratégia na qual você atribui uma ordem aos testes
+ Uma ordem em função de sua importância, impacto, urgência
+ Ajuda a garantir que os casos mais valiosos sejam executados primeiro

## Objetivos principais da Priorização de Testes✅
+ Executar testes com maior impacto
+ Detectar erros críticos
+ Maximizar o valor dos testes

## Critérios para priorizar testes✅
+ Frequência de uso
+ Impacto do erro
+ Probabilidade de falha
+ Requisitos do cliente
+ Dependências

Exemplo:
Testando a funcionalidade de busca do Google
+ uma barra de busca
+ resultados com links e títulos
+ filtros como imagens, vídeos, etc.

Listar casos de teste

## UAT - Teste de aceitação pelo usuário
Objetivos:
1. Validar os requisitos
2. Simular um ambiente real
3. Detectar problemas
4. Obter aprovação

Características
1. Centrado no usuário final
2. Baseado em cenários reais
3. Ambientes separados

Exemplo prático:
Cenário: Nova funcionalidade de busca avançada, permite filtrar resultados por data, tipo de conteúdo e localização.

Fase 1: Preparação
Identificar usuários: Estudantes, pesquisadores, jornalistas
Definir requisitos:
- filtro de data
- todo tipo de conteúdo
- localização geográfica

Desenhar os casos de teste:
caso1: Realizar uma busca sem filtros -> Verificar os resultados mais relevantes APROVADO
caso2: aplicar filtro "última semana" -> Verificar que os resultados estejam dentro do intervalo APROVADO
caso3: Combinar tipo: imagens, localização: Espanha -> Verificar que os resultados estejam dentro do intervalo de localização e de tipo APROVADO
caso4: Tentar buscas inválidas Ex. caracteres especiais -> Verificar se lida com esses caracteres com uma mensagem clara. FALHOU

Fase2: Execução dos testes
1. Preparar o ambiente de teste
2. Executar
3. Coletar o feedback

Fase 3: Resultados da UAT
resultado esperado: todas as funções atendem aos requisitos
o sistema responde rapidamente

Erros encontrados:
- O filtro de localização não funciona corretamente
- Os resultados da última semana incluem artigos mais antigos
- caso4: Tentar buscas inválidas Ex. caracteres especiais -> Verificar se lida com esses caracteres com uma mensagem clara. FALHOU

Fase 4: Aprovação
Uma vez corrigidos os erros e confirmada a funcionalidade -> Luz verde para a implantação em produção


## Teste Exploratório
Não conhece bem o sistema
+ Sem roteiro. Não requer casos de teste
+ Criatividade e análise crítica
+ Adaptação
+ Documentação posterior

demo:
- Explorar o funcionamento da barra de busca do Google
Testes iniciais.

Teste 1: Consulta válida no buscador
resultado atual: o buscador retorna resultados corretos ao realizar consultas válidas
resultado esperado: o buscador deve retornar os resultados corretos na caixa de busca
bug:

teste 2: teste com entradas inválidas
Resultado atual: o buscador retorna resultados corretos ao inserir caracteres especiais

teste 3: Interações com a interface
Resultado atual: as opções da interface estão funcionando corretamente

teste 4: Problemas de conexão de internet
Resultado atual: responde bem quando não temos conexão com a internet

## Teste de Sanidade
O Teste de Sanidade é um tipo de teste de software que é realizado após uma correção de erros ou pequenas alterações no código.

Características do Teste de Sanidade
+ Focado em funcionalidades específicas:
+ Rápido e não exaustivo:
+ É realizado manualmente:
+ Complemento do Teste de Regressão:

Demo testes:

Testes básicos do autocompletar:
Passo 1: Digite a palavra "clima" na barra de busca.
Resultado esperado: Devem ser mostradas sugestões relacionadas como "clima hoje", "clima em Madrid", etc.
Resultado obtido: ✅ As sugestões aparecem corretamente.

Passo 2: Digite um termo incompleto como "tecnolog".
Resultado esperado: Devem ser mostradas sugestões como "tecnologia", "tecnologias modernas", etc.
Resultado obtido: ✅ As sugestões são geradas adequadamente.

## O que é Teste de Regressão?
Verifica se as mudanças recentes no código (como correções de erros, atualizações ou novas funcionalidades) não afetaram negativamente as partes já existentes do sistema.

Características do Teste de Regressão
+ Cobertura ampla:
+ Reutilização de casos de teste:
+ Frequente e automatizável:
+ Foco na integridade:

Funcionalidade: Realizar uma busca básica
Passo 1: Abra o Google e digite "notícias".
Resultado esperado: Aparecem resultados relevantes relacionados com "notícias".
Resultado obtido: ✅ Os resultados aparecem corretamente.

Funcionalidade: Verificar o autocompletar
Passo 1: Digite "clima" na barra de busca.
Resultado esperado: Aparecem sugestões relacionadas com o termo "clima".
Resultado obtido: ✅ O autocompletar funciona como esperado.

Funcionalidade: Mudar configuração de idioma
Passo 1: Mude o idioma da página para francês.
Passo 2: Digite "météo" (clima em francês).
Resultado esperado: Aparecem sugestões e resultados relevantes em francês.
Resultado obtido: ✅ Os resultados e sugestões aparecem corretamente no idioma selecionado.

## Teste de Fumaça
Uma aplicação funciona corretamente após uma nova compilação ou atualização.

Teste 1: Verificar se a página carrega corretamente (o logotipo do Google e a caixa de busca estão visíveis).
Teste 2: Verificar se é permitido buscar por imagens

## Teste Unitário
Os testes unitários são um tipo de teste de software que verifica de forma isolada se uma unidade funcional específica do seu código

Características principais:
Isoladas:
Rápidas:
Automatizadas:

Vantagens:
Detectam erros
Facilitam a manutenção e a refatoração.
Documentam o comportamento esperado das funções.

## Teste de Carga
É um tipo de teste de desempenho que é realizado para determinar como uma aplicação lida com uma quantidade específica de usuários

Por que o Teste de Carga é importante?
Verificar o desempenho sob cargas esperadas.
Identificar gargalos na infraestrutura.
Prevenir falhas durante picos de tráfego.
Garantir a experiência do usuário mesmo com alta demanda.

Como realizar Teste de Carga
+ Identifica os cenários www.wikipedia.org
+ Define a carga esperada | 20


## Teste de Segurança
O Teste de Segurança é um tipo de teste de software projetado para identificar vulnerabilidades, ameaças ou riscos em uma aplicação ou sistema.

Objetivo do Teste de Segurança
+ Identificar vulnerabilidades:
+ Prevenir acessos não autorizados:
+ Proteger dados sensíveis:
+ Garantir a continuidade do sistema:
+ Cumprir com regulamentações:

Áreas chave do Teste de Segurança
+ Confidencialidade:
+ Integridade:
+ Autenticação:
+ Autorização:
+ Disponibilidade:
+ Não repúdio:

Tipos de Teste de Segurança
+ Análise de Vulnerabilidades:
+ Teste de Penetração:
+ Hacking Ético:
+ Avaliação de Risco:
+ Auditoria de Segurança:
+ Postura de Segurança:

Ferramentas comuns para Teste de Segurança
+ OWASP ZAP (Zed Attack Proxy):
+ Burp Suite:
+ Nmap:
+ Metasploit:
+ Nikto:
+ Wireshark:

Como realizar Teste de Segurança
1. Identificar objetivos
2. Analisar possíveis ameaças
3. Configurar ferramentas
4. Realizar testes manuais
5. Avaliar e mitigar riscos

Demo OWASP ZAP


## O que é Teste de Acessibilidade?
O Teste de Acessibilidade é um tipo de teste de software projetado para garantir que uma aplicação, site ou sistema seja acessível para todos os usuários, incluindo aqueles com deficiências físicas, visuais, auditivas, cognitivas ou de outro tipo. Seu objetivo é garantir que pessoas com diferentes capacidades possam interagir com o sistema sem barreiras.

Como realizar Teste de Acessibilidade
1. Analisar o escopo:
Identifica as áreas críticas da aplicação (formulários, navegação, elementos multimídia).
Decide se o teste será manual, automatizado ou uma combinação de ambos.

2. Realizar testes manuais:
Navegue pela aplicação com um leitor de tela.
Use apenas o teclado para interagir com os elementos.
Avalie as mensagens de erro, botões e links para garantir que sejam claros e acessíveis.

3. Usar ferramentas automatizadas:
Execute uma análise de acessibilidade com ferramentas como Wave ou Axe para identificar problemas de acessibilidade básicos.

4. Validar cores e contraste:
Use verificadores de contraste para garantir que as cores sejam legíveis para pessoas com daltonismo ou visão reduzida.

5. Testar tecnologias de assistência:
Certifique-se de que a aplicação funcione bem com leitores de tela e outras tecnologias de assistência.

6. Gerar relatórios:
Documente as vulnerabilidades encontradas e classifique-as de acordo com sua severidade (baixa, média, alta, crítica).

7. Resolver problemas:
Trabalhe com desenvolvedores e designers para solucionar os problemas encontrados.

## Scrum
Scrum é uma estrutura de trabalho ágil (Agile) projetada para gerenciar projetos complexos

Componentes do Scrum
+ Papéis
    - Product Owner (Proprietário do produto)
    - Scrum Master (Facilita as práticas do Scrum)
    - Equipe de Desenvolvimento - Incrementos de produto
+ Artefatos
    - Product Backlog (Lista priorizada de tarefas) 90 Tarefas
    - Sprint Backlog (Lista de tarefas, mas do sprint) 10 Tarefas - 2 semanas
    - Incremento - Definition of Done (PO e Equipe - Entrega algo que está completo)
+ Eventos
    - Sprint (ciclo de trabalho geralmente dura 2 semanas)
    - Sprint Planning (Planejamento)
    - Daily Scrum (Reunião onde falamos sobre o andamento de nossas tarefas)
    - Sprint Review (Reunião onde revisamos como foi o sprint)
    - Sprint Retrospective (Reunião de reflexão)


Fluxo de Trabalho do Scrum
1. Criar o Product Backlog.
2. Planejar o Sprint: Selecionar elementos do Product Backlog e transferi-los para o Sprint Backlog.
3. Desenvolver durante o Sprint com reuniões diárias de sincronização.
4. Revisar o incremento na Sprint Review.
5. Melhorar o processo na Retrospectiva do Sprint.
6. Repetir o ciclo com um novo Sprint.


## QA MANUAL
Testes manualmente

Objetivos
+ Identificar defeitos
+ Verificar se o sistema atende ao esperado
+ Garantir a qualidade da interface e a usabilidade
+ Validar a qualidade em geral

Tipos de testes manuais
    + Testes funcionais
    + Testes de usabilidade
    + Teste de exploração
    + Testes de regressão
    + Testes de compatibilidade
    + Validação de dados

Passos do Teste Manual de QA
    1. Analisar os requisitos
    2. Preparar os casos de teste - (Cenários escritos para testar algo)
    3. Executar os casos de teste
        Verificar se a opção de teclado virtual funciona em buscas no Bing APROVADO
        Verificar se a opção de teclado virtual funciona em buscas no Bing FALHOU - Erro
        Verificar se a opção de teclado virtual funciona em buscas no Bing APROVADO
    4. Registro de resultados
    5. Revisão e acompanhamento
        Erro 1: A tecla enter do teclado virtual não está funcionando corretamente CORRIGIDO

Vantagens do QA Manual
    + Abordagem humana
    + Flexibilidade
    + Custo inicial é baixo
    + Ideal para testes exploratórios

Desvantagens do QA Manual
    + Propenso a erros humanos
    + Lento
    + Dificuldade para repetir testes

Ferramentas para QA manual
    + Jira
    + Testrail (gestão de casos de teste)
    + Postman
    + BrowserStack

## TDD - Desenvolvimento Orientado a Testes
Desenvolvimento guiado por testes

Princípios do TDD
    1. Escreva um teste que falhe:
    2. Escreva o código mínimo para passar no teste:
    3. Refatore o código:
    4. Repita:

Demo.

## Casos de Teste e Cenários
Descreve um fluxo que será testado

Características
    + São amplos
    + Descritivos
    + Para planejar

Caso de Teste
    + São específicos
    + Incluem passos claros
    + Responde à pergunta: Como testamos?

Exemplo prático de um caso de teste:
- Título: Testar se um usuário registrado pode adicionar um produto ao carrinho e completar a compra
- ID: IDTS001
- Pré-condição: O usuário está registrado
- Passos:
    1. Navegar para a página principal de www.supermarket.com
    2. Selecionar um produto
    3. Clicar em adicionar ao carrinho
    4. Ir para o carrinho
    5. Processar a compra
    6. Completar detalhes de pagamento
    7. Confirmar pedido
- Dados de teste: Produto laptop, método de pagamento cartão de crédito
- Resultado esperado: O pedido é realizado com sucesso e aparece uma confirmação na tela
                      Podemos baixar a fatura

Caso de teste e um cenário de teste
    - Cenário é de alto nível, o caso de teste é específico
    - Cenário identifica o que testar, Caso de teste descreve como testar
    - Cenário descreve a funcionalidade, Caso de teste inclui os passos, dados e resultado

TS1 Verificar se o usuário pode realizar compras
TS2 Verificar se o usuário pode cancelar sua compra


## Teste de Compatibilidade Manual
Permite verificar se um aplicativo funciona em diferentes ambientes

O que é Teste de Compatibilidade?
    + É o processo de verificar se um software interage com todos os outros sistemas ou ferramentas de maneira correta.
    + Sistemas operacionais
    + Todos os navegadores
    + Dispositivos (Celulares, tablets, PCs, laptops)
    + Resoluções (HD, Full HD, 2K, 4K)
    + Versões de hardware (Processadores, memória, armazenamento, etc.)
    + Redes (Wi-Fi, 4G, 5G, Baixa latência, etc.)
    + Versões de software relacionadas (Bibliotecas, APIs, bancos de dados)

Tipos de compatibilidade
    + Compatibilidade Direta
    + Compatibilidade Reversa

Importância da Compatibilidade
    + Experiência do usuário
    + Maior alcance de mercado
    + Redução de riscos
    + Cumprimento dos padrões

## Verificação vs Validação
São conceitos importantes

Verificação
Verificamos se o processo do software está sendo realizado de acordo com os requisitos
+ Estamos construindo o produto corretamente?

Características
    + Foca em revisar documentos
    + Implica atividades estáticas
    + Detecta erros precoces

Exemplo:
    Revisar o design do software para verificar se atende aos requisitos mínimos
    Inspecionar o código para garantir que atende às diretrizes de estilo

Validação
É o processo de garantir que atende às necessidades do usuário
+ Estamos construindo o produto certo?

Características
    + Foca em testar o software em execução
    + Executar código
    + Verificar se o software atende ao cliente

Exemplo:
    Realizar testes para verificar se a calculadora soma corretamente
    Testar a interface do usuário para que seja usável


## Planejamento de Testes
Planeja tudo o que se refere aos testes
- Preparar o plano detalhado
- Quem vai testar
- Como será testado
- Quais ferramentas serão usadas
- Como serão executados
- Quanto tempo levará

Por que o plano de testes é importante?
    + Define os objetivos dos testes
    + Evita atrasos e erros
    + Otimiza recursos
    + Minimiza riscos

Passos para realizar um plano de testes
    + Revisão dos requisitos
    + Definição de objetivos
    + Decidir a estratégia
    + Atribuição de recursos
    + Identificar os riscos
    + Documentação
    + Aprovação do plano de testes

