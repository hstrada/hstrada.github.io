---
title: '#02 - Selecionando registros'
excerpt: 'DQL - Selecionando os dados.'
coverImage: '/assets/blog/selecionando-registros/cover.jpg'
date: '2023-07-26T21:00:00.000Z'
author: Helena Strada
categories: ['Banco de Dados', 'SQL', 'SQL Server', 'DQL']
---

## Tópicos que você verá nesse post

- Relembrando DQL
- Como selecionar registros

## DQL

Nas outras etapas do desenvolvimento, aprendemos sobre a modelagem dos dados e sobre como criar a base de dados utilizando os comandos DDL para definir as estruturas das nossas tabelas. E um dos comandos de DML, o `INSERT` para inserir registros em nossas tabelas. Neste post aprenderemos sobre como selecionar e recuperar os registros que foram inseridos.

## Selecionando as categorias

O comando de seleção é o: `SELECT`. Para retornar todos os registros de uma determinada tabela com todas as colunas, utilizamos o comando:

## SELECT

```sql
SELECT * FROM Categories
```

```sql
-- Para selecionar com as colunas nomeadas que desejamos retornar da base
SELECT Id, Title FROM Categories
```

```sql
-- O nome da coluna também pode ser modificado na projeção de saída
SELECT c.Id, c.Title as Título
FROM Categories c
```

```sql
-- Utilizamos alias para auxiliar no processo de seleção principalmente quando precisamos fazer consultas em mais de uma tabela.
SELECT c.Id, c.Title FROM Categories c
```

### WHERE

```sql
-- A cláusula WHERE é um dos comandos mais utilizados ao precisarmos retornar a informação de uma determinada linha da tabela e buscar unicamente por esse registro.
SELECT Id, Title FROM Categories 
WHERE Id = 1
```
