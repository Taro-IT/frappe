import {AwilixContainer} from "awilix";
import {asArray} from "@tshio/awilix-resolver";

export const commandHandlers = (container: AwilixContainer) => {
  container.register({
    commandHandlers: asArray<unknown>([

    ])
  })
}
