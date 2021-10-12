---
sidebar_position: 1
---

# Technology Stack

Se optó por la utilización del stack de desarrollo MENN.

## Tecnologías

- MongoDB

  - ¿Por qué?
    - Permite el cambio del schema de datos de una manera sencilla
    - Sistema de control de acceso robusto
  - La arquitectura debe permitir el cambio sencillo y rápido de motor de base de datos
  - La arquitectura debe permitir el poder utilizar otro motor de base de datos en el caso de que un requisito lo requiera

- Express

  - ¿Por qué?
    - Framework minimalista y flexible de fácil acceso
    - Facilidad de encontrar documentación
    - Creación de APIs de manera fácil, sencilla y eficiente
  - La arquitectura debe permitir el cambio de Framework Backend de manera que no afecte la lógica de negocio

- Next

  - ¿Por qué?
    - Permite hacer uso de los diferentes esquemas de renderizado para una aplicación web
      - Server Side Rendering (SSR)
      - Static Site Generator (SSG)
      - Single Page Application (SPA)
    - Capacidades out-of-the-box que reducen el tener que configurar libs adicionales
    - Permite la reutilización de componentes facilitando el desarrollo

- Node
  - ¿Por qué?
    - Permite funciones Event-Driven
    - Permite ejecuciones asíncronas
    - Rápido y altamente escalable

Después de analizar los requerimientos del proyecto así como la experiencia de todos los miembros del equipo se tomó la decisión de utilizar este stack debido a que era el que cubría mejor con las necesidades del proyecto y permitía un desarrollo más rápido.
Por otra parte se optó por utilizar el mismo lenguaje de programación para backend y frontend debido al poder reutilizar código entre ambas partes y así tener una forma de desarrollar más rápida y sencilla.

La comunicación entre los diferentes componentes tecnológicos puede ser vista en el siguiente diagrama:

![Communication between the technology components](../assets/stack-communication.png 'Stack Communication')
