---
title: 'MER e DER'
excerpt: 'Como desenhar e validar o esqueleto do banco de dados antes do código.'
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

![Loja virtual.](/assets/blog/o-que-sao-bancos-de-dados/shopping.png)
*Exemplo de um site de produtos e categorias*

## Criando um exemplo

Para explicar os conceitos correlacionados sobre MER e DER, eu gosto de partir sobre a abordagem do por quê e depois começar a explicar o nome didático de cada item que compõe o desenho.

Para o exemplo aplicado, criaremos um contexto de negócio para abordar as principais caraterísticas.

## Loja online / e-commerce

*Vale ressaltar que as regras aqui aplicadas são apenas um contexto delimitado para apresentar sobre as entidades, atributos e relacionamentos. Em um cenário real, provavelmente outras perguntas seriam levantadas bem como regras diferentes seriam definidas. A sugestão aqui é apenas idealizar e apresentar os contextos citados acima.*

**Descrição**

Uma loja virtual possui diferentes categorias;

Essas categorias estão contempladas como: bonés, camisetas, chinelos;

As categorias são compostas por produtos que contém informações básicas como: nome, preço, descrição e cores disponíveis do produto.

### Desenvolvendo a solução

Um dos pontos iniciais que eu gosto de identificar no desenvolvimento da solução, são as **entidades**. As entidades representam um item importante para o projeto de banco de dados, um objeto do mundo real.

Nesse processo de identificação do exemplo, teremos inicialmente 2 (duas) entidades: Categorias e Produtos.

*Talvez se você já tenha contexto sobre o tema apresentado nesse post, você já deve ter identificado outra entidade, mas eu quero ir desenvolvendo o problema, para então ir apresentando os outros conceitos relacionados.*

As entidades no DER são representadas por retângulos e devem ser únicos dentro de uma esquema de banco de dados.

![Categorias e Produtos](/assets/blog/mer-der/bd-01.png)
*Identificando as entidades de Categorias e Produtos.*
