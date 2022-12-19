---
title: 'Paradigmas'
description: Paradigma imperativo - funcional 
date: '2020-02-02'
modified_date: '2020-02-02'
image: /assets/images/posts/random-img.jpg
---

En las primeras clases de paradigmas de programación me resulto interesante 
la diferencias entre utilizar un algoritmo iterativo y uno funcional.

Bloque de codigo imperativo

```js

for (let i = 0 ; i < ar.length; i++)
 { incrementar += ar[i]; 
   console.log(incrementar);
 }

```


En la primera solucion imprimimos los estados de la variable global incrementar 
sumando los valores de arreglo ar
 


Bloque de codigo funcional 

```js
ar.map(x => incrementar += x)


```

En la segunda devolvemos el arreglo ar sumando los valores de la variable incrementar
