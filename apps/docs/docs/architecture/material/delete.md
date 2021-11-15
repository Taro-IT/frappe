# PP-HA68 - Delete material

## Requisito

- Yo como administrador quiero eliminar un material para poder quitar los que ya no se ofrecen.


## Acceptance criteria

_Dado un material existente_

_Cuando se confirme su eliminación_

_Entonces el material ya no estará activo y no saldrá en la vista general_


## Diagramas

| Diagrama | Artefactos |
| ---------------------|------------------------ |
|Diagrama de actividad| [Diagrama](https://app.diagrams.net/#G1kUiv_Q0W6wJ5dc7AuMC07ChIvaYKfbkg)|

## Documentación API

### DELETE Update Material
  `http://localhost:3000/api/material/:id`


  **Inputs**

  Recibe un id como param.

  **Params**

  |Llave|Valor|Ejemplo|Descripción|
  |----|------|----|----|
  |Id| UUID | 37ff754d-66d8-40f5-b4fc-a72d2331213c |Id del material que se va a borrar|

  **Outputs**

  _Default:_ id del material borrado.

  _MaterialNotFound:_ No existe un material con el identificador especificado.

## Artefactos generados

- [Pull Request](https://github.com/Taro-IT/frappe/pull/53/)


## Autores

- Karla Daniela Romero Pérez

## Auditoría
-

## Versión

- 1.0 - Creación del documento
