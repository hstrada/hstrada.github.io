---
title: 'MER e DER'
excerpt: 'Como desenhar, descrever e validar o banco de dados.'
coverImage: '/assets/blog/mer-der/cover.jpg'
date: '2023-06-20T19:00:00.000Z'
author: Helena Strada
categories: ['Banco de Dados', 'SQL', 'MER', 'DER']
---

## Tópicos que você verá nesse post

- O que é MER e DER
- Entidades
- Atributos
- Relacionamentos

## Contexto

Em um projeto do desenho de uma arquitetura de uma aplicação, uma das etapas importantes é como os dados serão armazenados. O MER (Modelo Entidade Relacionamento) é utilizado para descrever os objetos do mundo real enquanto o DER (Diagrama Entidade Relacionamento) é a representação em forma gráfica do que foi descrito no MER.

![Loja virtual.](/assets/blog/mer-der/shopping.png)
*Exemplo de um site de produtos e categorias*

## Criando um exemplo

Para explicar os conceitos correlacionados sobre MER e DER, eu gosto de partir sobre a abordagem do por quê e depois começar a explicar o nome didático de cada item que compõe o desenho.

Para o exemplo aplicado, criaremos um contexto de negócio para abordar as principais caraterísticas.

### Loja online / e-commerce

*Vale ressaltar que as regras aqui aplicadas são apenas um contexto delimitado para apresentar sobre as entidades, atributos e relacionamentos. Em um cenário real, provavelmente outras perguntas seriam levantadas bem como regras diferentes seriam definidas. A sugestão aqui é apenas idealizar e apresentar os contextos citados acima.*

**Descrição**

Uma loja virtual possui diferentes categorias;

Essas categorias estão contempladas como: bonés, camisetas, jaquetas;

As categorias são compostas por produtos que contém informações básicas como: nome, preço, descrição e cores disponíveis do produto.

## Desenvolvendo a solução

Um dos pontos iniciais que eu gosto de identificar no desenvolvimento da solução, são as **entidades**. As entidades representam um item importante para o projeto de banco de dados, um objeto do mundo real. Por quê a partir desse modelo, iremos desenvolver o código / modelo físico da nossa solução.

Nesse processo de identificação do exemplo, teremos inicialmente 2 (duas) entidades: Categorias e Produtos.

*Se você já tem contexto sobre o tema apresentado nesse post, você já deve ter identificado outra entidade, mas eu quero ir desenvolvendo o problema, para então ir apresentando os outros conceitos relacionados.*

## Entidades

As entidades no DER são representadas por retângulos e devem ser únicos dentro de uma esquema de banco de dados.

![Categorias e Produtos](/assets/blog/mer-der/bd-01.png)
*Identificando as entidades de Categorias e Produtos.*

Mas as entidades podem possuir uma relação entre si. Isso significa que na prática quando cadastrarmos um produto, ele estará vinculado a uma categoria. Normalmente essas *relações* são descritas por verbos. E essa associação é definida como **relacionamento**.

![Cadastrando um produto](/assets/blog/mer-der/add-produto.png)
*Exemplo de um cadastro de um produto.*

Pensar em modelos, tabelas do excel ou até mesmo uma interface desenhada na mão, como um esboço me ajuda a visualizar os domínios e funcionalidades. Não significa que é necessário, mas me ajuda a tangebilizar a ideia. É como um esboço.

Sendo assim, temos um relacionamento:

![Categorias e Produtos](/assets/blog/mer-der/bd-02.png)
*Relacionamento entre as entidades de Categorias e Produtos.*

## Relacionamentos

Os relacionamentos podem ser classificados em três tipos: 

- **1:1 (um para um)**: onde uma entidade A se associa exclusivamente a uma ocorrência de uma entidade B. Então uma pessoa teria apenas um número de CNH associada a ela.

![Relacionamento um para um](/assets/blog/mer-der/1_1.png)

- **1:N (um para muitos)**: onde uma entidade A pode se associar a muitas ocorrências de uma entidade B, porém B se relaciona a apenas uma ocorrência. Por exemplo, uma pessoa por ter mais de um e-mail associado a ela, porém, um e-mail pertence somente a uma pessoa.

![Relacionamento um para muitos](/assets/blog/mer-der/1_N.png)

- **N:N (muitos para muitos)**: onde uma entidade A pode se associar a várias ocorrências de uma entidade B e a entidade B pode se associar a várias ocorrências de uma entidade A. Por exemplo, os alunos podem participar de várias aulas durante o curso, e essas aulas são compostas por vários alunos.

![Relacionamento muitos para muitos](/assets/blog/mer-der/N_N.png)

## Solução

No nosso caso, uma categoria pode possuir vários produtos associados a ele, porém, um produto está relacionado a apenas uma categoria.

![Categorias e Produtos](/assets/blog/mer-der/bd-03.png)
*Relacionamento entre as entidades de Categorias e Produtos.*

## Atributos

Enquanto temos as entidades que serão nossas tabelas no banco de dados e os relacionamentos que determinam as possíveis relações entre elas, precisamos preencher quais serão os campos que nossas tabelas irão possuir. Por exemplo: a categoria possui um nome. Os produtos possuem nome, preço, descrição e a categorias.

![Atributos de Categorias e Produtos](/assets/blog/mer-der/atributos.png)
*Atributos das entidades de Categorias e Produtos.*

## E as cores disponíveis dos produtos?

Você deve ter percebido que nós adicionamos as categorias e os protudos. Na prática, simulando em uma planilha apenas para desenhar e ajudar na validação, o resultado até então estaria algo como:

![Tabelas de Categorias e Produtos](/assets/blog/mer-der/tabelas-categorias-produtos.png)
*Tabelas criadas de Categorias e Produtos.*

Um spoiler: no relacionamento 1:N ou N:1, a tabela com N carregará o id da outra tabela da chave de referência.

### Dúvida

E as cores, onde seriam adicionadas?

![Cores](/assets/blog/mer-der/cores.png)
*Adicionando as cores disponíveis para cada produto.*

Caso adicionássemos mais uma coluna para as cores, seria muito difícil atualizar / procurar por um registro. 

Não teríamos nenhum tipo de integridade dos registros, filtrar por essas informações seria quase impossível e imagina que precisássemos atualizar todos os registros que contenham uma determinada cor ou até mesmo excluir uma cor que não esteja mais disponível. São muitos problemas para contornar e pensar.

Sendo assim, como então criaríamos uma base unificada das cores disponíveis?

Podemos extrair as cores disponíveis para uma tabela.

![Tabela de Cores](/assets/blog/mer-der/cores-1.png)
*Adicionando a tabela de cores.*

E o relacionamento N:N nos permite ter um registro da tabela A associado a um ou vários registros da tabela B, assim como os registros da tabela B associados a muitos registros da tabela A.
Perceba o quanto facilita nosso processo de atualização, filtro, buscas, inserção dos dados.

![Tabela de Cores](/assets/blog/mer-der/cores-2.png)
*Adicionando a tabela de cores.*
