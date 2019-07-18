import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { DatabaseModule } from './database/database.module';
import { ModelModule } from './model/model.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [TodoController],
  providers: [],
})
export class AppModule {}
