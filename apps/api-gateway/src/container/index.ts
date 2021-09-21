import {asFunction, asValue, AwilixContainer, createContainer, InjectionMode} from "awilix";
import {commonDependencies} from "./commonDependencies";
import {configureApp} from "@frappe/api-gateway/server";
import http from "http";

interface ContainerType {
  readonly server: http.Server
}

export const configureContainer = (): AwilixContainer<ContainerType> => {
  const container = createContainer({ injectionMode: InjectionMode.PROXY });

  commonDependencies(container);

  container.register({
    app: asFunction(configureApp).singleton()
  });

  container.register({
    server: asValue(http.createServer(container.cradle.app))
  });

  return container;
}
