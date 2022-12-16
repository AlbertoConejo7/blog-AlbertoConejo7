---
title: 'React con hoocks'
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
date: '2020-02-02'
modified_date: '2020-02-02'
image: /assets/images/posts/random-img.jpg
---

Usar estados sin escribir una clase

Example code block:

```js
import React, { useState } from 'react';

function Example() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
