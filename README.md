# Semana Omnistack 11

Aplicação desenvolvida junto a semana omnistack 11, que visa, criar um site que registra casos que interessam a ONGs. Como exemplo um cachorro foi atropelado e essa ONG necessita recursos para pagar o tratamento.

# Be-The-Hero

## Primeiro dia.
### Conhecendo a OmniStack.

- Começando projeto em nodejs
   
        npm init -y

- Rodando projeto

        node index.js

- Instalar express

        npm install express

- importando express

    ```JS
    const express = require('express');
    const app = express();
    ``` 


- Abordagem Tradicional vs Abordagem SPA
- `NPM`: instala um pacote
- `NPX`:executa um pacote

## Segundo dia.
### Criando a base da aplicação

- **NodeJs e Express**
    - Rotas e recursos
    - Métodos HTTP:
        1. `GET`: buscar/listar uma informação do back-end
        2. `POST`: criar uma informação no back-end
        3. `PUT`: alterar uma informação no back-end
        4. `DELETE`: deletar uma informação no back-end
        - Tipos de Parametros:
            1. *Query Params:* Parâmetros nomeados enviados na rota após "?" (filtro, paginação); Ex: [http://localhost:3333/users?name=João](http://localhost:3333/users?name=Jo%C3%A3o)
            2. *Route Params:*  Parametros utilizados para identificar recursos.
            3. _Request Body:_ Corpo da requisição
- **Insomnia:** Explicação sobre esta ferramenta
- **Nodemon:**

        npm install nodemon -D 

    - -D, pois é uma dependência de desenvolvimento.
    - Diferenças entre banco de dados:
        1. SQL:MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL server.
        2. NoSQL: MongoDB, CouchDB, etc
- **Configurando banco de dados**
    1. Abordagem Driver: Utilizar linguagem SQL
    2. Abordagem Query Builder: Utilizar códigos JavaScript, para acessar informações do banco. Usando knex, que é instalado usando 
        
            npm install knex --save

        e utilzar Sqlite com SGBD, usando o comando 

                npm install sqlite3 

        tudo disponibilizado na [documentação do knex](http://knexjs.org/#Installation). Após isso, rodar 

            npx knex init

    3. Criação de um arquivo de rotas(routes.js), afim de desacoplar do arquivo index.

    - **Pensar nas entidades.**
        1. ONG
        2. Caso(Incident)
    - **Funcionalides.**
        1. Login de ONG
        2. Logout de ONG
        3. Cadastro de ONG
        4. Cadastrar novos casos
        5. Deletar casos
        6. Listar casos específicos de uma ONG
        7. Listar todos os casos.
        8. Entrar em contato com a ONG (WhatsApp, Email)
    - **knex**
        1. Acessar documentação sobre [knex migrations](http://knexjs.org/#Migrations)
        2. Acessar a parte sobre [criação de tabelas](http://knexjs.org/#Schema-ja).
        3. criar uma migration: 

                npx knex migrate:make name_table
        
        4. Ao terminar de configurar todos os bancos rodar: 

                npx knex migrate:latest

        5. Método **up** do arquivo criado ao rodar o comando acima, serve para criar tabelas.

        6. Método **down** usado para deletar tabelas

- **Construção do backend**
- **Adicionando módulos**
- **Upar para GitHub**

## **Terceiro dia**
### Construindo a interface WEB
- **Iniciar projeto**
    - Instalando o comando de forma global

            npm install -g create-react-app

    - Criando projeto

            create-react-app frontend

- **Limpando estruturas**
- **Conceitos React**
    1. Componentes: É uma função que retorna HTML.
    2. JSX: (JavaScript XML)Scripts HTML dentro do JavaScrit
    3. Propriedades: São argumentos padrões que são passados como parâmetros para funções no React.
    4. Estado: Inicialização de uma variavel qualquer
    5. Imutabilidade: No react, para alterar o valor de uma variavel é preciso guardar em um estado.
- **Pagina de Login**
- **Configurar rotas**
- **Cadastro de ONGs**
- **Listagem de casos**
- **Cadastro de novo caso**
- **Conectando aplicação a API**
    -Na pasta do backend, fazer instalação do `cors`, rodando:
            
        npm install cors

- **Upar pro GitHub**

## Quarto dia
### Desenvolvendo o App Mobile

- **Instalação do Expo**

        sudo npm install -g expo-cli

- **Criação de projeto React Native**

        expo init mobile

- **Executando projeto**
    1. No celular
    2. Emulador
    3. Plataforma On-line: Expo Snack
- **Diferenças em relação ao ReactJS**
    1. Elementos HTML
        - Não utiliza tags HTML
    2. Semântica
        - `<View />`: para quaisquer containers;
        - `<Text />`: para elementos textuais;
        - Não existe hierarquia de tag
    3. Estilização
        - Flexbox: Já vem `display:flex`, por padrão para todos os elementos.
        - Propriedades: As estilizações como por exemplo `background-color: #FFF` do CSS, muda no React Native, pois as estilizações são passadas como objeto. Este comando por exemplo se torna `backgroundColor: '#FFF'`, ou seja a primeira letra da segunda palavra vai pra maiusculo.
        - Herança de estilos: Não existe, cada componente tem que possuir estilização própria.
        - Estilização própria
- **Estrutura de pastas.**
- **Ícone e Splash Screen.**
- **Configurando navegação.**
    - Instalação do [react navigation](https://reactnavigation.org/docs/getting-started)
- **Página de casos.**
- **Abrir WhatsApp e E-mail**
    - E-mail: usar expo-mail-composer, disponivel na documentaçaão do EXPO
    - WhatsApp: usar Linking do react-native
- **Conexão com a API**
- **Upar pro GitHub**

## Quinto dia
### Funcionalidades avançadas

- Adicionar validação
    - Usar a biblioteca celebrate, que pode ser instalada com:

            npm install celebrate

- Adicionar testes
    - Por que fazer testes?
        - Como saber que uma aplicação com mais de 1000 telas está funcional em todas.
    - TDD: (Test-driven Development)
    - Configurando [jest](https://jestjs.io/).
        - Instalação:

                npm install jest -D

        - Execução:

                npx jest --init

    - Tipos de testes
        - Teste Unitário: testa algo muito específico do código, não chega no banco de dados
        - Teste de Integração: Testa a aplicação como um todo.
    - Configurando banco de testes.
        - Para executar os testes: 
            
                npm test
    
    - Instalando Supertest

            npm install supertest -D

    - Testando rota de autenticação
- Deploy
    - Alternativas Backend:
        - [Heroku](https://www.heroku.com/pricing)
        - [Digital Ocean](https://www.digitalocean.com)
    - Alternativas Frontend:
        - [Netlify](https://www.netlify.com)
    - Qual escolher?
- Estudos daqui para frente
    - Padrões de código: ESlint, Pretier
    - Autenticação JWT
    - Styled-Components
- Dicas para aproveitar melhor
    - GitHub
    - LinkedIn
