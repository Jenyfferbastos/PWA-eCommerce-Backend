import 'reflect-metadata';
import dotenv from 'dotenv';

dotenv.config();

import { container } from './config/container';

import { Bootstrap } from 'src/Bootstrap';

const application = container.get(Bootstrap);

application.start();
