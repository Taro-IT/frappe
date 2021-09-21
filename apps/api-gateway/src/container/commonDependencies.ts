import {asClass, asFunction, asValue, AwilixContainer} from "awilix";
import {MongoClientFactory, MongoCriteriaMapper} from "@frappe/common/persistence/mongodb";
import {QueryBus} from "@tshio/query-bus";
import {CommandBus} from "@tshio/command-bus";
import {EventDispatcher} from "@tshio/event-dispatcher";
import {configureRouter} from "@frappe/api-gateway/routes";

export const commonDependencies = (container: AwilixContainer) => {
  container.register({
    mongoUrl: asValue(process.env.MONGO_URL),
    mongoClient: asFunction(MongoClientFactory).singleton(),
    mongoCriteriaMapper: asClass(MongoCriteriaMapper).singleton(),
    router: asFunction(configureRouter).singleton(),
    queryBus: asClass(QueryBus).classic().singleton(),
    commandBus: asClass(CommandBus).classic().singleton(),
    eventBus: asClass(EventDispatcher).classic().singleton()
  });
}
