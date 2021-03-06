---
title: Ambiente Local
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuración del ambiente local

## Tecnologías

- Node v14.17.6
- MongoDB v4.4
- Docker (Opcional)

## Instalación

Los siguiente los pasos para instalar las tecnologías usadas para el desarrollo del proyecto:

### Node

<Tabs>
  <TabItem value="download" label="Ejecutable" default>
    <ol>
      <li> Acceder a las opciones de descarga del sitio oficial de <a href="https://nodejs.org/download/release/v14.17.6/"> nodejs </a> </li>
      <li> Seleccionar el ejecutable correspondiente para el sistema operativo en el que estes </li>
      <li> Iniciar el ejecutable una vez termine la descarga </li>
    </ol>
  </TabItem>

  <TabItem value="nvm" label="NVM">
     <ol>
      <li> <a href="https://github.com/nvm-sh/nvm#installing-and-updating"> Guía de instalación de NVM </a> </li>
      <li> En una terminal ejecuta el comando <code class="language-bash"> nvm install v14.17.6 </code> </li>
      <li> Crear un archivo .nvmrc en a nivel root del repositorio </li>
      <li> Ejecuta el comando <code class="language-bash"> nvm use</code> {" "} a nivel del archivo .nvmrc </li>
     </ol>
  </TabItem>
</Tabs>

### MongoDB (Opcional)

Instalar solo en caso de que se necesite tener una versión local de MongoDB en tu ambiente de desarrollo de lo contrario usar la base de datos desplegada en <a href="https://www.mongodb.com"> MongoDB Atlas</a>.

<Tabs>
  <TabItem value="download" label="Ejecutable" default>
  </TabItem>

  <TabItem value="docker" label="Docker">
  </TabItem>
</Tabs>
