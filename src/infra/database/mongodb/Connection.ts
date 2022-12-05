import mongoose from 'mongoose';
import { injectable } from 'inversify';

@injectable()
export class MongoDatabase {
  private mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  };
  async createMongoDbConnection() {
    await mongoose
      .connect(`${process.env.MONGO_DB_URI}`, this.mongooseOptions)
      .then()
      .catch(() => {
        const retrySeconds = Number(
          process.env.MONGOOSE_SECONDS_TO_RETRY_CONNECTION,
        );
        setTimeout(this.createMongoDbConnection, retrySeconds * 1000);
      });
  }

  async closeMongoDbConnection() {
    await mongoose.disconnect();
  }
}
