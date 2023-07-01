---
title: 'Docker - SQL Server'
excerpt: 'Docker & SQL Server.'
coverImage: '/assets/blog/docker-sql-server/cover.jpg'
date: '2023-07-01T21:00:00.000Z'
author: Helena Strada
categories: ['Banco de Dados', 'SQL', 'SQL Server', 'Docker']
---

## Docker

Instalação do docker

```yaml
version: '3'
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
