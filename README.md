# Documentação do Projeto de Testes Automatizados para GoRest

## 👥 Desenvolvedora

<table>
  <tr>
    <td align="center"><a href="https://github.com/AlineEspindola"><img src="https://avatars.githubusercontent.com/AlineEspindola" width="80px;" alt="Aline Espindola"/><br /><sub><b>Aline Espindola</b></sub></a><br /><a href="#" title="Code">💻🎨</a></td>
  </tr>
</table>

---

## 1. Configuração para rodar o projeto

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
GOREST_TOKEN="Seu Token"
```

4. Instalar as dependências do projeto:  
```bash
npm i
```

5. Executar todos os testes:  
```bash
npm test
```

---

## 🙏 Agradecimentos

Gostaria de agradecer a **TagPlus** pela oportunidade de participar deste processo seletivo.  
Agradeço também a todos que irão avaliar o projeto, revisar código e fornecer feedbacks valiosos.

Foi uma experiência enriquecedora aplicar boas práticas de desenvolvimento e testes automatizados neste projeto.




