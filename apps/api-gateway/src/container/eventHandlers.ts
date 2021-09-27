import {AwilixContainer} from "awilix";
import {asArray} from "@tshio/awilix-resolver";

export const eventHandlers = (container: AwilixContainer) => {
  container.register({
    eventSubscribers: asArray<unknown>([

    ])
  })
}
