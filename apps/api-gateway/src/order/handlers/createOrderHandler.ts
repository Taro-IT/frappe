import { CommandBus } from "@tshio/command-bus";
import { RequestHandler, NextFunction } from "express";
import { Uuid } from "@frappe/common/value-object";
import { CreateOrderCommand } from "@frappe/order/application"


export const createOrderHandler = (commandBus: CommandBus): RequestHandler => 
    async (req, res, next: NextFunction) => {
        const id = Uuid.create().value
        try {
            await commandBus.execute(new CreateOrderCommand({id, ...req.body}))
            res.status(201).json({id})
        } catch (error) {
            next(error)
        }
    }