import express from "express";

interface RouteType {

}

export const configureRouter = (routes: RouteType): express.Router => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send({ message: 'Welcome to api-gateway!' });
  });

  return router;
}
