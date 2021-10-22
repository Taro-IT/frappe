# PP-HA99 Listar órdenes de compra

## Requisito

- Yo como administrador quiero ver las órdenes de compra de mis clientes para ver el backlog de las órdenes.

## Acceptance criteria

1. Ver las órdenes de compra

**Dado** que existan órdenes de compra en el sistema

**Cuando** un usuario administrativo haga click en Órdenes

**Entonces** el sistema despliega el listado de órdenes de compra.

2. No existen órdenes de compra

**Dado** que no existan ordenes de compra en el sistema

**Cuando** un usuario administrativo haga click en Órdenes

**Entonces** el sistema despliega mensaje “No hay órdenes de compra“.

## Diagramas de diseño

| Tipo de diagrama      | Artefactos                                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Diagrama de actividad | ![Solution Chart](../../assets/pp-99.png 'List orders')                                                               |
| Wireframes            | [PP-99](https://www.figma.com/file/MiuSV67DUVkzMeMKJeAhP0/Backoffice?node-id=0%3A1)                                   |
| Diseño de pruebas     | [PP-99](https://taro-depto-ti.atlassian.net/wiki/spaces/FC/pages/10977281/FRAPPE-99+Presentar+Data+al+Taller#Pruebas) |

## Artefactos generados

- <a href="https://github.com/Taro-IT/frappe/pull/31">Pull request</a>

## Autores

- Mauricio Alvarez Milán
- Jorge Arturo Sánchez Arreola

## Auditoría

-

## Versión

- 1.0 - Creación del documento
