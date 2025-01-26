# Gerenciamento de Produtos e Logs

O products-management é um sistema de Gerenciamento de Produtos e Logs que inclui funcionalidades de exibição, criação, edição e remoção de produtos, além de exibir logs e o status do servidor e banco de dados.

### Tela de Produtos:
![Tela Produtos](/frontend/src/assets/products-screen.png)

### Tela de Logs:
![Tela Logs](/frontend/src/assets/logs-screen.png)

### Tela de Status:
![Tela Status](/frontend/src/assets/status-screen.png)

## Estrutura do Projeto
O projeto é dividido em duas partes: Backend e Frontend.

- Backend: NestJS
- Frontend: Angular

## Tecnologias e Ferramentas

- [NestJS](https://nestjs.com/)
- [SQLite](https://www.sqlite.org/)
- [Angular CLI](https://angular.io/cli)
- [Node.js](https://nodejs.org/en)
- [Docker](https://www.docker.com/)
- [Bootstrap](https://getbootstrap.com/)

## Requisitos

- Instalar [NestJS](https://nestjs.com/)
- Instalar [SQLite](https://www.sqlite.org/)
- Instalar [Node.js e npm / yarn](https://nodejs.org/en) 
- Instalar [Angular CLI](https://angular.io/cli)

## Como executar o Backend

- Clone o repositório:

```bash
git clone https://github.com/kirkkinichi/products-management.git
```
- Acesse a pasta backend e instale as dependências
```bash
npm install
```
- Inicie o servidor NestJS
```bash
npm run start
```
- Acesse a API no endpoint http://localhost:3000

## Como executar o Frontend

- Acesse a pasta frontend e instale as dependências

```bash
npm install
```

- Inicie o servidor de desenvolvimento do Angular
```bash
ng serve
```

- O frontend será iniciado no http://localhost:4200 por padrão. A aplicação irá interagir com o backend na porta 3000

## Interação com a API

### Produtos:

- GET (todos os produtos): Para obter todos os produtos cadastrados, basta fazer uma requisição GET para o endpoint /produto

- GET (buscar um produto específico): Para buscar um produto específico por codprod, você pode fazer uma requisição GET para o endpoint /produto/{codprod}, substituindo {codprod} pelo ID do produto desejado

- POST: Para criar um novo produto, faça uma requisição POST para o endpoint /produto com os dados do produto no corpo da requisição

- PUT: Para atualizar um produto existente, você pode fazer uma requisição PUT para o endpoint /produto/{codprod}, passando o novo corpo com as atualizações

- DELETE: Para deletar um produto, faça uma requisição DELETE para o endpoint /produto/{codprod}

### Logs:

- GET: Para listar os logs com filtro por tipo de entidade e paginação, basta fazer uma requisição GET para o endpoint /log, incluindo os parâmetros: entidade e pagina para controlar a páginação (50 logs por página). Exemplo:
http://localhost:3000/log?entidade=CREATE&pagina=1

### Status:

- GET: Para obter o status do servidor e banco de dados, basta fazer uma requisição GET para o endpoint /status

## Autor

Kirk Kinichi Tomisaki Rodrigues da Silva
