---
id: code-standard
slug: /code-standard
sidebar_position: 2
---

import TOCInline from '@theme/TOCInline';

# Estándar de código

A continuación se muestra el estándar que sigue el repositorio de Frappé. Por favor utilizar esta documentación para hacer revisiones de código, acompañado de la [checklist de código](https://docs.google.com/spreadsheets/d/1BTfYvNCsBmU54sY2hRHbU0hQRsxRtR4aCTtCfFbPxrI/edit?usp=sharing).

---

<TOCInline toc={toc} />

---

## Convención de nombres

### Folders

Todos los folders dentro del repositorio deberán estar escritos en _snake-case_, exceptuando los que contengan componentes de React, los cuales deberán estar escritos en _PascalCase_.

Ejemplos de folders **que no son componentes de React:** `libs`, `api-gateway`, `category`, `find-by-name`.

Ejemplos de folders **que son componentes de React:** `OrderList`, `Button`, `Card`, `AddOrder`.

### Archivos

Los archivos deberán estar escritos en _camelCase_, a excepción de los pertenecientes al folder libs, y archivos de tipo _dto_, los cuales deberán estar en _PascalCase_, exceptuando los archivos `index.ts` e `index.tsx`.

Ejemplos de nombres **fuera del folder libs:** `order.routing.ts`, `updateCategoryHandler.ts`.

Ejemplos de nombres **dentro del folder libs, dto's y dto's:** `Product.ts`, `CreateOrderCommandHandler.ts`, `CreateCategory.dto.ts`.

### Clases e interfaces

Todas las clases e interfaces deberán estar escritas en _PascalCase_.

Ejemplos de **nombres de clases e interfaces:** `CategoryCommandHandler`, `UpdateCategoryNameBody`.

### Variables y arrow functions

Todas las variables y arrow functions deberán estar escritas en _camelCase_, exceptuando componentes funcionales de React. Los nombres deberán ser representativos de la función que cumplen.

Ejemplos de **nombres de variables y arrow functions:** `orderRepository`, `Button`, `listCategoriesHandler`.

### Tipos

Los tipos deberán ser nombrados en _PascalCase_, donde la primera palabra es el nombre del modelo perteneciente al dominio.

Ejemplos de **nombres de tipos:** `AccountSignUpCommandPayload`, `CategoryProps`.

### Modelos

Los modelos deberán nombrarse de acuerdo al contexto y en _PascalCase_.

Por ejemplo los archivos del modelo de contexto **_category_** se llamarán `Category`, `CategoryId` y `CategoryName`.

---

## Sintáxis

### Imports

- Los imports del mismo módulo deben ser relativos.

  Por ejemplo: `import { MongoCriteriaMapper } from "./MongoCriteriaMapper";`

- Los imports de otros módulos deben ser absolutos.

  Por ejemplo: `import { CategoryRepository } from '@frappe/category/domain';`

- Todos los modelos del caso de uso tienen un método `toPrimitives()` y `fromPrimitives()`

- Los tabs son de 2 espacios.
- Todo el código debe estar en inglés.

### Comentarios

- Todas las funciones deben estar comentadas, explicando de manera concisa el propósito de la misma.

- Los comentarios de las funciones deberán seguir el estándar [tsdoc](https://tsdoc.org/).
  Por ejemplo:

```ts
/**
 * Creates a new Category @see {@link Category}
 * @param id - The id of the category
 * @param name - The name of the category
 *
 * @returns a new Category
 */
async createCategory(id: string, name: string) {
  return new Category(id, name);
}
```

:::info

En caso de utilizar el tag `@see` para hacer referencia a algun otro archivo, linkear el documento con el tag `@link` de la forma en que se usa en el ejemplo de arriba.

:::

## Autores

- Eric Buitrón López
- Eduardo Andrés Castillo Perera
- Mauricio Alvarez Milán
