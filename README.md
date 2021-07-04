<h1 align="center">
    Node com Kafka - Exemplo de Aplicação
</h1>

## Objetivo do Projeto
Um exemplo simples de Node com Kafka.
A ideia é ter uma API funcionando como um Producer, disparando mensagens sobre uma venda, e um Microservice rebendo e consumindo essas mensagens como um Consumer.

## Tecnologias
- [Node.js](https://nodejs.org/en/)
    - [Kafka-js](https://kafka.js.org/)
- [Kafka](https://kafka.apache.org/)
- [Docker](https://www.docker.com/)

## Como Utilizar
Para utilizar a aplicação, você precisará do [Git](https://git-scm.com), do [Node.JS/NPM](https://nodejs.org/en/) e do [Docker](https://www.docker.com/) instalado no seu computador.

Utilizando a linha de comando:

### Baixando o projeto
```bash
# Clone o repositório
$ git clone https://github.com/AzraelGarden/node-kafka-example/

# Entre no repositório
$ cd node-kafka-example
```

### Iniciando o Kafka
```bash
# Na raiz do projeto, execute:
$ docker-compose up
# Com isso, o Kafka será inicializado na porta 9092.
```

### Iniciando a API
```bash

# Entre na pasta da API
$ cd api

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm start
```

### Iniciando o microservice
```bash

# Entre no microservice
$ cd consumer

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm start
```
