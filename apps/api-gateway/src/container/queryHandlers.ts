import {AwilixContainer} from "awilix";
import {asArray} from "@tshio/awilix-resolver";

export const queryHandlers = (container: AwilixContainer) => {
  container.register({
    queryHandlers: asArray<unknown>([

    ])
  })
}
