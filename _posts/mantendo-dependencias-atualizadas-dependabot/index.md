---
title: 'Mantendo suas dependências atualizadas com o dependabot.'
excerpt: 'Caso você tenha um repositório criado em seu GitHub e que provavelmente o gerenciador de pacotes do seu projeto seja o npm, você já deve ter se deparado com o cenário abaixo em que alguns pull requests foram criados (misteriosamente).'
coverImage: '/assets/blog/mantendo-dependencias-atualizadas-dependabot/cover.webp'
date: '2022-05-06T09:00:00.000Z'
author:
  name: Helena Strada
---

Caso você tenha um repositório criado em seu GitHub e que provavelmente o gerenciador de pacotes do seu projeto seja o npm, você já deve ter se deparado com o cenário abaixo em que alguns pull requests foram criados (misteriosamente).

![Pull Requests criados pelo dependabot atualizando as versões de libs disponíveis.](/assets/blog/mantendo-dependencias-atualizadas-dependabot/preview-pull-request.webp)
*Pull Requests criados pelo dependabot atualizando as versões de libs disponíveis.*

## Motivação

Deixar as dependências sempre atualizadas é um dos pontos mais importantes quando falamos em manter um projeto. A vantagem de nos preocuparmos é que garantimos segurança, disponibilidade de novos recursos/funcionalidades e até mesmo uma melhor performance em nosso código.

## Contexto

Para contextualizar, eu criei um cenário que está diretamente ligado ao nosso dia-a-dia na empresa atuando com a criação e gerenciamento do nosso design system. Uma atualização em uma lib pode conter desde uma nova propriedade até a adição de um novo estilo visual para um componente. Partindo desde princípio nós podemos criar duas perguntas:

1. Como notificar os projetos que fazem uso dessa lib que uma nova versão está disponível?
2. Como garantir, em um cenário em que a atualização dessa lib seja obrigatória (como um breaking change, por exemplo), que os apps mantenham a versão mais recente?

![Contexto.](/assets/blog/mantendo-dependencias-atualizadas-dependabot/contexto.webp)

Nós podemos tentar fazer isso com CI/CD (CircleCI, por exemplo) colocando na pipeline o que iria implicar em alterar/adicionar um processo em todas as nossas pipelines de todos os repositórios (imagina que você tenha 20 repositórios, além de $$), mas existe uma outra ferramenta com esse objetivo: o Dependabot.

## O que é o dependabot?

O Dependabot é uma ferramenta que nos auxilia nesse processo de mantenimento de nossas dependências, realizando as checagens em um período de tempo/horários pré-estabelecidos e criando pull requests com as atualizações disponíveis para cada dependência de seu projeto.

### Mantendo as dependências atualizadas

Para começar a utilizar o dependabot em seu repositório, é necessário criar uma pasta chamada .github (caso em seu projeto ainda não tenha) e criar um arquivo chamado **dependabot.yml**.

![Criando o arquivo.](/assets/blog/mantendo-dependencias-atualizadas-dependabot/criando-arquivo.webp)
*Criando o arquivo dependabot na pasta .github.*

As configurações básicas obrigatórias para habilitar são: o *gerenciador de pacotes* (que pode ser além do npm, maven, gradle ou go, por exemplo), o *diretório* e o *tempo de intervalo* para as checagens.

![Criando o arquivo dependabot.](/assets/blog/mantendo-dependencias-atualizadas-dependabot/criando-dependabot.webp)
*Criando o arquivo dependabot.yml.*

Após a criação do arquivo com as configurações iniciais requeridas para sua utilização, você pode realizar uma adição, commit e push para sua branch principal, como por exemplo, a master/main.

Neste tópico, acessaremos através do menu do repositório escolhido, o local para visualizar a checagem das dependências sendo realizado:

`Insights` -> `Dependancy Graph` -> `Dependabot`

![GitHub Insights.](/assets/blog/mantendo-dependencias-atualizadas-dependabot/github-insights.webp)

Quando nenhuma dependência fora pré-estabelecidade como "filtro" para a checagem, todas as dependências do nosso projeto incluídas no package.json (em dependencies) serão inclusas nessa etapa de verificação.

Após o término, para cada dependência que ele tenha verificado e validado que existe uma versão mais recente, um pull request será aberto represetando cada uma delas.

![Pull Requests abertos para as dependências.](/assets/blog/mantendo-dependencias-atualizadas-dependabot/prs.webp)

*Pull Requests abertos para as dependências.*

### Explorando mais recursos

Há uma *variedade* de opções para adicionar ao arquivo de configuração.

Você pode configurar uma quantidade máxima de pull requests para uma dependência, colocar um prefixo para as mensagens de commit, indicar a branch em que o merge deve ser realizado e até mesmo adicionar um filtro para realizar a checagem em somente dependências do seu interesse.

![Recursos](/assets/blog/mantendo-dependencias-atualizadas-dependabot/recursos.webp)

### Adicionando registro para dependências privadas

Caso você esteja atuando em algum projeto em que as suas dependências sejam privadas, você pode adicionar uma chave de registro para que o dependabot possa fazer a autenticação e realizar a checagem.

Para possibilitar essa ação, você precisa adicionar uma chave chamada de `registries`.

![Registries](/assets/blog/mantendo-dependencias-atualizadas-dependabot/registries.webp)
*Adicionando os registries para autenticação.*

Você pode adicionar as chaves de configuração em Settings para o seu repositório.

![Chaves](/assets/blog/mantendo-dependencias-atualizadas-dependabot/chaves.webp)
*Adicionando uma chave de configuração para o dependabot.*

## Considerações

O Dependabot é uma ferramenta extremamente útil que pode ser utilizada para automatizar o seu processo de atualização de libs e dependências em diferentes repositórios. O seu principal objetivo é garantir a segurança com um código atualizado.

Além das configurações adicionadas nesse cenário criado para apresentação, todas as opções podem ser encontradas neste link que contempla desde a estratégia de rebase que deve ser utilizada, labels para adicionar nos PR's e até mesmo os reviewers.

[Configurações e documentação para o dependabot](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#configuration-options-for-updates)

E todo o código apresentado, pode ser encontrada nesse repositório:

[readit](https://github.com/Wechoo/readit/blob/master/.github/dependabot.yml)
