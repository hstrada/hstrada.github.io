---
title: 'Manipulando os dados'
excerpt: 'DML - Manipulando os dados.'
coverImage: '/assets/blog/manipulando-dados/cover.jpg'
date: '2023-07-26T21:00:00.000Z'
author: Helena Strada
categories: ['Banco de Dados', 'SQL', 'SQL Server', 'DML']
---

## DML

Nas outras etapas do desenvolvimento, aprendemos sobre a modelagem dos dados e sobre como criar a base de dados utilizando os comandos DDL para definir as estruturas das nossas tabelas. Nesse post iremos ver como inserir, deletar e atualizar os registros das tabelas. Comandos que interajam com os dados.

## Inserindo as categorias

O comando de inserção é o: `INSERT`. Talvez nesse momento possa te preocupar um pouco a questão de "decorar" um determinado comando, mas eu não te sugiro ir por este caminho. Inicialmente eu prefiro te sugerir algo como: saiba a intenção do comando que você deseja executar e sempre que necessário, procure no google o que você precisa relacionado a tecnologia que você está atuando:

> inserir dados sql server

Muito além de conhecer um determinado comando, acho que um dos pontos principais que favorecem nosso processo de crescimento profissional e capacidade técnica é pesquisar pela necessidade do problema e testar casos de uso.

```sql
-- Inserindo registro com a coluna nomeada
INSERT INTO Categories (Title) VALUES ('Camisetas')
```

```sql
-- Inserindo registro com a omissão da coluna
INSERT INTO Categories VALUES ('Tênis')
```

```sql
-- Inserindo mais de um registro em uma mesma instrução
INSERT INTO Categories (Title) VALUES ('Blusas'), ('Jaquetas')
```
