---
title: '[FrontEnd00] O que é FrontEnd?'
excerpt: 'O que é frontend, como uma página é construída e como ela conversa com o backend.'
coverImage: '/assets/blog/frontend-00-o-que-e/cover.jpg'
date: '2026-10-22T12:00:00.000Z'
author: Helena Strada
categories: ['FrontEnd', 'HTML', 'CSS', 'JavaScript']
---

## Tópicos que você verá nesse post

- O que é frontend
- HTML, CSS e JavaScript
- Conversando com o backend
- Bibliotecas e frameworks
- Livros e referências

## Contexto

Seguindo a apresentação que fizemos sobre [backend](/blog/post/backend-00-o-que-e) e [banco de dados](/blog/post/bd-00-o-que-sao-bancos-de-dados), vamos voltar para o mesmo exemplo: o site de uma loja virtual que exibe as categorias disponíveis para seleção e os produtos que compõem cada categoria.

![Exemplo do site da loja virtual.](/assets/blog/frontend-00-o-que-e/shopping.png)
*Exemplo de um site de produtos e categorias*

Até agora, olhamos para o que acontece "por trás" dessa tela: como os dados são armazenados e como o backend processa e disponibiliza essas informações. Mas tudo o que o cliente vê e com o que ele interage — a lista de categorias, os cards de produtos, o campo de busca, o botão de comprar — é responsabilidade do frontend.

## O que é frontend

O frontend é a camada da aplicação que é executada do lado do cliente, normalmente no navegador ou em um aplicativo no celular. Ele é responsável por apresentar as informações na tela, capturar as interações do usuário e solicitar ao backend os dados que precisam ser exibidos.

![FrontEnd](/assets/blog/frontend-00-o-que-e/frontend.png)
*O frontend envia uma requisição e recebe a resposta do backend*

Então, se o backend é quem aplica as regras de negócio e devolve os dados, o frontend é quem decide **como** esses dados serão apresentados e **o que acontece** quando o usuário clica, digita ou rola a página.

Imagina que você seleciona a categoria "Camisetas" na loja virtual. Algumas coisas acontecem nesse momento:

- **Interação**: o frontend identifica o clique na categoria selecionada;
- **Requisição**: uma solicitação é enviada para o backend pedindo os produtos daquela categoria;
- **Carregamento**: enquanto a resposta não chega, a tela pode exibir um indicador de carregamento;
- **Apresentação**: com os dados recebidos, a lista de produtos é atualizada na tela.

## HTML, CSS e JavaScript

Uma página web é construída, basicamente, por três tecnologias que trabalham juntas, cada uma com uma responsabilidade.

![Camadas de uma página](/assets/blog/frontend-00-o-que-e/camadas.png)
*Estrutura, estilo e comportamento*

### HTML

O HTML (HyperText Markup Language) define a **estrutura** e o conteúdo da página: títulos, parágrafos, listas, imagens, botões e formulários. Pensando na nossa loja, a lista de produtos poderia ser escrita assim:

```html
<section>
  <h2>Camisetas</h2>

  <ul class="produtos">
    <li class="produto">
      <h3>Camiseta A</h3>
      <span>R$ 59,90</span>
    </li>
    <li class="produto">
      <h3>Camiseta B</h3>
      <span>R$ 59,90</span>
    </li>
  </ul>
</section>
```

### CSS

O CSS (Cascading Style Sheets) define o **estilo**: cores, fontes, espaçamentos e como os elementos se organizam na tela. É ele que transforma a lista acima em uma grade de produtos e que adapta a página para diferentes tamanhos de tela, como no celular.

```css
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* no celular, um produto por linha */
@media (max-width: 600px) {
  .produtos {
    grid-template-columns: 1fr;
  }
}
```

### JavaScript

O JavaScript define o **comportamento**: é a linguagem de programação que é executada no navegador e permite que a página reaja às ações do usuário, como filtrar os produtos ao selecionar uma categoria, validar um formulário antes de enviá-lo ou abrir o carrinho de compras.

## Conversando com o backend

Os produtos da loja normalmente não ficam escritos diretamente no HTML. Como vimos no post sobre banco de dados, essas informações são dinâmicas: caso o administrador da loja adicione um produto novo, ele precisa aparecer para o cliente sem que alguém altere a página manualmente.

Por isso, o frontend solicita esses dados para o backend, normalmente através de uma API, e recebe a resposta em um formato estruturado, como o JSON.

```javascript
async function carregarProdutos(categoria) {
  const resposta = await fetch(`/api/produtos?categoria=${categoria}`);
  const produtos = await resposta.json();

  const lista = document.querySelector('.produtos');
  lista.innerHTML = produtos
    .map((produto) => `<li class="produto">${produto.nome}</li>`)
    .join('');
}

carregarProdutos('camisetas');
```

A resposta do backend poderia ser algo como:

```json
[
  { "id": 1, "nome": "Camiseta A", "preco": 59.9 },
  { "id": 2, "nome": "Camiseta B", "preco": 59.9 }
]
```

Repare que existe um acordo entre as duas pontas: o frontend precisa saber qual endereço chamar e qual será o formato da resposta, e o backend precisa respeitar esse formato. Esse acordo é o que chamamos de **contrato** da API.

E assim como no backend, a experiência do usuário também depende de decisões do frontend. Lembra do exemplo da tela que demora 20 segundos para carregar? Parte desse tempo pode estar na quantidade de imagens pesadas, em requisições desnecessárias ou em uma página que só exibe algo quando todos os dados chegam. Como deixar a tela útil enquanto as informações ainda estão sendo carregadas?

## Bibliotecas e frameworks

Conforme a aplicação cresce, manter a tela sincronizada com os dados manualmente, como no exemplo acima, começa a ficar trabalhoso. Para isso, existem bibliotecas e frameworks que organizam o código em **componentes** reutilizáveis — um card de produto, um menu de categorias, um botão — e atualizam a tela automaticamente quando os dados mudam.

Alguns dos mais utilizados são: React, Next.js, Angular, Vue e Svelte. No desenvolvimento mobile, temos opções como React Native, Flutter, Kotlin (Android) e Swift (iOS).

Mas antes de escolher um framework, vale a pena entender bem a base: HTML, CSS e JavaScript continuam sendo o que o navegador executa no final.

## Livros e referências

Existem diversos materiais para você aprofundar e acompanhar a evolução do frontend. Assim como comentei no post de backend, nem tudo pode fazer sentido para o momento de carreira que você está passando, mas eu gosto de algumas referências:

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Learn): documentação e guias sobre HTML, CSS e JavaScript;
- [web.dev](https://web.dev/learn): cursos sobre CSS, acessibilidade e performance;
- [JavaScript: The Definitive Guide (David Flanagan)](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/);
- [Don't Make Me Think (Steve Krug)](https://sensible.com/dont-make-me-think/): sobre usabilidade e a experiência de quem está do outro lado da tela.
