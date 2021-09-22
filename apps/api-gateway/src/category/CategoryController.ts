import {CommandBus} from "@tshio/command-bus";
import {QueryBus} from "@tshio/query-bus";
import {Request, Response} from "express";

interface CategoryControllerDeps {
  readonly commandBus: CommandBus;
  readonly queryBus: QueryBus;
}

export class CategoryController {
  private readonly commandBus: CommandBus;
  private readonly queryBus: QueryBus;

  constructor({ commandBus, queryBus }: CategoryControllerDeps) {
    this.commandBus = commandBus;
    this.queryBus = queryBus;
  }

  async create({ body }: Request, res: Response) {

    res.send({ ok: true }).status(201);
  }
}
