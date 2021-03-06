import "reflect-metadata"
import { configureContainer } from './container';

const bootstrap = async () => {
  const container = configureContainer();

  process.on('uncaughtException', error => {
    console.error(`Uncaught: ${error.toString()}`, error);
  });

  process.on('unhandledRejection', error => {
    if (error) {
      console.error(`Unhandled: ${error.toString()}`, error);
    }
  });

  const { server } = container.cradle;

  const port = process.env.PORT || 3000;
  server.listen(port);
  console.log(`Service start at: http://0.0.0.0:${port}`);
};

bootstrap();
