import { injectable } from 'inversify';

@injectable()
export class ValidateEnvironments {
  private variablesEnv = [
    'NODE_PATH',
    'NODE_ENV',
    'MONGO_DB_URI',
    'MONGOOSE_SECONDS_TO_RETRY_CONNECTION',
    'NODE_TLS_REJECT_UNAUTHORIZED',
    'APPLICATION_PORT',
  ];

  public validate() {
    this.variablesEnv.forEach((env) => {
      const isEnvDefined = env in process.env;
      if (!isEnvDefined) {
        throw new Error(`Env var ${env} IS NOT SET`);
      }
    });
  }
}
