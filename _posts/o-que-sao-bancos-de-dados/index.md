---
title: 'O que são Bancos de Dados?'
excerpt: 'O que são bancos de dados e quais são os tipos.'
coverImage: '/assets/blog/o-que-sao-bancos-de-dados/cover.jpg'
date: '2023-05-10T19:00:00.000Z'
author: Helena Strada
categories: ['Banco de Dados', 'SQL']
---

## Tópicos que você verá nesse post

- O que são bancos de dados 
- Tipos de banco de dados
- Como são gerenciados
- O que é SQL 

## Contexto

Pesquisando por uma notícia ou aplicativo que você utiliza para ver os conteúdos mais recentes publicados ou navegar em sua rede social favorita, uma arquitetura compõe a base da aplicação que você está utilizando.

Para contextualizar sobre banco de dados, iremos apresentar o site de uma tela que exibe as categorias disponíveis para seleção em um e-commerce e os respectivos produtos que compõem cada categoria.

![Loja virtual.](/assets/blog/o-que-sao-bancos-de-dados/shopping.png)
*Exemplo de um site de produtos e categorias*

Nesse fluxo de informações, dentre um desenho de arquiteturas e sistemas disponíveis, para explicar o contexto de banco de dados, vamos sintetizar a apresentação dessa tela que você acessou no seu navegador, em três itens:

O desenho da sua tela, a representação visual das informações é constituída pelo frontend. Dado um design para a sua página, a construção dela fica na primeira camada. Sendo responsável por solicitar os registros disponíveis de categorias e produtos para o backend.

![FrontEnd](/assets/blog/o-que-sao-bancos-de-dados/frontend.png)
*FrontEnd*

As informações sobre as categorias e produtos normalmente são dinâmicas, ou seja, caso o administrador da loja virtual crie / adicione uma categoria ou produto, essa informação será atualizada para o usuário final acessando a aplicação web. O intermédio de processamento das informações são realizados pelo backend. Sendo uma camada de processamento e validação das informações que estão sendo solicitadas / enviadas para o usuário final.

Seja do administrador da página, salvando um produto com valor ausente, seja do cliente final solicitando um filtro de produtos por uma determinada categoria.

![BackEnd](/assets/blog/o-que-sao-bancos-de-dados/backend.png)
*BackEnd*

E as informações precisam ser persistidas (armazenadas) de uma maneira segura para que possam ser recuperadas de forma consistente quando solicitadas. Sendo assim, as informações são armazenadas em bancos de dados.

![Banco de Dados](/assets/blog/o-que-sao-bancos-de-dados/bd.png)
*Banco de Dados*

Essas informações normalmente são modeladas em linhas e colunas, semelhantes a uma planilha (Google Sheets, Microsoft Excel), mas apesar deste tipo ser o mais comum, existem outros que serão apresentados.

![Planilha Eletrônica.](/assets/blog/o-que-sao-bancos-de-dados/google-sheets.png)
*Exemplo de uma planilha no Google Sheets*

![Tabela no PostgreSQL.](/assets/blog/o-que-sao-bancos-de-dados/postgresql-tabela.png)
*Exemplo de uma tabela no PostgreSQL*

Mas então, qual é a diferença entre um banco de dados e uma planilha?

- **Segurança**: nem todas as operações podem ser realizadas por todos os usuários, logo podemos definir os níveis de acesso aos dados utilizando processos de segurança.

- **Performance**: os dados podem ser gerenciados, pesquisados e modificados através de estruturas arquitetadas para que tal operação seja rápida de busca.

- **Armazenamento**: ainda que uma planilha possa ter um alto volume de dados, a quantidade de armazenamento de um banco de dados é superior aos dados de uma planilha e as regras de backup e segurança são mais robustas, quando realizadas.

- **Tipos**: podemos restringir os tipos de dados que poderão ser armazenados em um campo, como aceitar somente números ou um booleano, garantindo uma melhor consistência das informações a serem armazenadas.

## Tipos de banco de dados

Existem diferentes tipos de bancos de dados disponíveis no mercado que fornecem maneiras abrangentes de organização desses dados, como por exemplo, relacionais, não relacionais e/ou gráficos entre outros modelos.

Um dos tipos mais comuns utilizados são os bancos de dados relacionais que são organizados em tabelas com colunas e linhas. Entre alguns exemplos, podemos destacar: MS SQL Server e o MySQL.

## Como são gerenciados

Um banco de dados é controlado por um sistema de gerenciamento de banco de dados, também conhecido como SGBD ou em inglês, *DBMS* que provê uma interface para o usuário permitindo que ele realize ações contemplando o manuseamento dessas informações até as configurações de backup e controle de acesso.

## O que é SQL

*SQL* (Structured Query Language ou Linguagem de Consulta Estruturada) é uma linguagem utilizada na maioria dos bancos de dados relacionais para definir, criar, consultar e manipular dados e foi desenvolvida pela IBM em 1970 com base no modelo de dados relacionais.

### O que são comandos SQL

Os comandos são instruções utilizadas para performar as ações mencionadas e são estruturadas em categorias: definição (**DDL**), consulta (**DQL**), manipulação (**DML**), transações (**DTL**) e controle (**DCL**). Em algumas literaturas, você pode encontrar a o *select* dentro de DML.

**DDL**

Linguagem de definição de dados (DDL) definem a estrutura do banco de dados.
São os comandos: *CREATE*, *ALTER* e *DROP*.

**DQL**

Linguagem de consulta de dados (DQL) são comandos para recuperar e selecionar dados do banco de dados.
É o comando: *SELECT*.

**DML**

Linguagem de manipulação de dados (DML) são comandos que interagem com os dados do banco de dados.
São os comandos: *INSERT*, *DELETE* e *UPDATE*.

**DTL**

Linguagem de transação de dados (DTL) são comandos para controles de transações.
São os comandos: *BEGIN TRANSACTION*, *COMMIT* e *ROLLBACK* (para fazer um rollback de uma transação).

**DCL**

Linguagem de controle de dados (DCL) são comandos que interagem com a parte de segurança do banco de dados.
São os comandos: *GRANT*, *DENY* e *REVOKE*.
