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

## Salidas

- Una solución consumible en el ambiente seleccionado (prod/staging)

## Autores

- Mauricio Alvarez 
- Vladimir Salvador

## Auditoría

## Bitácora de cambios

### Versión 1.0
- Se creó la guía