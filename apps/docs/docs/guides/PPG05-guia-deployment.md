# PPG05 - Guía de deployment Frappé

## Objetivo(s)

- Generar una versión consumible del sistema en un ambiente de producción o staging

## Pre-requisitos

Verificar que la línea a desplegar este lista para ello

- Los test pasaron satisfactoriamente
- Puede realizarse un build de la línea
- Cumple con la revisión de calidad (Checklist de código, Lint y Statis Testing)

## Pasos a seguir

### Staging
  - Realizar el merge de una Feature branch a la rama dev


### Production
  - Realizar el merge de la rama dev a la main 

Una vez que se aprueba el merge de la rama, se llama el Workflow de GitHub Actions el cual hace lo siguiente:

- Se genera un release en github (label en base a los commits generados)
- Se selecciona el nombre del proyecto a desplegar  
  - **prod** 
    - API - Azure App Service - cinica-mx
    - Front - Vercel - cinica-backoffice | cinica-ecommerce
  - **staging** (pruebas-cinica-mx-node)
    - API - Azure App Service - pruebas-cinica-mx-node
    - Front - Vercel - frappe-backoffice | frappe-ecommerce
- Se inicia la creación y despliegue de los artefactos de release

Una vez finalizada la acción, [En el area de releases](https://github.com/Taro-IT/frappe/releases) aparecerá un release con los últimos commits
realizados desde el último release.

### Consideraciones
- Existe un api gateway y dos front ends para cada etapa. 
- Las etapas estan asociadas a las ramas de github. La etapa de staging esta asociada a la rama dev, mientras que la etapa de producción esta asociada a la rama main, 
por tanto primero se hacen los merges a la rama dev, y ya despues eso se pasa a la rama main.
- Aunque los merges son instantaneos, el procedimiento para generar una solución y subirla a los servicios correspondientes puede tardar alrededor de 10 minutos.

## Salidas

- Una solución consumible en el ambiente seleccionado (prod/staging)
- Un tag con un release. El release contiene una lista de commits realizados desde el último release. [Los releases salen aquí](https://github.com/Taro-IT/frappe/releases)

## Autores

- Mauricio Alvarez 
- Vladimir Salvador
- Eduardo Castillo

## Auditoría

## Bitácora de cambios

### Versión 1.0
- Se creó la guía
