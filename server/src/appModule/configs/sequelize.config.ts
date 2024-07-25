import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModuleAsyncOptions } from '@nestjs/sequelize';
import { Todo } from 'src/todoModule/model/todo.model';

export const getSequlizeConfig = (): SequelizeModuleAsyncOptions => ({
  inject: [ConfigService],
  imports: [ConfigModule],
  useFactory: () => ({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    models: [Todo],
  }),
});
