---
title: 'Modelagem de dados'
excerpt: 'O que é e por quê realizar a modelagem de dados.'
coverImage: '/assets/blog/o-que-sao-bancos-de-dados/cover.jpg'
date: '2023-06-04T16:00:00.000Z'
author: Helena Strada
categories: ['Banco de Dados', 'SQL', 'Modelagem BD']
---

## Tópicos que você verá nesse post

- O que é modelagem de dados
- Por quê realizar a modelagem
- Modelagem de dados relacional

## Contexto & Explicação

Ao iniciar o desenvolvimento de um site, sistema ou aplicativo, uma das etapas fundamentais do processo é pensar em "como os dados serão armazenados" dentro de cada aplicação.

Essa etapa é importante por quê ela define não somente **onde** esses dados serão armazenados, mas também **como**. Ela envolve não somente diferentes áreas de negócios, modelos e até mesmo o custo de armazenamento das ferramentas para a empresa, pois existem técnicas e análises diferentes para cada grupo de categorias. Podemos pensar desde o dado sendo armazenado dentro do banco de dados, até uma análise feita na jornada de um usuário dentro da aplicação para ofertar ou realizar descontos em produtos.

## Por quê realizar a modelagem

Isso por quê:

- Pensar na análise de domínio reduz o risco de erros de desenvolvimento tanto do banco de dados, quanto nos processos subsequentes, como na arquitetura do backend, envolvendo regras de negócios da sua aplicação;

- Facilita a comunicação entre as partes envolvidas reduzindo a complexidade e criando consistência na documentação;

- Elimina a redundância e retrabalho durante o desenvolvimento.

Imagina que você acessa seu aplicativo que consta uma informação sobre a sua conta, mas ao acessar a aplicação web ou até mesmo continuar um processo de pedido dentro do aplicativo, a cada sessão diferente que você clica, uma informação diferente sobre o mesmo serviço aparece para você. Claro que dentro desse exemplo, essa inconsistência pode ocorrer devido a fatores totalmente diferentes do contexto, mas é um exemplo do que algo não bem descrito pode ocorrer de exemplo dentro da sua organização.

## Modelo relacional

No modelo relacional os dados são organizados em coleções de tabelas que possuem linhas e colunas.

- Onde as linhas representam os registros;

- As colunas representam os dados que poderão ser armazenados para aquele campo.

A modelagem é/pode ser realizada em três etapas: **conceitual**, **lógica** e **física**.

### Modelo de dados conceitual

O nível conceitual oferece uma visão mais simplificada dos dados, identificando as entidades, quais são os tipos de dados que essas entidades irão precisar armazenar, é sobre o design e projeção dos seus dados.

No exemplo do shopping apresentado, podemos destacar:

-> As categorias (com nome) que a loja possui;

-> Os produtos (com nome, descrição e preço) que pertence a uma categoria.
