import { asFunction, asValue, AwilixContainer, createContainer, InjectionMode } from 'awilix';
import { commonDependencies } from './commonDependencies';
import { configureApp } from '../app';
import http from 'http';
import { queryHandlers } from './queryHandlers';
import { commandHandlers } from './commandHandlers';
import { eventHandlers } from './eventHandlers';
import { registerCollectionModule } from '../category';
import { registerAccountModule } from '../account';
import { registerShippingModule } from '../shipping';
import { registerOrderModule } from '../order';

interface ContainerType {
  readonly server: http.Server;
}

export const configureContainer = (): AwilixContainer<ContainerType> => {
  const container = createContainer({ injectionMode: InjectionMode.PROXY });

  commonDependencies(container);
  commandHandlers(container);
  eventHandlers(container);
  queryHandlers(container);
  eventHandlers(container);

  // Register Modules
  registerCollectionModule(container);
  registerAccountModule(container);
  registerShippingModule(container);
  registerOrderModule(container);

  container.register({
    app: asFunction(configureApp).singleton()
  });

  container.register({
    server: asValue(http.createServer(container.cradle.app))
  });

  return container;
};
