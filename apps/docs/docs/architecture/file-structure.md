---
name: Estructura de Archivos
sidebar_position: 2
---

# Estructura de archivos

La estructura de Frappé es un mono repositorio donde se manejan tanto frontend como backend en el mismo lugar, pero como aplicaciones separadas.

El repositorio está dividido en dos secciones principales: `apps` y `libs`. La estructura del mono repositorio es la siguiente:

## Apps

En este folder se encuentran todas las aplicaciones que utiliza el sistema de frappé. Es decir, backoffice, api-gateway y docs.

### Backoffice

Es el frontend de la aplicación correspondiente al área administrativa de Cínica. En esta aplicación, se podrán crear, eliminar, actualizar y leer categorías, productos, órdenes de compra, etc.

Es una aplicación de React que utiliza el framework Next.js. Por esta razón, todas las rutas de la aplicación se definen en el folder pages, ya que Next nos brinda la posibilidad de tener rutas dinámicas.

### API Gateway

Es una api escrita en Express y corre en un servidor. Regresa contenido JSON. Es la aplicación correspondiente a utilizar las librerías definidas en el folder libs, para modificar y recuperar data proveniente de la base de datos.

## Libs

Este folder contiene todas las librerías que se utilizan en la sección de apps. Dentro del proyecto, estamos usando un acercamiento a la arquitectura llamado Domain Driven Design (DDD).

Este acercamiento establece, por cada modelo (por ejemplo, category, product, order, etc), 3 capas principales: application, domain e infrastructure o persistance.

### Domain

En esta capa se definen todos los modelos de datos que se van a usar en la aplicación. Por ejemplo, si queremos definir la estructura de un producto, definiríamos un modelo denominado Product.

### Application

En esta capa se define la lógica correspondiente a cada caso de uso. Dependiendo del contexto (Product, Category, Order, etc), tendremos varios casos de uso en la capa de application. Se deberá crear un folder por cada caso de uso.

Por cada caso de uso, se deben crear 3 archivos (adicionales al `index.ts`):
El caso de uso en sí (`ProductCreator`, `CategoryUpdater`, `OrderDeleter`, etc)
El Command Handler (`CreateProductCommandHandler`, `UpdateCategoryCommandHandler`, `DeleteOrderCommandHandler`, etc)
El Command (`CreateProductCommand`, `UpdateCategoryCommand`, `DeleteOrderCommand`, etc)
Por ejemplo, la estructura dentro de la librería Product, se vería de la siguiente manera:

```
product
├── application
│   └── src
│       ├── create
│       ├── update
│       │   ├── name
│       │   │   ├── index.ts
│       │   │   ├── UpdateProductNameCommandHandler.ts
│       │   │   ├── UpdateProductNameCommand.ts
│       │   │   └── ProductCreator.ts
│       │   ├── price
│       │   ├── color
│       │   └── index.ts
│       └── index.ts
├── domain
└── persistance
```
