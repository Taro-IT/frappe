import express from "express";
import {CommandBus} from "@tshio/command-bus";
import {CreateCategoryCommand} from "@frappe/category/application";

interface CollectionRoutingDeps {
  readonly commandBus: CommandBus
}

export const categoryRouting = ({ commandBus }: CollectionRoutingDeps) => {
  const router = express.Router();

  router.post('/', async (req, res) => {
    await commandBus.execute(new CreateCategoryCommand({ name: req.body.name }));

    res.send({ ok: true });
  });

  return router;
}
