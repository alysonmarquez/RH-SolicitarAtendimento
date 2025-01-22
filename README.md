Descrição Geral
O script é responsável por configurar e manipular campos visuais de um formulário com base em variáveis de entrada. Ele utiliza funções genéricas para ocultar ou exibir campos e configurações específicas para diferentes cenários, como transferência entre empresas, enquadramento PCD, solicitações diversas e situações de segurança do trabalho.

Estrutura do Código
Funções Genéricas:

ocultarCampos(campos): Oculta uma lista de campos, alterando a propriedade hide do objeto schema para true.
exibirCampos(campos): Exibe uma lista de campos, alterando a propriedade hide do objeto schema para false.
Configurações Específicas: Cada funcionalidade do sistema possui uma função dedicada para configurar o comportamento dos campos com base nos valores das variáveis de entrada (armazenadas no objeto data).

Cenários Configurados:

Transferência entre Empresas: Exibe ou oculta campos relacionados ao RH do cliente alocado com base na seleção.
Enquadramento PCD: Configura a visibilidade do campo relacionado ao nome do usuário PCD.
Solicitação de PPP: Controla campos baseados em mudanças de cargo e acidentes de trabalho.
Solicitação de Crachá: Configura a visibilidade de campos relacionados ao pedido e tipo de envio.
Alteração de Escala de Horário: Exibe campos para ciclos de escala específicos.
Dúvidas e Orientações sobre Ponto: Exibe links ou opções baseados no tipo de dúvida selecionada.
Informar Acidente de Trabalho: Configura campos para testemunhas e atendimento inicial.
Execução Geral: No final do código, todas as funções de configuração são chamadas para garantir que os campos sejam ajustados conforme necessário.

Explicação do Fluxo
Entrada de Dados: O objeto data armazena os valores das seleções feitas no formulário. Com base nesses valores, os campos são exibidos, ocultados ou ajustados.

Manipulação de Campos: O objeto schema representa a estrutura do formulário, onde cada campo pode ser modificado por meio das propriedades hide (visibilidade) e required (obrigatoriedade).

Modularidade: Cada cenário possui sua própria função, facilitando a manutenção e a expansão do código. As funções genéricas (ocultarCampos e exibirCampos) evitam duplicação de lógica.

Possíveis Melhorias
Validação de Dados:

Adicionar verificações para garantir que os campos listados em campos realmente existam no objeto schema antes de tentar manipulá-los.
Centralização de Configurações:

Criar um mapeamento central para associar valores das variáveis às ações nos campos, reduzindo a necessidade de múltiplas funções.
Documentação Interna:

Adicionar comentários explicativos em cada função para descrever o objetivo de cada configuração específica.
Automação de Testes:

Implementar testes para verificar o comportamento do script em diferentes cenários de entrada, garantindo a funcionalidade correta.
Como Usar
Insira o código no ambiente do projeto onde as variáveis data e schema sejam acessíveis.
Certifique-se de que os nomes dos campos nos arrays correspondem aos nomes no objeto schema.
Chame as funções no momento adequado (por exemplo, em eventos como alteração de seleção no formulário).
