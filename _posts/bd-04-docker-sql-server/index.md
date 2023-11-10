---
title: '[BD04] Docker - SQL Server'
excerpt: 'Docker & SQL Server.'
coverImage: '/assets/blog/docker-sql-server/cover.jpg'
date: '2023-07-01T21:00:00.000Z'
author: Helena Strada
categories: ['Banco de Dados', 'SQL', 'SQL Server', 'Docker']
---

## Docker

Você pode realizar a instalação do docker através das instruções do site oficial: `https://www.docker.com/`.

Após realizada a instalação do docker de acordo com o seu sistema operacional, você pode copiar o conteúdo da imagem abaixo e colar em um arquivo como:

`docker-compose.yaml`

Conteúdo do arquivo.

```yaml
version: '3'
name: mssql-server-blog
services:
  mssql-server:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      ACCEPT_EULA: "Y"
      MSSQL_SA_PASSWORD: "Sa#p4ssword"
      MSSQL_PID: Express
    ports:
      - "1433:1433"
```

## Prompt

Com o prompt de comando aberto na pasta em que o arquivo foi criado, você pode executar o comando: 

> docker-compose up -d

Isso fará com que uma instância do SQL Server seja criada.

## Azure Data Studio

Após a criação da instância, com o Azure Data Studio ou o sistema de sua preferência, você pode se conectar através dos dados mencionados:

**Usuário**: sa

**Senha**: Sa#p4ssword

Ou pela string de conexão.
