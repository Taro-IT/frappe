# Developer Onboarding - Frappé

## Instalación del repositorio
1. Clonar el [repositorio](https://github.com/Taro-IT/frappe/tree/main).
2. Crear la rama dev y hacerle pull
3. Instalar [docker](https://www.docker.com/products/docker-desktop)
4. Crear un archivo .env y copiar el contenido del .env.example
5. Entrar a la consola de comandos en la carpeta root del repositorio y correr los siguientes comandos:
```bash
	npm install
	docker compose up -d
```
6. Instalar Insomnia o Postman para checar las peticiones del back
7. 

--------
## Correr un ambiente local del repo
* **Correr ambiente:**
```bash
	nx run-many --target serve --projects backoffice-frontend,api-gateway --parallel 2 
```

--------------
## Capacitaciones
Las grabaciones de las capacitaciones dadas las puedes encontrar en el siguiente [link](https://drive.google.com/drive/u/0/folders/13gn9Q3hNlYKyifhG0UxqdRCdgrS6qCF9)
## Estructura de archivos
### Front-end

### Back-end
----
## Desarrollo de pruebas unitarias
---
## Hacks, cheatsheets y documentación de tecnologías usadas
###### Se recomienda el uso de un IDE como** VS Code o IntelliJ**, recomendando las siguientes extensiones

#### VS Code
|Nombre extensión | ¿Qué hace?  |
|:-------------:|:-----:|
|GitLens | Permite ver en el código quién modificó cada linea en la que pones el mouse y hace cuánto tiempo, es como tener github en el editor. |
|Tabnine | Es un autocompletador de código que usa inteligencia artificial para hacer predicciones muy específicas. Se recomienda registrarse con la cuenta institucional para tener la versión pro de manera gratuita. |
|WakaTime| Es un tracker de tiempo en código donde no tienes que iniciar ningún reloj, además de que en su plataforma web te permite ver cuánto tiempo haces código en cada proyecto, IDE e incluso en cada archivo. Por si en alguna ocasión olvidas prender el logger departamental. |

#### IntelliJ
|Nombre extensión | ¿Qué hace?  |
|:-------------:|:-----:|
|||
|||
|||


###### TypeScript Cheatsheet
Para tener siempre a la mano los hacks para usar typescript, recomendamos tener a la mano este [link](https://devhints.io/typescript)

###### Frappé Cheatsheet
> Son comandos nuestros que nos sirve tenerlos a la mano

###### Documentación de tecnologías
**[Hero Icons](https://heroicons.dev):** Iconografía de la plataforma
**[Tailwind](https://tailwindcss.com)**: Librería de estilos para la plataforma
