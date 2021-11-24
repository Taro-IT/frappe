# PPG05 - Guía de deployment Frappé

## Objetivo(s)

- Generar una versión consumible del sistema en un ambiente de producción o staging

## Pre-requisitos

Verificar que la línea a desplegar este lista para ello

- Los test pasaron satisfactoriamente
- Puede realizarse un build de la línea
- Cumple con la revisión de calidad (Checklist de código, Lint y Statics Testing)

:::note
Para ver si la línea cumple con estos requisitos, el [flujo de CI](https://github.com/Taro-IT/frappe/actions/workflows/ci.yml) debe mostrar un check verde
:::

## Pasos a seguir

### Staging
  - Realizar el merge de una Feature branch a la rama dev

:::note

Para monitorear el despliegue a `staging`, se puede acceder al [flujo de CD Dev](https://github.com/Taro-IT/frappe/actions/workflows/deploy-staging.yml) y ver el estatus actual. Si todo se ejecutó correctamente, deberá mostrar un check verde.

:::

### Production
  - Realizar el merge de la rama dev a la main 


:::note

Para monitorear el despliegue a `prod`, se puede acceder al [flujo de CD](https://github.com/Taro-IT/frappe/actions/workflows/deploy-prod.yml) y ver el estatus actual. Si todo se ejecutó correctamente, deberá mostrar un check verde.

:::

Una vez que se aprueba el merge de la rama, se llama el Workflow de GitHub Actions el cual hace lo siguiente:

- Se genera un release en github (label en base a los commits generados)
- Se selecciona el nombre del proyecto a desplegar  
  - **prod** 
    - API - Azure App Service - cinica-mx-node-express-api-prod
    - Front - Vercel - cinica-backoffice | cinica-ecommerce
  - **staging** (pruebas-cinica-mx-node)
    - API - Azure App Service - pruebas-cinica-mx-node
    - Front - Vercel - frappe-backoffice | frappe-ecommerce
- Se inicia la creación y despliegue de los artefactos de release

Una vez finalizada la acción, [en el area de releases](https://github.com/Taro-IT/frappe/releases) aparecerá un release con los últimos commits
realizados desde el último release.

### Consideraciones
- Existe un api gateway y dos front ends para cada etapa. 
- Las etapas estan asociadas a las ramas de github. La etapa de staging esta asociada a la rama dev, mientras que la etapa de producción esta asociada a la rama main, 
por tanto primero se hacen los merges a la rama dev, y ya despues eso se pasa a la rama main.
- Aunque los merges son instantaneos, el procedimiento para generar una solución y subirla a los servicios correspondientes puede tardar alrededor de 10 minutos.

## Salidas

- Una solución consumible en el ambiente seleccionado (prod/staging)
- Un tag con un release. El release contiene una lista de commits realizados desde el último despliegue.

## Autores

- Mauricio Alvarez 
- Vladimir Salvador
- Eduardo Castillo

## Auditoría

## Bitácora de cambios

### Versión 1.0
- Se creó la guía
