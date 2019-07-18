import { TODO_REPOSITORY, DATABASE_CONNECTION } from './../constants';
import { Todo } from './todo.entity';
import { Connection, Repository } from 'typeorm';

export const todoProviders = [
  {
    provide: TODO_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Todo),
    inject: [DATABASE_CONNECTION],
  },
];
