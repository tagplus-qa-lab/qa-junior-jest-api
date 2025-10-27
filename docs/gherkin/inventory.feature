Feature: Inventário
  Como usuário logado
  Quero adicionar produtos ao carrinho
  Para verificar se a quantidade de produtos no carrinho é atualizada corretamente

  Scenario: Adição de Produtos no Carrinho Válida
    Given que o usuário está logado com sucesso
    And está na página de inventário
    When ele adiciona 3 produtos aleatórios ao carrinho
    Then o contador do carrinho deve mostrar "3" produtos