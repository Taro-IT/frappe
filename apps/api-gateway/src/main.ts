import {configureContainer} from "./container";

const bootstrap = async () => {
  const container = configureContainer();

  process.on("uncaughtException", error => {
    console.error(`Uncaught: ${error.toString()}`, error);
    process.exit(1);
  });

  process.on("unhandledRejection", error => {
    if (error) {
      console.error(`Unhandled: ${error.toString()}`, error);
    }

    process.exit(1);
  });

  const { server } = container.cradle;

  const port = process.env.PORT || 3000;
  server.listen(port);
  console.log(`Running at: http://0.0.0.0:${ port }`);
}

bootstrap();
