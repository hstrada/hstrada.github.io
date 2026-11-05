// The course structure: area → journey → lessons (post slugs, in reading order).
// A post that isn't listed here shows up under "Avulsos".

export type JourneyConfig = {
  slug: string;
  name: string;
  description: string;
  lessons: string[];
  // Journey suggested when this one ends, which may be in another area.
  next?: string;
};

export type AreaConfig = {
  key: string;
  name: string;
  description: string;
  journeys: JourneyConfig[];
};

export const AREAS: AreaConfig[] = [
  {
    key: 'banco-de-dados',
    name: 'Banco de Dados',
    description: 'Como os dados são pensados, estruturados e manipulados.',
    journeys: [
      {
        slug: 'modelagem-de-dados',
        name: 'Modelagem de dados',
        description:
          'Do que é um banco de dados até desenhar o modelo da nossa loja virtual.',
        lessons: [
          'bd-00-o-que-sao-bancos-de-dados',
          'bd-01-modelagem-de-dados',
          'bd-02-mer-der'
        ],
        next: 'sql-na-pratica'
      },
      {
        slug: 'sql-na-pratica',
        name: 'SQL na prática',
        description:
          'Criando o banco no SQL Server e inserindo, consultando, atualizando e removendo registros.',
        lessons: [
          'bd-03-criando-bd',
          'bd-04-docker-sql-server',
          'bd-05-inserindo-registros',
          'bd-06-selecionando-registros',
          'bd-07-atualizando-registros',
          'bd-08-deletando-registros',
          'bd-09-exercicios-modelagem'
        ],
        next: 'api-da-loja'
      }
    ]
  },
  {
    key: 'backend',
    name: 'BackEnd',
    description: 'As regras e os serviços que ficam por trás da tela.',
    journeys: [
      {
        slug: 'api-da-loja',
        name: 'Construindo a API da loja',
        description:
          'Conectando o C# ao banco de dados e formando o JSON que o frontend vai consumir.',
        lessons: [
          'backend-00-o-que-e',
          'backend-01-models-e-repositorios',
          'backend-02-criando-a-api'
        ],
        next: 'tela-da-loja'
      },
      {
        slug: 'extensoes-csharp-kotlin',
        name: 'Extensões em C# e Kotlin',
        description:
          'Adicionando comportamento a tipos existentes, nas duas linguagens.',
        lessons: ['csharp-01-extension-methods', 'kotlin-01-extension-functions']
      }
    ]
  },
  {
    key: 'frontend',
    name: 'FrontEnd',
    description: 'O que a pessoa vê e como a tela conversa com o backend.',
    journeys: [
      {
        slug: 'tela-da-loja',
        name: 'Construindo a tela da loja',
        description:
          'Como uma página é construída e como exibir os dados que vêm da API.',
        lessons: ['frontend-00-o-que-e', 'frontend-01-construindo-a-tela']
      }
    ]
  }
];
