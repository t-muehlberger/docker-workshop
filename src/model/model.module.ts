import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { todoProviders } from './todo.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...todoProviders],
  exports: [...todoProviders],
})
export class ModelModule {}
