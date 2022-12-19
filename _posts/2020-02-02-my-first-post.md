---
title: 'Inicios en Paradigmas de programación'
description: Paradigma imperativo - funcional 
date: '2020-02-02'
modified_date: '2020-02-02'
image: /assets/images/posts/random-img.jpg
---

En las primeras clases de paradigmas de programación me resulto interesante 
la diferencias entre utilizar un algoritmos iterativos y funcionales.

Bloque de código imperativo

```js

for (let i = 0; i < ar.length; i++)
 { incrementar += ar[i]; 
   console.log(incrementar);
 }

```


En la primera solución imprimimos los estados de la variable global incrementar 
sumando los valores de arreglo "ar"
 


Bloque de código funcional 

```js
ar.map(x => incrementar += x)
```

En la segunda devolvemos el arreglo ar sumando los valores de la variable incrementar


Podemos preguntar si en un arreglo existe algún elemento que cumpla la condición

```js
var ar = ["gato", "perro", 1, 2, 4]

function x(x)
  {
    x.map( x => x == "perro" ? 
      console.log( "Este es un perro") : 
      console.log( "No es un perro"))
  }
```

Utilizar la función filter para obtener solo los valores que cumplan la condición

```js
 const result = arr.filter(x => x == "perro")
 ```

 Un método que calcule la sumatoria de los valores de un arreglo 

 Iterativo

```js
 for(let i = 0; i < ar.length; i++) 
 { aux += ar[i]
 }

 ```

 Funcional 

```js
const initial = 0;
const sum = ar.reduce(
  (acc, current) => acc + current,
  initial
);
 ```