---
title: '[BackEnd01] Models e repositórios'
excerpt: 'Conectando o C# ao banco de dados da loja e listando os produtos no console.'
coverImage: '/assets/blog/backend-01-models-e-repositorios/cover.jpg'
date: '2026-10-22T13:00:00.000Z'
author: Helena Strada
categories: ['BackEnd', 'C#', '.NET', 'Entity Framework']
---

## Tópicos que você verá nesse post

- O que a tela precisa
- Criando o projeto
- Models
- Conectando ao banco de dados
- Repositórios
- Mostrando no console

## Contexto

Seguindo a apresentação que fizemos sobre [backend](/blog/post/backend-00-o-que-e) e [frontend](/blog/post/frontend-00-o-que-e), vamos começar a construir o backend da nossa loja virtual. E antes de escrever qualquer código, vale a pena olhar para a tela e entender o que ela precisa exibir.

![Exemplo do site da loja virtual.](/assets/blog/backend-01-models-e-repositorios/shopping.png)
*Exemplo de um site de produtos e categorias*

Olhando para a tela, temos basicamente duas informações:

- **Categorias**: o título de cada categoria, exibido no menu lateral;
- **Produtos**: o nome, o preço e a categoria a qual cada produto pertence.

Essas informações já estão armazenadas no banco de dados `Shopping` que criamos na [série de banco de dados](/blog/post/bd-03-criando-bd), nas tabelas `Categories` e `Products`. Ou seja, o nosso primeiro passo no backend é conseguir **ler** esses dados.

A construção será feita em partes. Nesse post, vamos conectar o backend ao banco de dados e apenas mostrar as informações no console. No próximo, vamos transformar esse mesmo projeto em uma API que devolve essas informações em JSON para o frontend.

### Preparando o banco de dados

Caso você ainda não tenha o banco de dados criado, siga os posts de [Docker - SQL Server](/blog/post/bd-04-docker-sql-server), [criação do banco de dados](/blog/post/bd-03-criando-bd) e [inserção de registros](/blog/post/bd-05-inserindo-registros). Para os exemplos desse post, também vamos inserir alguns produtos:

```sql
USE Shopping

-- Inserindo os produtos relacionados às categorias de Camisetas (1) e Tênis (2)
INSERT INTO Products (Name, Description, Price, CategoryId) VALUES
    ('Camiseta A', 'Camiseta básica de algodão', 59.90, 1),
    ('Camiseta B', 'Camiseta branca lisa', 59.90, 1),
    ('Camiseta C', 'Camiseta cinza estonada', 179.00, 1),
    ('Camiseta D', 'Camiseta preta', 129.90, 1),
    ('Tênis A', 'Tênis de corrida', 549.00, 2),
    ('Tênis B', 'Tênis casual', 670.00, 2)
```

Verifique os Ids das suas categorias com um `SELECT * FROM Categories`, pois eles podem ser diferentes dependendo da ordem em que foram inseridos.

## Criando o projeto

Para os exemplos, vamos utilizar o C# com o .NET. Você pode realizar a instalação através das instruções do site oficial: `https://dotnet.microsoft.com/download`.

Com o .NET instalado, crie um projeto do tipo console e entre na pasta criada:

```bash
dotnet new console -n Shopping
cd Shopping
```

Para conversar com o banco de dados, vamos utilizar o **Entity Framework Core** (EF Core), um ORM (Object-Relational Mapping). Ele faz a ponte entre o código e o banco de dados: as tabelas são representadas por classes e as consultas que escrevemos em C# são traduzidas para SQL.

```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```

Ao final do post, a estrutura do projeto ficará assim:

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
├── Program.cs
└── Shopping.csproj
```

## Models

Uma model é a representação de uma tabela no código. Cada coluna da tabela vira uma propriedade da classe, com um tipo equivalente ao que definimos no banco de dados.

Começando pelas categorias, que é a tabela que não depende de nenhuma outra:

```csharp
namespace Shopping.Models;

public class Category
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;

    public List<Product> Products { get; set; } = [];
}
```

E os produtos:

```csharp
namespace Shopping.Models;

public class Product
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    public decimal? Price { get; set; }

    public int? CategoryId { get; set; }
    public Category? Category { get; set; }
}
```

Alguns pontos de atenção:

- **Tipos**: o `DECIMAL(12,2)` do preço é representado pelo `decimal` no C#, e o `VARCHAR` e o `TEXT` pelo `string`;
- **Nulos**: o `?` indica que aquela propriedade pode ser nula. Lembra da criação da tabela de produtos? As colunas `Name`, `Description`, `Price` e `CategoryId` foram criadas sem o `NOT NULL`, então a model precisa refletir isso. Já o `Title` da categoria é obrigatório;
- **Relacionamento**: a propriedade `Category` no produto e a lista `Products` na categoria representam o relacionamento 1:N que desenhamos no [MER e DER](/blog/post/bd-02-mer-der): uma categoria possui vários produtos e um produto pertence a uma categoria.

## Conectando ao banco de dados

Para o EF Core saber onde está o banco de dados e quais tabelas ele pode acessar, criamos um **contexto**:

```csharp
using Microsoft.EntityFrameworkCore;
using Shopping.Models;

namespace Shopping.Data;

public class ShoppingContext : DbContext
{
    public DbSet<Category> Categories => Set<Category>();
    public DbSet<Product> Products => Set<Product>();

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlServer(
            "Server=localhost,1433;Database=Shopping;User Id=sa;Password=Sa#p4ssword;TrustServerCertificate=True");
    }
}
```

Cada `DbSet` representa uma tabela. Por convenção, o EF Core utiliza o nome da propriedade como o nome da tabela, por isso `Categories` e `Products` são encontradas sem nenhuma configuração extra.

A string de conexão utiliza os mesmos dados do `docker-compose.yaml` do post de [Docker - SQL Server](/blog/post/bd-04-docker-sql-server). Por enquanto ela fica no código, mas no próximo post vamos movê-la para um arquivo de configuração. Senhas não devem ficar escritas no código de uma aplicação real.

## Repositórios

Poderíamos fazer as consultas diretamente no `Program.cs`, mas conforme a aplicação cresce, as mesmas consultas começam a se repetir em diferentes lugares. O **repositório** centraliza o acesso aos dados de uma entidade: quem precisa de um produto pede para o repositório, sem precisar saber como a consulta é feita.

```csharp
using Shopping.Data;
using Shopping.Models;

namespace Shopping.Repositories;

public class CategoryRepository
{
    private readonly ShoppingContext _context;

    public CategoryRepository(ShoppingContext context)
    {
        _context = context;
    }

    public List<Category> GetAll()
    {
        return _context.Categories
            .OrderBy(category => category.Title)
            .ToList();
    }
}
```

```csharp
using Microsoft.EntityFrameworkCore;
using Shopping.Data;
using Shopping.Models;

namespace Shopping.Repositories;

public class ProductRepository
{
    private readonly ShoppingContext _context;

    public ProductRepository(ShoppingContext context)
    {
        _context = context;
    }

    public List<Product> GetAll()
    {
        return _context.Products
            .Include(product => product.Category)
            .OrderBy(product => product.Name)
            .ToList();
    }

    public List<Product> GetByCategory(string category)
    {
        return _context.Products
            .Include(product => product.Category)
            .Where(product => product.Category!.Title == category)
            .OrderBy(product => product.Name)
            .ToList();
    }
}
```

O `Include` indica que, além do produto, também queremos carregar a categoria relacionada. E o `Where` funciona como a cláusula que vimos em [selecionando registros](/blog/post/bd-06-selecionando-registros). Inclusive, a consulta do `GetByCategory` é traduzida pelo EF Core para o seguinte SQL:

```sql
SELECT [p].[Id], [p].[CategoryId], [p].[Description], [p].[Name], [p].[Price], [c].[Id], [c].[Title]
FROM [Products] AS [p]
LEFT JOIN [Categories] AS [c] ON [p].[CategoryId] = [c].[Id]
WHERE [c].[Title] = @category
ORDER BY [p].[Name]
```

![Camadas do projeto](/assets/blog/backend-01-models-e-repositorios/camadas.png)
*O Program.cs pede os dados ao repositório, que consulta o banco de dados através do contexto*

## Mostrando no console

Com tudo pronto, o `Program.cs` utiliza os repositórios para buscar as categorias e, para cada uma delas, os seus produtos:

```csharp
using System.Globalization;
using Shopping.Data;
using Shopping.Repositories;

var real = new CultureInfo("pt-BR");

using var context = new ShoppingContext();
var categoryRepository = new CategoryRepository(context);
var productRepository = new ProductRepository(context);

foreach (var category in categoryRepository.GetAll())
{
    Console.WriteLine(category.Title);

    foreach (var product in productRepository.GetByCategory(category.Title))
    {
        Console.WriteLine($"  - {product.Name}: {product.Price?.ToString("C", real)}");
    }
}
```

O `CultureInfo("pt-BR")` com o formato `"C"` (currency) formata o preço em reais. Execute o projeto:

```bash
dotnet run
```

E o resultado será:

```
Blusas
Camisetas
  - Camiseta A: R$ 59,90
  - Camiseta B: R$ 59,90
  - Camiseta C: R$ 179,00
  - Camiseta D: R$ 129,90
Jaquetas
Tênis
  - Tênis A: R$ 549,00
  - Tênis B: R$ 670,00
```

Repare que as informações são exatamente as que a tela precisa: as categorias para o menu e os produtos com nome e preço. Ainda não temos uma tela consumindo esses dados, mas o backend já sabe buscá-los.

No próximo post, vamos transformar esse projeto em uma API e formar o JSON que o frontend vai consumir.
