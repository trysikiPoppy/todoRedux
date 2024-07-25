import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoModule } from 'src/todoModule/todo.module';
import { getSequlizeConfig } from './configs/sequelize.config';

@Module({
  imports: [
    TodoModule,
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync(getSequlizeConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
