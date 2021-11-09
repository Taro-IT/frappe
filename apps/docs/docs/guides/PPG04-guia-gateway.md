# PP-G03 - Guía para hacer el API Gateway de backend

## Objetivo(s)

- Orientar en la forma en que se hacen los API Gateway para un caso de uso en el repositorio

## Pre-requisitos

- Haber creado las libs correctamente, siguiendo la [Guía para hacer librerías de backend]
- Haber leido [la estructura de archivos](../architecture/file-structure)
## Pasos a seguir

### Handlers
  :::note
    Para fines ilustrativos, en esta guía se usarán ejemplos del caso CreateCategory
  :::
  1. Dentro de la carpeta `apps/api-gateway/src` crea una carpeta para tu caso de uso el nombre del módulo. (category, product, etc)
  2. Dentro de la carpeta que acabas de crear, haz una nueva con el nombre `handlers`, donde guardarás todos los manejadores para cada caso de uso, como crear, actualizar o eliminar.
  3. Crea un archivo para tu handler con el nombre `<accion><Caso>Handler.ts`, por ejemplo `createCategoryHandler.ts`, el cuál tendrá algo similar al código siguiente:


  ```typescript
      import { CommandBus } from '@tshio/command-bus';
      import { NextFunction, RequestHandler } from 'express';
      // Importa el Comando que creaste en las librerias en la capa de aplicación
      import { CreateCategoryCommand } from '@frappe/category/application';
      import { Uuid } from '@frappe/common/value-object';

      export const createCategoryHandler =
        (commandBus: CommandBus): RequestHandler =>
        async (req, res, next: NextFunction) => {

          // Para los casos de crear, define el id en este punto
          const id = Uuid.create().value;

          try {
            // Ocupas el commandBus para ejecutar el comando create, 
            // el cuál recibe una categoría que está conformada por 
            //el id que creaste en la línea anterior y el name
            // que viene del HTTP request.
            await commandBus.execute(new CreateCategoryCommand({ id, name: req.body.name }));

            // Cuando la llamada fue exitosa, regresas una respuesta HTTP con estatus 201 y envías el id de la categoría creada con formato json.
            res.status(201).json({ id });
          } catch (error) {
            next(error);
          }
        };
  ```

  Recuerda que puedes ver cómo se hicieron los casos de otros módulos para basarte, ya que hay boilerplate y a final de cuentas, es el mismo proceso para todos.
  
  4. Dentro de la misma carpeta `handlers` crea un archivo `index.ts` y exporta tus handlers de la siguiente manera:
  ```typescript
    export { createCategoryHandler } from './createCategoryHandler';
  ```

### DTOs (Data Transfer Objects)

1. Al nivel de tu caso de uso, crea la carpeta dto, donde alojaras todos los archivos de ese tipo, y crea un archivo `index.ts`
2. Crea un archivo para cada dto, un ejemplo de nombre es `CreateCategory.dto.ts` o `UpdateCategory.dto.ts`.
3. Dentro de tu dto deberás incluir todos los campos que recibes en los request de la API y validarlos con decoradores (class-validators). Puedes ver la lista de decoradores disponibles [aquí](https://github.com/typestack/class-validator).

    Un ejemplo de archivo de dto puede ser
    ```typescript
      // Importas el validador que necesitas
      import { IsNotEmpty } from 'class-validator';

      export class CreateCategoryDto {
        // Declaras el tipo y su validación
        @IsNotEmpty()
        // TODOS los campos deben ser readonly
        readonly name: string;
      }

    ```

4. En el archivo `index.ts` exporta tus dto así
    ```typescript
    export { CreateCategoryDto } from './CreateCategory.dto';

    ```
### Routing
1. En el nivel root de caso de uso, crea un archivo que se llame `<modulo>.routing.ts`, en el cual vas a registrar todas las rutas con sus métodos HTTP, además de los dtos que validarán dichas rutas. En Frappé usamos el estándar que puedes encontrar [aquí](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/#h-use-nouns-instead-of-verbs-in-endpoint-paths).

```typescript
import express from 'express';
import { CommandBus } from '@tshio/command-bus';
import { makeValidateBody } from 'express-class-validator';
// Importa los dtos
import * as dtos from './dto';
// Importa los handlers que creaste
import * as handlers from './handlers';

// Estas son las dependencias del routing, el CommandBus para comandos
// y el QueryBus para cosultas
interface CollectionRoutingDeps {
  readonly commandBus: CommandBus;
}

export const categoryRouting = ({ commandBus }: CollectionRoutingDeps) => {
  const router = express.Router();

  //La sintaxis para rutas es
  // router.<HTTP-Request>('/ruta', makeValidateBody(dtos.<Nombre-dto>), handlers.<nombre-handler>(<bus>));

  // Habrá casos donde no necesites dtos, por ello este parámetro es opcional.

  // Una ruta de creación se ve así
  router.post('/', makeValidateBody(dtos.CreateCategoryDto), handlers.createCategoryHandler(commandBus));

  // Más ejemplos de rutas
  router.patch('/:id', makeValidateBody(dtos.UpdateCategoryDto), handlers.updateCategoryHandler(commandBus));
  router.get('/', handlers.listCategoryHandler(queryBus));
  router.delete('/:id', handlers.deleteCategoryHandler(commandBus));

  // regresas el router
  return router;
};

```


2. En el nivel root de caso de uso, crea un archivo que se llame `index.ts`, en el cual vas a registrar todos tus executers, es decir, los creators, finders, listers, que hayas creado en las libs. Un ejemplo de este archivo puede ser:

```typescript
import { AwilixContainer, asClass, asFunction } from 'awilix';
// Importa el archivo de rutas que creaste en el paso anterior
import { categoryRouting } from './category.routing';
// Importa el repositorio que creaste en las libs
import { MongoCategoryRepository } from '@frappe/category/persistence/mongodb';

// Importa los creators, finders, updaters, etc.
import {
  CategoryCreator,
} from '@frappe/category/application';

// Esta función se llamará register<Caso>Module, recuerda este nombre porque lo usaremos en la siguiente sección
export const registerCategoryModule = (container: AwilixContainer) => {
  container.register({
    // Registra el creator y repite este paso para cada executer
    categoryRepository: asClass(MongoCategoryRepository).singleton(),

    // Registra el router que creaste en el paso anterior como una función
    categoryRouting: asFunction(categoryRouting).singleton()
  });
};

```

3. Dentro de la carpeta `src` dirigete a la carpeta `routes` y abre el `index.ts`. En este archivo registrarás el nombre de la ruta que usarás para tu caso de uso, es decir, si quieres que sea algo como "cinica.mx/categories".
    Siguiendo ese ejemplo, debes crear tu ruta de esta manera:
    
    Primero define el categoryRouting en la interfaz `RoutesDeps`
    ```typescript
      interface RoutesDeps {
      // este nombre debe ser igual al del router que creaste en el paso 1
      readonly categoryRouting: express.Router;
      ...
    }
    ```
    Después nombra tu ruta en el método configureRouter
    ```typescript
      router.use('/categories', routes.categoryRouting);
    ```

### Registrar handlers y módulo de routas
1. Al nivel de `src` encuentra la carpeta `container` y abre el archivo `commandHandlers.ts`, en el cuál registrarás los handlers que hayas creado en las librerías. 

    **Recuerda que en commands van los comandos, y en queries, van los queries**
    
    Después de importarlo, solo debes agregar la siguiente línea después del último.
    ```typescript
      asClass(CreateCategoryCommandHandler),
    ```

2. Ahora abre el archivo `index.ts` e importa el módulo de rutas que definiste en la fase de routing, en el paso 2, por ejemplo:

    ```typescript
    import { registerCategoryModule } from '../category';

    ```

    Después solo llámalo debajo del comentario en la línea 28, así
    ```typescript
      // Register Modules
      registerCategoryModule(container);
    ```

3. Listo, ya puedes probar tu endpoint con Postman o llamarlo desde el front-end

## Salidas

- Uno o más endpoints de API listo para probarse con Postman o Imsomnia

## Autores

- Karla Daniela Romero Pérez

## Auditoría

- Vladimir Salvador
- Mauricio Álvarez Milán

## Versión 1.0
Se creó la guía
