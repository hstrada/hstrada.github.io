---
title: '[BD05] Inserindo registros'
excerpt: 'DML - Manipulando os dados.'
coverImage: '/assets/blog/inserindo-registros/cover.jpg'
date: '2023-07-26T21:00:00.000Z'
author: Helena Strada
categories: ['Banco de Dados', 'SQL', 'SQL Server', 'DML']
---

## Tópicos que você verá nesse post

- Relembrando DML
- Como inserir registros

## DML

Nas outras etapas do desenvolvimento, aprendemos sobre a modelagem dos dados e sobre como criar a base de dados utilizando os comandos DDL para definir as estruturas das nossas tabelas. Nesse post iremos começar a ver os comandos de manipulação que interagem com os dados das tabelas. Começaremos com o comando de inserção, o: `INSERT`.

## Inserindo as categorias

O comando de inserção é o: `INSERT`. Talvez nesse momento possa te preocupar um pouco a questão de "decorar" um determinado comando, mas eu não te sugiro ir por este caminho. Inicialmente eu prefiro te sugerir algo como: saiba a intenção do comando que você deseja executar e sempre que necessário, procure no google o que você precisa relacionado a tecnologia que você está atuando:

> inserir dados sql server

Muito além de conhecer um determinado comando, acho que um dos pontos principais que favorecem nosso processo de crescimento profissional e capacidade técnica é pesquisar pela necessidade do problema e testar casos de uso.

## INSERT

Para inserir um determinado registro, podemos utilizar a sintaxe:

```sql
-- Inserindo registro com a coluna nomeada
INSERT INTO Categories (Title) VALUES ('Camisetas')
```

![Inserindo registro com a coluna nomeada](/assets/blog/inserindo-registros/insert.png)

O comando segue a instrução de: inserir um determinado registro em uma determinada tabela informando os campos que devem ser inseridos.

No SQL Server você tem uma das opções de não informar quais são as colunas em que eles serão inseridos, mas eles irão seguir a ordem de construção das tabelas.

```sql
-- Inserindo registro com a omissão da coluna
INSERT INTO Categories VALUES ('Tênis')
```

![Inserindo registro sem a coluna nomeada](/assets/blog/inserindo-registros/insert-nao-nomeada.png)

Você também pode optar por inserir mais de um registro por vez indicando os valores entre parênteses, e colocando vírgula após o fechamento do primeiro valor.

```sql
-- Inserindo mais de um registro em uma mesma instrução
INSERT INTO Categories (Title) VALUES ('Blusas'), ('Jaquetas')
```

![Inserindo múltiplos registros em uma mesma instrução](/assets/blog/inserindo-registros/insert-multiplos-registros.png)
