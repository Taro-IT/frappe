import {asFunction, asValue, AwilixContainer, createContainer, InjectionMode} from "awilix";
import {commonDependencies} from "./commonDependencies";
import {configureApp} from "../app";
import http from "http";
import {queryHandlers} from "./queryHandlers";
import {commandHandlers} from "./commandHandlers";
import {eventHandlers} from "./eventHandlers";

interface ContainerType {
  readonly server: http.Server
}

export const configureContainer = (): AwilixContainer<ContainerType> => {
  const container = createContainer({ injectionMode: InjectionMode.PROXY });

  commonDependencies(container);
  commandHandlers(container);
  eventHandlers(container);
  queryHandlers(container);

  container.register({
    app: asFunction(configureApp).singleton()
  });

  container.register({
    server: asValue(http.createServer(container.cradle.app))
  });

  return container;
}
