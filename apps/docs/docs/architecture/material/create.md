# PP-HA71 - Create material

## Requisito

- Yo como administrador quiero agregar un material para ofrecer opciones a mis clientes.

## Acceptance criteria

1. Material creado correctamente:
  _Dado... el nombre e imágen de un material_
  _Cuando... el administrador oprima guardar_
  _Entonces... el material queda guardada en la base de datos_

2. Material ya existe:
  _Dado… el nombre e imagen de un material_
  _Cuando… el administrador oprima guardar_
  _Entonces… el sistema despliega mensaje de “Material ya existe“ y no guarda el material_
## Diagramas

| Diagrama | Artefactos |
| ---------------------|------------------------ |
| Modelo de datos |![Documentación de diseño](./create_data_model.png) |
| Diagrama de actividad| ![Diagrama](./create_activity_diagram.png)|
| Wireframe| ![Wireframe agregar](./create_wireframe.png)|

## Documentación API

### POST Create Material
  `http://localhost:3000/api/material/`


  **Inputs**

  Recibe un nombre y el URL a una imágen.

  **Body**

    ```json

      {
        "name": "Test 1",
      "image": "https://cinicastaticfiles.blob.core.windows.net/uploads/37ff754d-66d8-40f5-b4fc-a72d2331562c.jpeg"
      }

    ```

  **Outputs**

  _Default:_ id del material creado
  
  _MaterialAlreadyExists:_ Ya existe un material con ese nombre

## Artefactos generados

- [Pull Request](https://github.com/Taro-IT/frappe/pull/53/)


## Autores

- Karla Daniela Romero Pérez

## Auditoría
- Eric Buitrón López

## Versión

- 1.0 - Creación del documento
- 1.1 - Agregar imágenes en vez de links
