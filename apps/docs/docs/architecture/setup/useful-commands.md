---
title: Comandos utiles
sidebar_position: 3
---

# Useful Commands

Para simplificar los comandos se recomienda la instalación de nx de manera global:

```shell
npm i -g @nrwl/cli
```

- Ejecución de ambiente de desarrollo

  ```shell
  # with npm
  npm run nx -- run-many --target serve --projects backoffice-frontend,api-gateway --parallel 2

  # with nx
  nx run-many --target serve --projects backoffice-frontend,api-gateway --parallel 2
  ```

- Iniciar una aplicación en modo development

  ```bash
  # With npm
  npm start appName

  # With nx
  nx run appName:serve
  ```

- Ejecución de eslint en las apps y libs modificadas con base en la rama "main"

  ```shell
  # with npm
  npm run affected:lint

  # with nx
  nx affected:lint
  ```

- Ejecución de Unit Test en las apps y libs modificadas con base en la rama "main"

  ```shell
  # with npm
  npm run affected:test

  # with nx
  nx affected:test
  ```
