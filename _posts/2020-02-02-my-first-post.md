---
title: 'Paradigmas'
description: Paradigma imperativo - funcional 
date: '2020-02-02'
modified_date: '2020-02-02'
image: /assets/images/posts/random-img.jpg
---

En las primeras clases de paradigmas de programación me resulta interesante 
la diferencias entre utilizar un algoritmo iterativo y uno funcional.

Bloque de codigo imperativo

```js

for (let i = 0 ; i < ar.length; i++)
 { incrementar += ar[i]; 
   console.log(incrementar);
 }

```
 


Bloque de codigo funcional 

```js
ar.map(x => incrementar += x)


```
En la primera solucion 
en la segunda devolvemos un arreglo con los estados de la variable incrementar
