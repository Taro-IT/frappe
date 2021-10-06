import {asClass, asFunction, asValue, AwilixContainer} from "awilix";
import {MongoClientFactory, MongoCriteriaMapper} from "@frappe/common/persistence/mongodb";
import {QueryBus} from "@tshio/query-bus";
import {CommandBus} from "@tshio/command-bus";
import {EventDispatcher} from "@tshio/event-dispatcher";
import {configureRouter} from "../routes";
import { createLogger, restrictFromProduction } from "@tshio/logger";
import * as admin from 'firebase-admin';

const connectFirebase = () =>
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId: process.env.FIREBASE_PROJECT_ID
    })
  })

const provideFirebaseAuth = ({ firebaseApp }: { firebaseApp: admin.app.App }): admin.auth.Auth => firebaseApp.auth();

export const commonDependencies = (container: AwilixContainer) => {
  container.register({
    restrictFromProduction: asValue(restrictFromProduction(process.env.NODE_ENV)),
    logger: asValue(createLogger(process.env, ["accessToken", "refreshToken"])),
    mongoUrl: asValue(process.env.MONGO_URL),
    mongoClient: asFunction(MongoClientFactory).singleton(),
    mongoCriteriaMapper: asClass(MongoCriteriaMapper).singleton(),
    router: asFunction(configureRouter).singleton(),
    queryBus: asClass(QueryBus).classic().singleton(),
    commandBus: asClass(CommandBus).classic().singleton(),
    eventBus: asClass(EventDispatcher).classic().singleton(),
    firebaseApp: asFunction(connectFirebase).singleton(),
    firebaseAuth: asFunction(provideFirebaseAuth).singleton()
  });
}
