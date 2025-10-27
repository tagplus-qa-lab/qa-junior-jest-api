# Documentação do Projeto de Testes Automatizados para GoRest

Índice
1. [Desenvolvedora](#desenvolvedora)
2. [Tecnologias utilizadas](#1-tecnologias-utilizadas)
3. [Configuração para rodar o projeto](#2-configuração-para-rodar-o-projeto)
4. [Repositórios Jest e Playwright](#3-por-que-existem-repositórios-com-playwright-e-jest)
5. [Outras documentações](#4-outras-documentações)
6. [Versionamento, code review e padronização](#5-versionamento-code-review-e-padronização-git)
7. [Agradecimentos](#agradecimentos)

---

## Desenvolvedora

<table>
  <tr>
    <td align="center"><a href="https://github.com/AlineEspindola"><img src="https://avatars.githubusercontent.com/AlineEspindola" width="80px;" alt="Aline Espindola"/><br /><sub><b>Aline Espindola</b></sub></a><br /><a href="#" title="Code">💻🎨</a></td>
  </tr>
</table>

---

## 1. Tecnologias utilizadas

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)  
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)  
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=.env&logoColor=black)  
![AJV](https://img.shields.io/badge/AJV-22B573?style=for-the-badge&logo=json&logoColor=white)  
![Chance.js](https://img.shields.io/badge/Chance.js-FF69B4?style=for-the-badge&logo=javascript&logoColor=white)

---

## 2. Configuração para rodar o projeto

> Antes de iniciar, **certifique-se de ter o Node instalado**.  

1. Clonar o repositório:  
```bash
git clone https://github.com/tagplus-qa-lab/qa-junior-jest-api.git
cd qa-junior-jest-api
```

2. Copiar o arquivo de exemplo de variáveis de ambiente:  
```bash
cp .env.example .env
```
> Esse arquivo já vem configurado com o link padrão do site GoRest, utilizado nos testes automatizados.
> Caso queira validar outro ambiente (como o de homologação ou produção), basta editar o valor da variável BASE_URL dentro do arquivo .env e inserir o novo endereço.

3. Criar token no seu **.env**. Você gera a partir do site do [GoRest](https://gorest.co.in)
```bash
GOREST_TOKEN=Seu Token
```

4. Instalar as dependências do projeto:  
```bash
npm i
```

5. Executar todos os testes:  
```bash
npm test
```

## 3. Por que existem repositórios com Playwright e Jest?

Embora este projeto tenha repositórios com **Playwright API** e **Jest API**, ambos são utilizados **apenas para testes de integração**.  

- **Playwright**: utilizado inicialmente para validação de fluxo completo de APIs, mas sua principal força é em testes E2E com UI. Para testes de integração de backend, ele acaba sendo mais pesado e menos prático.  

- **Jest**: é a ferramenta **preferida para testes de integração** neste projeto, pois oferece:
  - Execução **mais rápida** de testes de APIs e funções isoladas.  
  - Manutenção mais prática, sem depender de navegador ou UI.

### 💡 Multi-habilidade em ferramentas

Ter repositórios com ambas as ferramentas demonstra **versatilidade** e conhecimento em diferentes stacks de teste.  
Além de Jest e Playwright, a experiência em frameworks como `pytest` reforça a capacidade de escolher a ferramenta certa para cada tipo de teste, garantindo eficiência e cobertura adequada.

---

## 4. Outras Documentações

No projeto, algumas documentações adicionais estão disponíveis para referência e melhor organização dos testes e funcionalidades.  

### Testes de Integração

- Toda a documentação referente aos **testes automatizados de integração** está localizada na pasta `/docs`.

---

## 5. Versionamento, Code Review e Padronização Git

- Controle de versão: Git + GitHub  
- Versão inicial: 1.0.0  
  - Todos requisitos cumpridos e documentados
- Todas as alterações foram commitadas e revisadas via pull request para manter a consistência do código, além de usar o Kanban para fins de organização de tarefas.

### Padrões de Desenvolvimento

#### 📂 Estrutura de Branches

Adotei o seguinte padrão:

- **jest-api-[id-da-tarefa]/**

### ✅ Commits Semânticos

Utilizei o padrão **Conventional Commits** para manter o histórico limpo e informativo:

📌 **Nota:** Escrevo os verbos no **imperativo**. Isso descreve o que o commit faz, como uma instrução ou comando, por exemplo: _"Adiciona", "Corrige", "Ajusta"_.

| Tipo       | Descrição                                            | Exemplo de Mensagem                            |
| ---------- | ---------------------------------------------------- | ---------------------------------------------- |
| `feat`     | Adição de nova funcionalidade                        | `feat(jest-api-12): adiciona mock do usuário`            |
| `fix`      | Correção de bugs                                     | `fix(jest-api-14): corrige erro de exibição dos dados dos posts`            |
| `docs`     | Atualização ou criação de documentação               | `docs(jest-api-12): atualiza README com padrões`            |
| `refactor` | Refatorações de código sem mudanças de comportamento | `refactor(jest-api-12): simplifica lógica do utils`       |
| `test`     | Adição ou atualização de testes                      | `test(jest-api-13): adiciona testes para componente Header` |
| `chore`    | Atualizações gerais (ex.: dependências, build)       | `chore(jest-api-54): atualiza versão do Playwright`       |
| `perf`     | Melhorias de performance                             | `perf(jest-api-12): otimiza carregamento de dados`          |
| `revert`   | Reversão de um commit anterior                       | `revert(jest-api-11): remove validação do nome do usuário`            |

---

## Agradecimentos

Gostaria de agradecer a **TagPlus** pela oportunidade de participar deste processo seletivo.  
Agradeço também a todos que irão avaliar o projeto, revisar código e fornecer feedbacks valiosos.

Foi uma experiência enriquecedora aplicar boas práticas de desenvolvimento e testes automatizados neste projeto.




