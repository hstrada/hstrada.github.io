---
title: '[BackEnd02] Criando a API'
excerpt: 'Transformando o projeto em uma API e formando o JSON que o frontend vai consumir.'
coverImage: '/assets/blog/backend-02-criando-a-api/cover.jpg'
date: '2026-10-22T14:00:00.000Z'
author: Helena Strada
categories: ['BackEnd', 'C#', '.NET', 'API', 'JSON']
---

## Tópicos que você verá nesse post

- O que é uma API
- Do console para a web
- Configurando a conexão
- Formando o JSON
- Criando os endpoints
- Testando a API

## Contexto

No [post anterior](/blog/post/backend-01-models-e-repositorios), conectamos o backend ao banco de dados da loja e mostramos as categorias e os produtos no console. O backend já sabe **buscar** as informações, mas elas só aparecem para quem está executando o projeto.

Para que a tela da loja consiga exibir esses dados, o frontend precisa de uma forma de pedir essas informações para o backend. E é aqui que entra a API.

## O que é uma API

Uma API (Application Programming Interface) é a interface que o backend disponibiliza para que outras aplicações consigam conversar com ele. No caso da web, essa conversa acontece através do protocolo HTTP: o frontend envia uma **requisição** para um endereço e o backend devolve uma **resposta**.

![API](/assets/blog/backend-02-criando-a-api/api.png)
*O frontend conversa com a API, que utiliza o repositório para buscar os dados no banco*

Cada requisição possui alguns elementos:

- **Endereço**: o caminho que identifica o recurso, como `/api/products`;
- **Método**: a ação que queremos realizar. O `GET` busca informações, o `POST` cria, o `PUT` atualiza e o `DELETE` remove. Repare que são equivalentes aos comandos `SELECT`, `INSERT`, `UPDATE` e `DELETE` que vimos na série de banco de dados;
- **Parâmetros**: informações extras, como o filtro de uma categoria em `/api/products?category=Camisetas`.

E cada resposta possui um **status code**, um número que indica o resultado da requisição. Entre os mais comuns:

- **200 OK**: a requisição deu certo;
- **201 Created**: um registro foi criado;
- **400 Bad Request**: a requisição enviada possui algum problema;
- **404 Not Found**: o recurso solicitado não foi encontrado;
- **500 Internal Server Error**: aconteceu um erro inesperado no backend.

## Do console para a web

Ao invés de criar um projeto novo, vamos aproveitar o que já construímos: as models, o contexto e os repositórios continuam exatamente os mesmos. O que muda é **como** essas informações são entregues.

No arquivo `Shopping.csproj`, altere o SDK do projeto de `Microsoft.NET.Sdk` para `Microsoft.NET.Sdk.Web` e remova a linha do `OutputType`:

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net10.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="10.0.13" />
  </ItemGroup>

</Project>
```

O SDK web traz o ASP.NET Core, o framework do .NET para a construção de aplicações web e APIs. Ao final do post, a estrutura do projeto ficará assim:

```
Shopping/
├── Data/
│   └── ShoppingContext.cs
├── Models/
│   ├── Category.cs
│   └── Product.cs
├── Repositories/
│   ├── CategoryRepository.cs
│   └── ProductRepository.cs
├── Responses/
│   ├── CategoryResponse.cs
│   └── ProductResponse.cs
├── appsettings.json
├── Program.cs
└── Shopping.csproj
```

## Configurando a conexão

Como comentamos no post anterior, a string de conexão não deveria ficar no código. Crie um arquivo `appsettings.json` na raiz do projeto:

```json
{
  "ConnectionStrings": {
    "Shopping": "Server=localhost,1433;Database=Shopping;User Id=sa;Password=Sa#p4ssword;TrustServerCertificate=True"
  }
}
```

E o contexto deixa de configurar a conexão sozinho para recebê-la de fora, através do construtor:

```csharp
using Microsoft.EntityFrameworkCore;
using Shopping.Models;

namespace Shopping.Data;

public class ShoppingContext : DbContext
{
    public ShoppingContext(DbContextOptions<ShoppingContext> options) : base(options)
    {
    }

    public DbSet<Category> Categories => Set<Category>();
    public DbSet<Product> Products => Set<Product>();
}
```

Quem vai entregar essa configuração é o próprio ASP.NET Core, como veremos no `Program.cs`. Em um ambiente real, a senha ainda sairia desse arquivo e ficaria em variáveis de ambiente ou em um cofre de segredos, mas para os nossos exemplos o `appsettings.json` é suficiente.

## Formando o JSON

Antes de criar os endereços da API, precisamos decidir **o que** será devolvido para o frontend. Poderíamos devolver as models diretamente, mas elas representam a estrutura do banco de dados e não necessariamente o que a tela precisa. Alguns problemas que isso pode trazer:

- **Exposição**: qualquer coluna nova na tabela passaria a ser enviada automaticamente, inclusive informações que não deveriam ser públicas;
- **Acoplamento**: uma mudança no banco de dados mudaria o formato da resposta e quebraria o frontend;
- **Relacionamentos**: o produto possui uma categoria, que possui uma lista de produtos, que possuem uma categoria... e assim por diante.

Por isso, vamos criar objetos de resposta que definem exatamente o formato do JSON. Em C#, um `record` é uma ótima opção para isso:

```csharp
using Shopping.Models;

namespace Shopping.Responses;

public record CategoryResponse(int Id, string Title)
{
    public static CategoryResponse From(Category category)
    {
        return new CategoryResponse(category.Id, category.Title);
    }
}
```

```csharp
using Shopping.Models;

namespace Shopping.Responses;

public record ProductResponse(
    int Id,
    string Name,
    string? Description,
    decimal Price,
    string Category)
{
    public static ProductResponse From(Product product)
    {
        return new ProductResponse(
            product.Id,
            product.Name ?? string.Empty,
            product.Description,
            product.Price ?? 0,
            product.Category?.Title ?? string.Empty);
    }
}
```

Repare em algumas decisões que tomamos aqui:

- **Categoria**: ao invés do objeto inteiro da categoria, o produto devolve somente o seu título, que é o que a tela exibe;
- **Nulos**: o nome e o preço deixam de ser nulos na resposta. Se o banco de dados não tiver essa informação, devolvemos um valor padrão e o frontend não precisa tratar esse caso;
- **Método `From`**: centraliza a conversão de uma model para a resposta, então ela não se repete em cada endereço da API.

Esse é o **contrato** que comentamos no [post de frontend](/blog/post/frontend-00-o-que-e): o formato que o backend se compromete a devolver.

## Criando os endpoints

Um endpoint é a combinação de um método e um endereço, como o `GET /api/products`. Com o ASP.NET Core, podemos criá-los diretamente no `Program.cs`:

```csharp
using Microsoft.EntityFrameworkCore;
using Shopping.Data;
using Shopping.Repositories;
using Shopping.Responses;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ShoppingContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Shopping")));

builder.Services.AddScoped<CategoryRepository>();
builder.Services.AddScoped<ProductRepository>();

var app = builder.Build();

app.MapGet("/api/categories", (CategoryRepository repository) =>
{
    return repository.GetAll().Select(CategoryResponse.From);
});

app.MapGet("/api/products", (string? category, ProductRepository repository) =>
{
    var products = category is null
        ? repository.GetAll()
        : repository.GetByCategory(category);

    return products.Select(ProductResponse.From);
});

app.MapGet("/api/products/{id}", (int id, ProductRepository repository) =>
{
    var product = repository.GetById(id);

    return product is null
        ? Results.NotFound()
        : Results.Ok(ProductResponse.From(product));
});

app.Run();
```

Vamos por partes:

- **Serviços**: o `AddDbContext` registra o contexto utilizando a string de conexão do `appsettings.json`, e o `AddScoped` registra os repositórios. Antes, no console, nós mesmos criávamos esses objetos com `new`. Agora o ASP.NET Core cria e entrega cada um deles para quem precisar, o que chamamos de **injeção de dependência**;
- **Categorias**: o `GET /api/categories` devolve todas as categorias;
- **Produtos**: o `GET /api/products` devolve todos os produtos ou, caso o parâmetro `category` seja informado, somente os produtos daquela categoria;
- **Produto**: o `GET /api/products/{id}` devolve um produto específico, ou o status **404** caso ele não exista.

Para o último endpoint, adicione o método `GetById` no `ProductRepository`:

```csharp
public Product? GetById(int id)
{
    return _context.Products
        .Include(product => product.Category)
        .FirstOrDefault(product => product.Id == id);
}
```

Repare que não precisamos converter nada para JSON manualmente: o ASP.NET Core faz essa conversão automaticamente a partir dos objetos de resposta, e ainda transforma os nomes das propriedades para o padrão *camelCase*, como `Name` para `name`.

## Testando a API

Execute o projeto:

```bash
dotnet run
```

O endereço em que a API está rodando é exibido no terminal, como `http://localhost:5000` (a porta pode ser diferente na sua máquina). Você pode acessar os endpoints diretamente no navegador ou utilizar uma ferramenta como o Postman ou o `curl`:

```bash
curl http://localhost:5000/api/categories
```

```json
[
  { "id": 3, "title": "Blusas" },
  { "id": 1, "title": "Camisetas" },
  { "id": 4, "title": "Jaquetas" },
  { "id": 2, "title": "Tênis" }
]
```

Filtrando os produtos pela categoria de tênis:

```bash
curl -G http://localhost:5000/api/products --data-urlencode "category=Tênis"
```

Uma URL não aceita caracteres como o `ê` diretamente, eles precisam ser codificados (`T%C3%AAnis`). O navegador faz isso automaticamente, mas no `curl` utilizamos o `--data-urlencode`. Caso contrário, a API responde com o status **400 Bad Request**.

```json
[
  {
    "id": 5,
    "name": "Tênis A",
    "description": "Tênis de corrida",
    "price": 549.00,
    "category": "Tênis"
  },
  {
    "id": 6,
    "name": "Tênis B",
    "description": "Tênis casual",
    "price": 670.00,
    "category": "Tênis"
  }
]
```

E buscando um produto que não existe, a resposta é o status **404 Not Found**:

```bash
curl -i http://localhost:5000/api/products/99
```

```
HTTP/1.1 404 Not Found
```

Compare com o resultado do post anterior: são as mesmas informações que mostramos no console, mas agora em um formato que qualquer aplicação consegue consumir. No próximo post, vamos fazer o frontend da loja buscar esses dados e construir a tela.
