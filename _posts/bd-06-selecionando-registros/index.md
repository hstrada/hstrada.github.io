---
title: '[BD06] Selecionando registros'
excerpt: 'DQL - Selecionando os dados.'
coverImage: '/assets/blog/selecionando-registros/cover.jpg'
date: '2023-10-16T20:40:00.000Z'
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

![Selecionando registros](/assets/blog/selecionando-registros/select-default.png)

```sql
-- Para selecionar com as colunas nomeadas que desejamos retornar da base
SELECT Id, Title FROM Categories
```

![Selecionando com as colunas nomeadas](/assets/blog/selecionando-registros/select-nomeada.png)

```sql
-- O nome da coluna também pode ser modificado na projeção de saída
SELECT Id, Title as Título
FROM Categories
```

![Selecionando os registros alterando o nome do retorno da coluna na projeção de saída](/assets/blog/selecionando-registros/select-nome-coluna.png)

```sql
-- Utilizamos alias para auxiliar no processo de seleção principalmente quando precisamos fazer consultas em mais de uma tabela.
SELECT c.Id, c.Title FROM Categories c
```

![Selecionando os registros com alias](/assets/blog/selecionando-registros/select-alias.png)

### WHERE

A cláusula WHERE é utilizada para filtrar registros a partir de uma determinada condição.

```sql
-- A cláusula WHERE é um dos comandos mais utilizados ao precisarmos retornar a informação de uma determinada linha da tabela e buscar unicamente por esse registro.
SELECT Id, Title FROM Categories 
WHERE Id = 1
```

![Buscando um determinado registro utilizando a cláusula WHERE](/assets/blog/selecionando-registros/select-where.png)
