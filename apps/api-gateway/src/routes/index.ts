import express from "express";

export const configureRouter = (): express.Router => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send({ message: 'Welcome to api-gateway!' });
  });

  return router;
}
