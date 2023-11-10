# API de Gerenciamento de Carros com Express.js

Este projeto é uma aplicação de exemplo que implementa uma API de gerenciamento de informações de carros usando o framework Express.js. Ele oferece funcionalidades básicas de criação, listagem, atualização e exclusão de informações de carros. A API é projetada para ser acessível através de endpoints específicos e pode ser utilizada como base para o desenvolvimento de sistemas mais complexos de gerenciamento de veículos.

## Funcionalidades Principais

- **Recuperação de Informações de Carro por ID**: O endpoint `GET /cars/:id` permite recuperar informações detalhadas de um carro com base no ID fornecido na URL.

- **Listagem de Carros**: O endpoint `GET /cars` retorna uma lista de todos os carros registrados na base de dados.

- **Criação de Novo Carro**: O endpoint `POST /cars` permite a criação de novos registros de carros com informações, como modelo, marca, ano, cor e preço.

- **Atualização de Carro por ID**: O endpoint `PUT /cars/:id` permite a atualização das informações de um carro existente com base no ID fornecido na URL.

- **Exclusão de Carro por ID**: O endpoint `DELETE /cars/:id` possibilita a remoção de um carro da base de dados com base no ID fornecido na URL.

## Tecnologias Utilizadas

- **Express.js**: O framework utilizado para construir a API.
- **Node.js**: A plataforma de tempo de execução JavaScript utilizada para executar o servidor.
- **Git**: Sistema de controle de versão para gerenciar o código fonte.
