---
title: 'Extension Methods no C# & Extension Functions no Kotlin'
excerpt: 'Extension Methods no C# & Extension Functions no Kotlin'
coverImage: '/assets/blog/csharp-01-extension-methods/cover.jpg'
date: '2024-04-02T13:30:00.000Z'
author: Helena Strada
categories: ['Extension Methods', 'C#', 'Kotlin', 'Extension Functions']
---

## Tópicos que você verá nesse post

- O que são e como criar Extension Methods no C#
- Extension Function no Kotlin

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

## Extension Function

Assim como no C#, no Kotlin temos a funcionalidade de adicionar o mesmo recurso. Isso facilita o processo de alteração a partir do momento em que esse método precisa ser reescrito, não precisamos alterar a lógica em todos os lugares que o chamam, mas somente no método de extensão.
E auxilia também nos testes. A partir do momento em que essa extensão sofrer alteração, os testes irão notificar a mudança e devem quebrar ao serem executados.

```kotlin
import java.text.Normalizer

fun main() {
    val wordWithAccent = "áéíóú_ãõ_àèìòù"
    println(wordWithAccent.unaccented())
}

fun String.unaccented(): String {
    val regex = Regex("[^\\p{ASCII}]")

    return Normalizer
        .normalize(this, Normalizer.Form.NFD)
        .replace(regex, String())
}
```
