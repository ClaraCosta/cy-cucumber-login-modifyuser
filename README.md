<h1>Login e alteração de usuário</h1> 

### Cypress, Javascript e Gherkin

#### Respositório destinado a apresentação de um projeto pressoal introdutório, utilizando Cypress, Javascript e CUCUMBER.

---

### O que a automação faz?

##### Feature 1 - Login no site (`login.feature`)
- É acessado um site open source;
- Efetuado o login;

##### Feature 2 - Modificação de usuário cadastrado (`editUser.feature`)
- Com o usuário logado no mesmo site da Feature 1;
- É selecionada a dasboeard de usuários cadastrados;
- Selecionado um dos usuário cadastrados;
- É modificado seu nome (username);
- Modificada sua senha;
- As configurações são salvas

---

### Recursos utilizados

#### Instalação Cypress

##### Passo 1 - Iniciar um projeto
~~~javascript
npm init -y
~~~

##### Passo 2 - Instalar o Cypress
~~~javascript
npm install cypress --save-dev
~~~

---

#### Instalação CUCUMBER

##### Passo 1 - Instalar os plugins necessários
1. Execute os seguintes comandos para instalar o Cypress e o plugin `cypress-cucumber-preprocessor`:
~~~javascript
npm install cypress --save-dev
npm install cypress-cucumber-preprocessor --save-dev
~~~

##### Passo 2 - Configurar o Cypress
1. Editar o arquivo de configuração do Cypress (`cypress.config.js` ou `cypress.json`):
~~~javascript
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
~~~
2. Adicionar configuração no `package.json`:
~~~javascript
{
  "cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/step_definitions/"
  }
}
~~~

---





