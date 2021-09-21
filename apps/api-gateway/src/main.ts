import {configureContainer} from "@frappe/api-gateway/container";

const bootstrap = async () => {
  const container = configureContainer();

  const { server } = container.cradle;

  const port = process.env.PORT || 3000;
  server.listen(port);
  console.log(`Running at: http://0.0.0.0:${ port }`);
}

bootstrap();
