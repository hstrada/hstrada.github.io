---
title: '[Kotlin01] Extension Functions'
excerpt: 'Extension Functions no Kotlin'
coverImage: '/assets/blog/kotlin-01-extension-functions/cover.jpg'
date: '2024-04-03T08:40:00.000Z'
author: Helena Strada
categories: ['Kotlin', 'Extension Functions']
---

## Tópicos que você verá nesse post

- Extension Functions no Kotlin

## Contexto

No dia-a-dia, você pode se deparar com tarefas que se repetem no seu código e que poderiam estar centralizadas em um local para serem reutilizadas. 

Por exemplo, você precisa remover os acentos de palavras.

```
input: áéíóú_àèìòù_ãõ
output: aeiou_aeiou_ao
```

## Extension Functions

Assim como no C# onde chamamos de extension methods, no Kotlin temos a funcionalidade de adicionar o mesmo recurso de extensão a tipos chamando de extension functions. 

Isso facilita o processo de alteração a partir do momento em que essa função precisa ser reescrita, não precisamos alterar a lógica em todos os lugares em que o chamam, mas somente no método de extensão.

Isso facilita também o processo de construção dos testes dado que a partir do momento em que essa estrutura sofrer alguma alteração, os testes irão falhar.

```kotlin
import java.text.Normalizer

fun main() {
    val wordWithAccent = "áéíóú_ãõ_àèìòù"
    println(wordWithAccent.unaccented())
}

// remover acentos
fun String.unaccented(): String {
    val regex = Regex("[^\\p{ASCII}]")

    return Normalizer
        .normalize(this, Normalizer.Form.NFD)
        .replace(regex, String())
}
```
