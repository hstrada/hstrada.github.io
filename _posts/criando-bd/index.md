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

Nesse caso, estaremos utilizando o Azure Data Studio, mas nada te impede de utilizar outros sistemas como o SQL Server Management Studio.

Após abrir o software, clique em `New Query` para começarmos a criação do nosso banco de dados.

![Azure Data Studio](/assets/blog/criando-bd/bd/azure-data-studio.png)

## Criando o banco de dados

Após o espaço para a query ser aberto, vamos começar com os comandos DDL que definem a nossa estrutura do bd.

![Escrevendo a query](/assets/blog/criando-bd/bd/create-db.png)

*Código da imagem*

```sql
-- Criando o banco de dados
CREATE DATABASE Shopping
```

Selecione o código que foi digitado e clique em `Run`. Isso fará com que o comando selecionado seja executado e não todo o comando do arquivo.

![Após a execução da criação do banco de dados](/assets/blog/criando-bd/bd/create-db-out.png)

Após a execução da instrução SQL, a resposta do comando será apresentado, normalmente o resultado é apresentado na parte inferior da imagem.

### Colocando-o em uso

Você pode atualizar a lista e verificar o novo banco de dados que foi criado. Ou você pode utilizar a instrução da próxima imagem para realizar a sua utilização.

![Mudando pela lista de databases](/assets/blog/criando-bd/bd/use.png)

Para cada projeto de um software, um banco de dados será criado com a sua respectiva modelagem e estrutura para atender os requisitos do sistema.

![Colocando-o em uso por instrução](/assets/blog/criando-bd/bd/use-shopping.png)

### Atualizando a lista

Para atualizar a lista e apresentar o novo banco de dados criado, clique com o botão direito sobre a lista e clique em `Refresh` ou `Atualizar`.

![Atualizando a lista](/assets/blog/criando-bd/bd/refresh.png)

```sql
USE Shopping
```

![Saída da instrução de uso](/assets/blog/criando-bd/bd/refresh-out.png)

## Criando as tabelas

Para criar as tabelas, vamos continuar utilizando o comando `CREATE`. Mas um outro ponto é importante antes de apresentar o comando em si que será como um determinado dado será armazenado. Ou seja, o SQL Server fornece um conjunto de tipos de dados dos quais podem ser utilizados para especificar uma coluna podendo ser dados inteiros, caracteres ou data e hora, por exemplo.

Os tipos podem ser encontrados em: https://learn.microsoft.com/pt-br/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16.

Essa informação é relevante para entender e compreender como essa informação seja armazenada para restringir o tipo de dado que pode ser armazenado e também pelo tamanho do campo. Por exemplo: a sigla de um estado pode conter somente 2 caracteres: SP para São Paulo, RJ para Rio de Janeiro e assim por diante. Faz sentido determinar uma coluna com uma quantidade de caracteres superiores ao que é necessário? Ou até mesmo utilizar um tipo que não poderá ser adicionado um caracter.

### Categorias

Normalmente iniciamos a criação das tabelas que não possuem chaves estrangeiras, menos dependentes. Como a tabela de produtos depende da chave de categoria, iniciamos pelas categorias.

```sql
-- Criando a tabela de categorias (categories) com Id e Nome da categoria
CREATE TABLE Categories (
    Id      INT IDENTITY PRIMARY KEY,
    Title   VARCHAR(64) NOT NULL UNIQUE
)
```

![Resultado de categorias](/assets/blog/criando-bd/data/categories.png)

### Produtos

Criando a tabela de produtos.

![Resultado de produtos](/assets/blog/criando-bd/data/products.png)

Instrução para a criação da tabela de produtos.

```sql
-- Criando a tabela de produtos (products) com: 
-- Id, Nome, Descrição, Preço e a Categorias relacionada
CREATE TABLE Products ( 
    Id              INT IDENTITY PRIMARY KEY,
    Name            VARCHAR(64),
    Description     TEXT, 
    Price           DECIMAL(12,2),
    CategoryId      INT FOREIGN KEY REFERENCES Categories(Id)
)
```

### Atualizando a lista

Para atualizar a lista de tabelas do banco de dados do shopping, atualize a lista conforme a imagem.

![Atualizando a lista das tabelas](/assets/blog/criando-bd/data/refresh.png)
