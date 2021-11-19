---
id: checklist
slug: /checklist
sidebar_position: 3
---

# Checklist de código

A continuación se muestra la checklist de código utilizada en el repositorio de Frappé. Por favor utilizar esta documentación para hacer revisiones de código, acompañado de el [estándar de código](./code-standard).

[Link a documento de drive](https://docs.google.com/spreadsheets/d/1BTfYvNCsBmU54sY2hRHbU0hQRsxRtR4aCTtCfFbPxrI/edit?usp=sharing)

---

## Datos a incluir

- ID Item
- Nombre del Item
- Versión
- Verificador



## Checklist

| Criterios | Elementos | ¿Cumple? (Si, No, No aplica) | Comentarios |
| ----------------- | ----------------- | ----------------- | ----------------- |
| Estándares | <ul><li>Se sigue el estandar de código definido para nombrar archivos </li><li>Se sigue el estandar de código definido para nombrar carpetas.</li><li>Se sigue el estandar de código definido para clases, interfaces y componentes.</li><li>Se sigue el estandar de código definido para las variables.</li><li>Se sigue el estandar de código definido para los tipos</li><li>Se sigue el estandar de código definido para los modelos.</li><li>Se sigue el apartado general del estandar de código definido.</li><li>Se cumple el estándar del archivo .env</li><li>El código no tiene funciones duplicadas</li></ul> | | |
| Front end | <ul><li>La interfaz gráfica está en español</li><li>Los eventos onClick no tienen arrow functions, sino referencias a las funciones</li><li>Todos los inputs tienen placeholders</li><li>El botón "Editar" debe estar a la izquierda</li><li>No hay faltas de ortografía en las interfaces</li><li>Las acciones de "Eliminar" deben pedir confirmación</li></ul> | | |
| Arquitectura | <ul><li>Sólo importar los módulos y/o dependencias que se utilicen en el archivo (No hay ningún import que el editor de texto y ESLint marquen como warnings de imports sin utilizar).</li><li>El caso de uso sólo expone un método público, que debería ser el execute. Esto no aplica para los modelos.</li><li>Se sigue la estructura de archivos definida.</li></ul> | | |
| Comentarios | <ul><li>Todas las funciones en la capa de persistance/infrastructure están documentadas con comentarios.</li><li>Todas las clases en la capa de persistance/infrastructure están comentadas</li></ul> | | |
| Consideraciones del sistema | <ul><li>Las llaves secretas son guardadas en variables de entorno y no en código.</li><li>Las rutas del caso de uso tienen la validación del rol correcta.</li></ul> | | |
| Compilación | <ul><li>El código compila exitosamente</li><li>El caso de uso tiene un archivo de unit testing (spec.ts) el cual pasa todas las pruebas.</li></ul> | | |

---

## Salidas

- Copia de la tabla en una hoja diferente de SpreadSheet nombrada con el ID del item y los campos llenados

## Autores

- Eric Buitrón López
- Eduardo Andrés Castillo Perera
- Jorge Sánchez Arreola

## Versión

- 1.0

