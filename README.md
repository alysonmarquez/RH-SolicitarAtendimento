## **Descrição Geral**

Este script foi desenvolvido para configurar de forma dinâmica a exibição e ocultação de campos em formulários baseados em escolhas do usuário. Ele utiliza as variáveis `data` (dados dinâmicos preenchidos pelo usuário) e `schema` (definição dos campos do formulário) para manipular a interface do usuário. Além disso, ele redireciona para diferentes páginas dependendo da seleção feita pelo usuário.

---

## **Estrutura do Código**

### **Funções Genéricas**

1. **`ocultarCampos(campos)`**  
   Esconde os campos especificados no array `campos`.  
   - **Parâmetros**:  
     `campos` (array): Lista dos nomes dos campos a serem ocultados.  
   - **Lógica**: Altera a propriedade `hide` para `true` no objeto `schema`.

2. **`exibirCampos(campos)`**  
   Exibe os campos especificados no array `campos`.  
   - **Parâmetros**:  
     `campos` (array): Lista dos nomes dos campos a serem exibidos.  
   - **Lógica**: Altera a propriedade `hide` para `false` no objeto `schema`.

---

### **Funções Específicas**

Cada função configura a lógica de exibição/ocultação de campos com base em valores específicos inseridos pelo usuário nos formulários. Aqui estão as principais:

1. **Transferência Entre Empresas (`configurarTransferenciaEntreEmpresas`)**
   - Oculta ou exibe o campo `txtINFORME_RH_CLIENTE_ALOCADO` com base na resposta à pergunta sobre alocação em outra empresa.

2. **Enquadramento PCD (`configurarEnquadramentoPCD`)**
   - Oculta ou exibe o campo `txtNOME_COMPLETO_USUARIO_PCD` com base no enquadramento do colaborador como PCD.

3. **Solicitação de PPP (`configurarSolicitacaoPPP`)**
   - Lida com campos relacionados a mudanças de cargo e acidentes de trabalho para solicitação de PPP.
   - Exemplo: Exibe o campo para descrição do cargo anterior se o usuário indicar mudança de cargo.

4. **Solicitação de Crachá (`configurarSolicitacaoCracha`)**
   - Gerencia a exibição dos campos com base no tipo de pedido de crachá e envio.

5. **Alteração de Escala de Horário (`configurarPontoEscalaHorario`)**
   - Configura a exibição de campos de escala de horário, dependendo do ciclo selecionado.

6. **Dúvida/Orientação sobre Ponto (`configurarPontoDuvidaOrientacao`)**
   - Exibe links e campos específicos dependendo da escolha do usuário sobre dúvidas de marcação de ponto.

7. **Informar Acidente de Trabalho (`configurarSegurancaAcidenteTrabalho`)**
   - Gerencia campos relacionados a acidentes de trabalho, como primeiro atendimento e testemunhas.

---

### **Redirecionamento de Páginas**

No final do script, há um redirecionamento baseado na escolha do usuário no campo `sltESCOLHA_TIPO_ATENDIMENTO`. Dependendo da escolha, a função `goToAndFinalPage(númeroDaPágina)` é chamada para navegar para a página correspondente.

---

### **Execução Central**

As funções específicas são chamadas em sequência para configurar os formulários:
```javascript
configurarTransferenciaEntreEmpresas();
configurarEnquadramentoPCD();
configurarSolicitacaoPPP();
configurarSolicitacaoCracha();
configurarPontoDuvidaOrientacao();
configurarPontoEscalaHorario();
configurarSegurancaAcidenteTrabalho();
```

Em seguida, há a lógica de redirecionamento para diferentes páginas, com base no valor selecionado pelo usuário.

---

## **Como Documentar no Git**

1. **Título do Repositório:**  
   `Form Dynamic Fields Management`

2. **Descrição do Repositório:**  
   Este repositório contém o código para gerenciamento dinâmico de exibição e ocultação de campos em formulários com base na interação do usuário. Inclui redirecionamento para páginas específicas.

3. **Estrutura do README:**
   - **Introdução**: Descreva o propósito do script.
   - **Dependências**: Explique o uso de objetos `data` e `schema`.
   - **Estrutura do Código**: Liste e explique as funções genéricas e específicas.
   - **Execução**: Explique como o código é executado (ordem das funções e redirecionamento).
   - **Exemplo de Uso**: Mostre um exemplo básico.

4. **Exemplo de README.md**:

```markdown
# Form Dynamic Fields Management

## Introdução
Este projeto foi desenvolvido para gerenciar de forma dinâmica a exibição e ocultação de campos em formulários, baseado nas escolhas feitas pelos usuários. Ele também inclui uma funcionalidade para redirecionar a diferentes páginas conforme a interação do usuário.

## Dependências
- `data`: Contém os valores inseridos pelo usuário no formulário.
- `schema`: Define os campos do formulário e suas propriedades.

## Funcionalidades
1. **Exibir/Ocultar Campos Dinamicamente**: 
   - `ocultarCampos(campos)`: Esconde os campos especificados.
   - `exibirCampos(campos)`: Exibe os campos especificados.

2. **Configuração de Formulários**:
   - Transferência entre empresas.
   - Enquadramento PCD.
   - Solicitação de PPP, crachá, e dúvidas sobre ponto.

3. **Redirecionamento**:
   - Navegação para diferentes páginas com base na escolha do usuário.

## Como Usar
1. Insira os valores no objeto `data` de acordo com as interações do usuário.
2. Defina os campos no `schema`.
3. Execute as funções para configurar os formulários.

## Exemplo de Código
```javascript
configurarTransferenciaEntreEmpresas();
configurarEnquadramentoPCD();
configurarSolicitacaoPPP();
configurarSolicitacaoCracha();
configurarPontoDuvidaOrientacao();
configurarPontoEscalaHorario();
configurarSegurancaAcidenteTrabalho();
```

## Contribuição
Sinta-se à vontade para contribuir com melhorias e novas funcionalidades.
```
