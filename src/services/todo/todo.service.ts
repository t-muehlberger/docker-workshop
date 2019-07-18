import { Todo } from '../../model/todo.entity';
import { TODO_REPOSITORY } from './../../constants';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async getAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async createTodo(todo: Todo): Promise<Todo> {
    todo.id = undefined;
    const entity = this.todoRepository.create(todo);
    return await this.todoRepository.save(entity);
  }

  async updateTodo(todo: Todo): Promise<void> {
    await this.todoRepository.update({ id: todo.id }, todo);
  }

  async deleteTodo(id: number): Promise<boolean> {
    const result = await this.todoRepository.delete(id);
    return result.affected === 1;
  }
}
