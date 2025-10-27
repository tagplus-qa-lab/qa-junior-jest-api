# Documentação de Testes E2E - SauceDemo

## Índice
1. [Login](#login)
2. [Inventário](#inventário)
3. [Carrinho](#carrinho)

---

## Login

### TC-LOGIN-001: Login válido
**Objetivo:** Validar que o usuário consegue logar com credenciais corretas.  

**Pré-condição:**  
- Usuário cadastrado no sistema: `standard_user / secret_sauce`.  
- Acessar a página de login: `https://www.saucedemo.com/`.  

**Passos:**  
1. Preencher campo de usuário e senha com credenciais válidas.  
2. Clicar em "Login".  

**Resultado esperado:**  
- O sistema redireciona para a página de inventário:  
  `https://www.saucedemo.com/inventory.html`.

---

### TC-LOGIN-002: Login inválido
**Objetivo:** Validar que o sistema apresenta mensagem de erro ao tentar logar com credenciais incorretas.  

**Pré-condição:**  
- Usuário cadastrado: `standard_user`.  
- Acessar a página de login.  

**Passos:**  
1. Preencher campo de usuário com `standard_user` e senha incorreta `password_wrong`.  
2. Clicar em "Login".  

**Resultado esperado:**  
- Exibir mensagem de erro visível:  
  `"Epic sadface: Username and password do not match any user in this service"`.

---

## Inventário

### TC-INVENTORY-001: Adição de Produtos no Carrinho Válida
**Objetivo:** Validar que o usuário consegue adicionar produtos ao carrinho e que a quantidade é exibida corretamente.  

**Pré-condição:**  
- Usuário logado com sucesso.  
- Acessar a página de inventário.  

**Passos:**  
1. Adicionar 3 produtos aleatórios ao carrinho.  
2. Verificar se o contador do carrinho mostra o número correto de produtos (`3`).  

**Resultado esperado:**  
- Carrinho atualizado com 3 produtos.  

---

## Carrinho

### TC-CART-001: Carrinho Válido
**Objetivo:** Validar que o usuário consegue visualizar e remover itens do carrinho.  

**Pré-condição:**  
- Usuário logado com sucesso.  
- Acessar a página do carrinho.  

**Passos:**  
1. Verificar se existem itens no carrinho.  
   - Caso não existam, adicionar 3 produtos aleatórios.  
2. Remover 1 item do carrinho.  

**Resultado esperado:**  
- O carrinho deve exibir a quantidade correta de produtos após remoção.  

---

### TC-CART-002: Compra Válida
**Objetivo:** Validar o fluxo completo de finalização de compra no carrinho.  

**Pré-condição:**  
- Usuário logado com sucesso.  
- Acessar a página do carrinho.  

**Passos:**  
1. Verificar se existem itens no carrinho.  
   - Caso não existam, adicionar 3 produtos aleatórios.  
2. Finalizar a compra preenchendo dados:  
   - Nome: `João`  
   - Sobrenome: `Souze`  
   - CEP: `88312-000`  

**Resultado esperado:**  
- Exibir mensagem de sucesso da compra:  
  `"Thank you for your order!"`.
