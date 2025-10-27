Feature: Login de usuário
  Como usuário do SauceDemo
  Quero fazer login no sistema
  Para acessar a página de inventário e realizar compras

  Scenario: Login válido
    Given que o usuário está na página de login
    When ele informa o usuário "standard_user" e a senha "secret_sauce"
    And clica no botão "Login"
    Then ele deve ser redirecionado para a página "https://www.saucedemo.com/inventory.html"

  Scenario: Login inválido
    Given que o usuário está na página de login
    When ele informa o usuário "standard_user" e a senha incorreta "password_wrong"
    And clica no botão "Login"
    Then ele deve ver a mensagem de erro "Epic sadface: Username and password do not match any user in this service"