import { inject, injectable, LazyServiceIdentifer } from 'inversify';

import { HttpServer } from 'src/presentations/HttpServer';
import { ValidateEnvironments } from 'src/commons/utils/ValidateEnvironments';
import { MongoDatabase } from './infra/database/mongodb/Connection';

@injectable()
export class Bootstrap {
  constructor(
    @inject(new LazyServiceIdentifer(() => HttpServer))
    private readonly httpServer: HttpServer,
    @inject(ValidateEnvironments)
    private readonly validateEnvironments: ValidateEnvironments,
    @inject(MongoDatabase) private readonly mongoDatabase: MongoDatabase,
  ) {}

  public async start(): Promise<void> {
    this.validateEnvironments.validate();
    await this.httpServer.start();
    await this.mongoDatabase.createMongoDbConnection();
    console.log(`App running on port ${process.env.APPLICATION_PORT}`);
  }
}
