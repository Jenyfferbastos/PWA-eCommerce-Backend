import 'reflect-metadata';
import { Container } from 'inversify';

import { Bootstrap } from 'src/Bootstrap';
import { Utils } from 'src/presentations/helpers/Utils';
import { HttpServer } from 'src/presentations/HttpServer';

import { HttpAdapter } from 'src/infra/adapters/HttpAdapter';
import { HandleAxiosError } from 'src/infra/helpers/HandleAxiosError';
import { MongoDatabase } from 'src/infra/database/mongodb/Connection';
import { ValidateEnvironments } from 'src/commons/utils/ValidateEnvironments';
import { JwtServiceMapper } from 'src/infra/service/internal/jwt/mapper/JwtMapper';
import { JwtInternalService } from 'src/infra/service/internal/jwt/JwtInternalService';
import { ProductsRepository } from 'src/infra/database/mongodb/repositories/ProductsRepository';
import { OrderRepository } from 'src/infra/database/mongodb/repositories/OrdersRepository';
import { UserRepository } from 'src/infra/database/mongodb/repositories/UserRepository';
import { UserController } from 'src/presentations/controllers/UserController';
import { OrdersController } from 'src/presentations/controllers/OrdersController';
import { ProductsController } from 'src/presentations/controllers/ProductsController';
import { ErrorSerializationMiddleware } from 'src/presentations/middlewares/ErrorSerializationMiddleware';

const container: Container = new Container();

container.bind(Container).toConstantValue(container);

//bootstrap
container.bind(Bootstrap).toSelf();

//commons
container.bind(ValidateEnvironments).toSelf();

//presentations
container.bind(HttpServer).toSelf();
container.bind(Utils).toSelf();
container.bind(UserController).toSelf();
container.bind(OrdersController).toSelf();
container.bind(ProductsController).toSelf();
container.bind(ErrorSerializationMiddleware).toSelf();

//infra
container.bind(HttpAdapter).toSelf();
container.bind(ProductsRepository).toSelf();
container.bind(OrderRepository).toSelf();
container.bind(UserRepository).toSelf();
container.bind(MongoDatabase).toSelf();
container.bind(JwtInternalService).toSelf();
container.bind(JwtServiceMapper).toSelf();
container.bind(HandleAxiosError).toSelf();

export { container };
