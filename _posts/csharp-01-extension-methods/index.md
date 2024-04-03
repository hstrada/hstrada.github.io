---
title: '[C#01] Extension Methods'
excerpt: 'Extension Methods no C#'
coverImage: '/assets/blog/csharp-01-extension-methods/cover.jpg'
date: '2024-04-02T13:30:00.000Z'
author: Helena Strada
categories: ['Extension Methods', 'C#']
---

## Tópicos que você verá nesse post

- O que são e como criar Extension Methods no C#

## Contexto

No dia-a-dia, você pode se deparar com tarefas que se repetem no seu código e que poderiam estar centralizadas em um local para serem reutilizadas. 

Por exemplo, você precisa remover os acentos de palavras.

```
input: áéíóú_àèìòù_ãõ
output: aeiou_aeiou_ao
```

## Extension Methods

No C#, você pode criar e utilizar as *Extension Methods* que são métodos de extensão que nos permitem adicionar funcionalidades a um tipo no C# que podem ser reaproveitadas e ajudam na centralização.

```csharp
using System.Globalization;
using System.Text;

public static class ExtensionMethods
{
    public static string unaccented(this string str)
    {
        if (null == str) return string.Empty;

        var chars = str
            .Normalize(NormalizationForm.FormD)
            .ToCharArray()
            .Where(c => CharUnicodeInfo.GetUnicodeCategory(c) != UnicodeCategory.NonSpacingMark)
            .ToArray();

        return new string(chars).Normalize(NormalizationForm.FormC);
    }
}
```

Utilizando a extension method criada.

```csharp
class Program
{
    static void Main()
    {
        var wordWithAccent = "áéíóú_àèìòù_ãõ";

        Console.WriteLine(wordWithAccent.unaccented());
    }
}
```

```console
aeiou_aeiou_ao
```
