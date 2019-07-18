import { ModelModule } from './../model/model.module';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { TodoService } from './todo/todo.service';
import { todoProviders } from 'src/model/todo.providers';

@Module({
  imports: [ModelModule],
  providers: [TodoService],
  exports: [TodoService],
})
export class ServicesModule {}
