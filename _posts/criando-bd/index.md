---
title: 'Criando o banco de dados'
excerpt: 'DDL - Criando o banco de dados.'
coverImage: '/assets/blog/criando-bd/cover.jpg'
date: '2023-06-30T21:00:00.000Z'
author: Helena Strada
categories: ['Banco de Dados', 'SQL', 'Modelagem BD', 'DDL']
---

## Tópicos que você verá nesse post

- Criando o banco de dados
- Criando as tabelas

## Depois da modelagem

Depois da modelagem e da validação de como será a estrutura do seu banco de dados, nós começamos a criação.

Todo o nosso desenho tem sido feito do conceito do modelo de dados relacionais em que os dados são organizados em tabelas com linhas e colunas. Onde as colunas representam os atributos que a tabela contém e as linhas representam os registros da tabela.

![Colunas e linhas](/assets/blog/criando-bd/tabelas-categorias-produtos.png)
*Colunas e linhas.*

E o nosso modelo relacional criado consiste no resultado abaixo:

![Modelo Conceitual](/assets/blog/criando-bd/categorias-produtos-cores.png)
*Modelo Conceitual.*

Modelo conceitual -> desenvolvimento do código. Mas antes de iniciar o código, precisamos contextualizar sobre alguns itens.

**Primeiro item**: precisamos realizar a instalação / configuração do banco de dados. No caso do nosso exemplo, estaremos utilizando o SQL Server.

**Segundo item**: o que é SQL.

**Terceiro item**: criar (DDL).

## Item 1: RDBMs.

Alguns dos RDBMs (sistemas de gerenciamento de banco de dados relacional), como são chamados, fornecem as interfaces para interagirmos com os bancos de dados. Entre alguns modelos de exemplo, temos: MySQL, SQL Server e PostgreSQL.

### Instalação

Para as instalações, vou disponibilizar alguns guias separados no blog / links para que você faça a instalação.

- Docker
- https://azure.microsoft.com/pt-br/products/data-studio
- https://www.microsoft.com/pt-br/sql-server/sql-server-downloads

## Item 2: SQL.

SQL (linguagem de consulta estruturada) é uma linguagem de programação em que instruções são utilizadas para atualizar, criar, remover, modificar, informações de bancos de dados relacionais. A partir do momento da finalização da nossa modelagem, a próxima etapa é criar o banco de dados e posteriormente começar a realizar as ações mencionadas na frase anterior.

## Item 3: Criação (DDL).

A partir da instalação das ferramentas necessárias, iremos abrir o programa e começar a utilizar os comandos SQL que estão na classe que chamamos de DDL.

Como comentamos anteriormente, os comandos da classe DDL são utilizados para definir a estrutura do banco de dados.

São os comandos: `CREATE`, `ALTER` e `DROP`.

## Azure Data Studio

![Azure Data Studio](/assets/blog/criando-bd/bd/azure-data-studio.png)

New Query

## Criando o banco de dados

```sql
-- Criando o banco de dados
CREATE DATABASE Shopping
```

![](/assets/blog/criando-bd/bd/create-db.png)

![](/assets/blog/criando-bd/bd/create-db-out.png)

### Colocando-o em uso

![](/assets/blog/criando-bd/bd/use.png)

![](/assets/blog/criando-bd/bd/use-shopping.png)

### Atualizando a lista

![](/assets/blog/criando-bd/bd/refresh.png)

![](/assets/blog/criando-bd/bd/refresh-out.png)

## Criando as tabelas

### Categorias

```sql
-- Criando a tabela de categorias (categories) com Id e Nome da categoria
CREATE TABLE Categories (
    Id      INT IDENTITY PRIMARY KEY,
    Title   VARCHAR(64) NOT NULL UNIQUE
)
```

![](/assets/blog/criando-bd/data/categories.png)

### Produtos

```sql
-- Criando a tabela de produtos (products) com Id, Nome, Descrição, Preço e a Categorias relacionada
CREATE TABLE Products ( 
    Id              INT IDENTITY PRIMARY KEY,
    Name           VARCHAR(64),
    Description     TEXT, 
    Price           DECIMAL(12,2),
    CategoryId      INT FOREIGN KEY REFERENCES Categories(Id)
)
```

![](/assets/blog/criando-bd/data/products.png)

### Atualizando a lista

![](/assets/blog/criando-bd/data/refresh.png)
