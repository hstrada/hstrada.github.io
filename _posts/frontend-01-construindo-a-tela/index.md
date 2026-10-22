---
title: '[FrontEnd01] Construindo a tela'
excerpt: 'Consumindo a API da loja e construindo as categorias e os produtos na tela.'
coverImage: '/assets/blog/frontend-01-construindo-a-tela/cover.jpg'
date: '2026-10-22T15:00:00.000Z'
author: Helena Strada
categories: ['FrontEnd', 'HTML', 'CSS', 'JavaScript', 'API']
---

## Tópicos que você verá nesse post

- Servindo a tela
- A estrutura com HTML
- O estilo com CSS
- Buscando os dados
- Construindo os produtos
- Construindo as categorias
- Carregando, vazio e erro

## Contexto

No [post anterior](/blog/post/backend-02-criando-a-api), transformamos o backend da loja em uma API que devolve as categorias e os produtos em JSON. Do lado do backend, o trabalho está feito: os dados saem do banco de dados, passam pelo repositório e são entregues no formato que combinamos.

Agora vamos para a outra ponta: fazer o frontend buscar esses dados e construir a tela da loja, como apresentamos no post sobre [o que é frontend](/blog/post/frontend-00-o-que-e).

![Tela da loja construída](/assets/blog/frontend-01-construindo-a-tela/tela.png)
*A tela que vamos construir, com os dados vindos da API*

## Servindo a tela

O frontend pode ser um projeto completamente separado do backend, mas para os nossos exemplos vamos deixar a própria API entregar os arquivos da tela. No ASP.NET Core, os arquivos estáticos (HTML, CSS, JavaScript e imagens) ficam em uma pasta chamada `wwwroot`.

No `Program.cs`, logo após o `builder.Build()`, adicione as duas linhas abaixo:

```csharp
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
```

O `UseStaticFiles` permite que os arquivos da pasta `wwwroot` sejam acessados, e o `UseDefaultFiles` faz com que o `index.html` seja aberto ao acessar o endereço principal da aplicação.

Ao final do post, a estrutura do projeto ficará assim:

```
Shopping/
├── Data/
├── Models/
├── Repositories/
├── Responses/
├── wwwroot/
│   ├── app.js
│   ├── index.html
│   └── style.css
├── appsettings.json
├── Program.cs
└── Shopping.csproj
```

Como a tela e a API estão no mesmo endereço, o frontend consegue chamar a API diretamente pelo caminho, como `/api/products`. Quando o frontend fica em outro endereço, o navegador bloqueia essas chamadas por segurança, e o backend precisa liberar o acesso através de uma configuração chamada **CORS**, que veremos em um outro momento.

## A estrutura com HTML

No `index.html`, vamos definir somente a estrutura que não depende dos dados: o topo, o espaço para as categorias e o espaço para os produtos. As listas começam vazias, pois quem vai preenchê-las é o JavaScript.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>shopping.</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="topo">
      <h1 class="logo">shopping.</h1>
    </header>

    <main class="loja">
      <nav>
        <h2>Categorias</h2>
        <ul id="categorias" class="categorias"></ul>
      </nav>

      <section>
        <h2 id="titulo">Todos os produtos</h2>
        <p id="status" class="status"></p>
        <ul id="produtos" class="produtos"></ul>
      </section>
    </main>

    <script src="app.js"></script>
  </body>
</html>
```

Repare nos `id`s: `categorias`, `produtos`, `titulo` e `status`. São eles que o JavaScript vai utilizar para encontrar cada parte da tela.

## O estilo com CSS

No `style.css`, organizamos a tela em duas colunas, o menu de categorias e a grade de produtos, e voltamos para uma coluna só no celular:

```css
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: #1c1c1c;
}

.topo {
  padding: 24px 40px;
  border-bottom: 1px solid #e5e5e5;
}

.logo {
  margin: 0;
  font-size: 24px;
}

.loja {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  padding: 40px;
}

.categorias {
  list-style: none;
  padding: 0;
}

.categorias button {
  font: inherit;
  border: none;
  background: none;
  padding: 6px 0;
  font-size: 15px;
  color: #555;
  cursor: pointer;
}

.categorias button.ativa {
  color: #1a73e8;
  font-weight: 600;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;
  padding: 0;
}

.produto {
  padding: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
}

.produto h3 {
  margin: 0 0 4px;
  font-size: 16px;
}

.produto p {
  margin: 0 0 12px;
  font-size: 14px;
  color: #777;
}

.preco {
  font-weight: 600;
}

.status {
  color: #777;
}

/* no celular, um produto por linha */
@media (max-width: 600px) {
  .loja {
    grid-template-columns: 1fr;
  }

  .produtos {
    grid-template-columns: 1fr;
  }
}
```

## Buscando os dados

Agora o `app.js`. Começamos encontrando os elementos da tela e criando uma função para buscar os dados na API:

```javascript
const listaDeCategorias = document.querySelector('#categorias');
const listaDeProdutos = document.querySelector('#produtos');
const titulo = document.querySelector('#titulo');
const status = document.querySelector('#status');

const real = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

async function buscar(url) {
  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error(`Erro ${resposta.status} ao buscar ${url}`);
  }

  return resposta.json();
}
```

Alguns pontos:

- **Formatação**: a API devolve o preço como número (`549.00`), e quem decide como ele aparece na tela é o frontend. O `Intl.NumberFormat` formata o valor em reais, assim como o `CultureInfo` que utilizamos no console;
- **Status code**: o `fetch` não considera um **404** ou um **500** como erro, ele só falha quando não consegue fazer a requisição. Por isso verificamos o `resposta.ok`, que indica se o status está entre 200 e 299;
- **JSON**: o `resposta.json()` transforma o texto da resposta em objetos JavaScript.

## Construindo os produtos

Para cada produto recebido, vamos construir um card com o nome, a descrição e o preço:

```javascript
function criarCardDeProduto(produto) {
  const item = document.createElement('li');
  item.className = 'produto';

  const nome = document.createElement('h3');
  nome.textContent = produto.name;

  const descricao = document.createElement('p');
  descricao.textContent = produto.description;

  const preco = document.createElement('span');
  preco.className = 'preco';
  preco.textContent = real.format(produto.price);

  item.append(nome, descricao, preco);
  return item;
}
```

Repare que as propriedades `name`, `description` e `price` são exatamente as que definimos no `ProductResponse` da API. Esse é o contrato funcionando: o frontend confia no formato que o backend se comprometeu a devolver.

No post sobre o que é frontend, utilizamos o `innerHTML` para montar a lista. Aqui, preferimos o `createElement` com o `textContent`, que insere o valor sempre como **texto**. Imagina que alguém cadastre um produto com o nome `<script>...</script>`: com o `innerHTML`, esse conteúdo seria interpretado como código na tela de todos os clientes. Com o `textContent`, ele aparece somente como texto.

## Construindo as categorias

Ao selecionar uma categoria, a tela precisa buscar os produtos daquela categoria e substituir os que estão sendo exibidos:

```javascript
function marcarCategoria(categoria) {
  for (const botao of listaDeCategorias.querySelectorAll('button')) {
    botao.classList.toggle('ativa', botao.dataset.categoria === categoria);
  }
}

async function selecionarCategoria(categoria) {
  marcarCategoria(categoria);
  titulo.textContent = categoria || 'Todos os produtos';
  status.textContent = 'Carregando produtos...';
  listaDeProdutos.replaceChildren();

  const url = categoria
    ? `/api/products?category=${encodeURIComponent(categoria)}`
    : '/api/products';

  try {
    const produtos = await buscar(url);

    status.textContent =
      produtos.length === 0 ? 'Nenhum produto nesta categoria.' : '';
    listaDeProdutos.replaceChildren(...produtos.map(criarCardDeProduto));
  } catch (erro) {
    console.error(erro);
    status.textContent = 'Não foi possível carregar os produtos.';
  }
}
```

O `encodeURIComponent` codifica o nome da categoria para ser utilizado na URL, transformando o `Tênis` em `T%C3%AAnis`, assim como fizemos com o `--data-urlencode` no post anterior.

E para criar o menu, buscamos as categorias na API e criamos um botão para cada uma delas, além de um botão para exibir todos os produtos:

```javascript
function criarBotaoDeCategoria(texto, categoria) {
  const item = document.createElement('li');
  const botao = document.createElement('button');

  botao.textContent = texto;
  botao.dataset.categoria = categoria;
  botao.addEventListener('click', () => selecionarCategoria(categoria));

  item.append(botao);
  return item;
}

async function iniciar() {
  try {
    const categorias = await buscar('/api/categories');

    listaDeCategorias.replaceChildren(
      criarBotaoDeCategoria('Todas', ''),
      ...categorias.map((categoria) =>
        criarBotaoDeCategoria(categoria.title, categoria.title)
      )
    );

    selecionarCategoria('');
  } catch (erro) {
    console.error(erro);
    status.textContent = 'Não foi possível carregar as categorias.';
  }
}

iniciar();
```

Execute o projeto com `dotnet run` e acesse o endereço exibido no terminal. Ao selecionar a categoria de tênis, somente os seus produtos são exibidos:

![Filtrando pela categoria de tênis](/assets/blog/frontend-01-construindo-a-tela/filtro.png)
*Produtos da categoria de tênis*

## Carregando, vazio e erro

Uma tela não vive só do cenário em que tudo dá certo. Repare que o `selecionarCategoria` trata três situações além da lista de produtos:

- **Carregando**: enquanto a resposta não chega, a mensagem "Carregando produtos..." é exibida. Em uma conexão lenta, isso evita que o cliente fique olhando para uma tela vazia sem saber o que está acontecendo;
- **Vazio**: a categoria existe, mas não possui nenhum produto. A API responde com sucesso e uma lista vazia, e a tela explica isso para o cliente;
- **Erro**: a API está fora do ar ou respondeu com um erro. Ao invés de quebrar, a tela exibe uma mensagem e o detalhe do erro fica no console do navegador para quem estiver investigando.

![Categoria sem produtos](/assets/blog/frontend-01-construindo-a-tela/vazio.png)
*A categoria de blusas ainda não possui produtos*

![Erro ao carregar os produtos](/assets/blog/frontend-01-construindo-a-tela/erro.png)
*A API fora do ar ao selecionar a categoria de camisetas*

Lembra do exemplo da tela que demora 20 segundos para carregar? Esses três estados são parte da resposta: mesmo quando o problema está em outra ponta da aplicação, o frontend é quem decide o que o cliente vê enquanto isso.

E com isso fechamos o ciclo da nossa loja virtual: os dados que modelamos e armazenamos no banco de dados são buscados pelo backend, entregues em JSON pela API e construídos na tela pelo frontend.
