---
title: '#04 - Deletando registros'
excerpt: 'DML - Deletando os dados.'
coverImage: '/assets/blog/deletando-registros/cover.jpg'
date: '2023-10-29T21:30:00.000Z'
author: Helena Strada
categories: ['Banco de Dados', 'SQL', 'SQL Server', 'DML', 'Delete']
---

## Tópicos que você verá nesse post

- Relembrando DML
- Como deletar registros

## DML

Nas outras etapas do desenvolvimento, aprendemos sobre a modelagem dos dados e sobre como criar a base de dados utilizando os comandos DDL para definir as estruturas das nossas tabelas. E dois comandos de DML, o `INSERT` e o `UPDATE` para inserir e atualizar respectivamente registros em nossas tabelas. `SELECT` para retornar os registros da tabela.

Neste tópico iremos apresentar como deletar um registro.

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

## DELETE

Assim como no comando de atualização, o comando de deleção exige o mesmo cuidado, pois remove o registro de sua tabela.

```sql
-- Estamos removendo o registro da tabela de categorias onde o Id é igual a 1.
DELETE FROM Categories WHERE Id = 1
```

### SOFT DELETE

Uma das alternativas para não remover as referências de um determinado registro da sua base de dados é trabalhar com soft delete.
Por exemplo, vamos tomar como exemplo uma empresa que não deseja mais ofertar produtos da categoria de jaquetas. Ao invés de deletar o registro da categoria e consequentemente todos os seus produtos, você pode utilizar uma flag a mais na sua tabela para desativar essa categoria.

```sql
-- Estamos adicionando a tabela de Categorias um campo chamado de status que irá verificar e analisar a disponibilidade dessa informação.
ALTER TABLE Categories
ADD status BIT
```

![Alterando a tabela de categorias](/assets/blog/deletando-registros/atualizando-estrutura.png)

Isso permite a ativação ou desativação de produtos, categorias ou outros registros em suas tabelas, mas sem necessariamente excluir o registro e perder todas as suas referências.

A diferença é que na próxima "deleção", ao invés de utilizar o `DELETE`, você atualiza a linha da sua tabela com o valor de true ou false. Ou qualquer outro estado que a sua aplicação possa fazer uso. Por exemplo, em um blog, você pode ter um post em rascunho e pode ter um post publicado. Depende da estratégia da sua aplicação.

```sql
-- Alterando todas as categorias para ativadas.
UPDATE Categories
SET status = 1
```

![Atualizando os status](/assets/blog/deletando-registros/atualizando-todos-os-registros.png)

```sql
-- Selecionando todas as categorias com status
SELECT c.Id
	   ,c.Title
	   ,c.Status
FROM Categories c
```

![Selecionando os registros](/assets/blog/deletando-registros/selecionando-status.png)

Para retornar as categorias, você pode filtrar a sua lista para o cliente para que somente as categorias ativas sejam exibidas.

```sql
-- Selecionando somente as categorias com status ativados.
SELECT Id, Title FROM Categories
WHERE status = 1
```
