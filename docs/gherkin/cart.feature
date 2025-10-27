Feature: Carrinho de Compras
  Como usuário do SauceDemo
  Quero gerenciar meu carrinho
  Para remover itens ou finalizar uma compra

  Scenario: Carrinho Válido
    Given que o usuário está logado com sucesso
    And está na página do carrinho
    When ele verifica se existem itens no carrinho
    And caso não existam, adiciona 3 produtos aleatórios
    And remove 1 item do carrinho
    Then o carrinho deve exibir a quantidade correta de produtos

  Scenario: Compra Válida
    Given que o usuário está logado com sucesso
    And está na página do carrinho
    When ele verifica se existem itens no carrinho
    And caso não existam, adiciona 3 produtos aleatórios
    And finaliza a compra preenchendo os dados:
      | Nome      | Sobrenome | CEP       |
      | João      | Souze     | 88312-000 |
    Then ele deve ver a mensagem de sucesso "Thank you for your order!"