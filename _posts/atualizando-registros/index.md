---
title: '#03 - Atualizando registros'
excerpt: 'DML - Atualizando os dados.'
coverImage: '/assets/blog/atualizando-registros/cover.jpg'
date: '2023-10-19T21:30:00.000Z'
author: Helena Strada
categories: ['Banco de Dados', 'SQL', 'SQL Server', 'DML', 'Update']
---

## Tópicos que você verá nesse post

- Relembrando DML
- Como atualizar registros

## DQL

Nas outras etapas do desenvolvimento, aprendemos sobre a modelagem dos dados e sobre como criar a base de dados utilizando os comandos DDL para definir as estruturas das nossas tabelas. E um dos comandos de DML, o `INSERT` para inserir registros em nossas tabelas. `SELECT` para retornar os registros da tabela.

Neste tópico iremos apresentar como atualizar um valor.

## Relembrando

Para retornar os registros de uma determinada tabela, utilizamos o `SELECT`. Para selecionar apenas um registro, utilizamos a cláusula `WHERE` com um identificador único que irá nos proporcionar o retorno de um registro.

## SELECT

A cláusula WHERE é utilizada para filtrar registros a partir de uma determinada condição.

```sql
-- A cláusula WHERE é um dos comandos mais utilizados ao precisarmos retornar a informação de uma determinada linha da tabela e buscar unicamente por esse registro.
SELECT Id, Title FROM Categories 
WHERE Id = 1
```

![Buscando um determinado registro utilizando a cláusula WHERE](/assets/blog/selecionando-registros/select-where.png)

## UPDATE

Quando você entra na sua página de perfil para atualizar uma informação sobre você ou no exemplo do nosso contexto de categorias, ao atualizarmos um registro não queremos que toda a base sofra aquela mudança que estamos prevendo. Nosso desejo é apenas atualizar a informação de uma linha de informação da nossa tabela.

Por isso o uso da cláusula `WHERE` visto anteriormente.

```sql
-- Estamos atualizando o valor do título da categoria para um `novo valor` onde o registro seja o de Id igual a 1.
UPDATE Categories SET Title = 'Novo Valor' WHERE Id = 1
```
