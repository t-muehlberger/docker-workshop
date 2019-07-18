import { Todo } from './model/todo.entity';
import { TodoService } from './services/todo/todo.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/todo')
  async getAllTodos(): Promise<Todo[]> {
    console.log('Get all TODOs');
    return await this.todoService.getAll();
  }

  @Post('/todo')
  async createTodo(@Body() todo: Todo): Promise<Todo> {
    console.log('Create a new TODO');
    return await this.todoService.createTodo(todo);
  }

  @Put('/todo/:todoId')
  async updateTodo(
    @Param('todoId') id: number,
    @Body() todo: Todo,
  ): Promise<string> {
    console.log(`Update TODO ${id}`);
    todo.id = id;
    await this.todoService.updateTodo(todo);
    return 'SUCCESS';
  }

  @Delete('/todo/:todoId')
  async deleteTodo(@Param('todoId') id: number): Promise<boolean> {
    console.log(`Delete TODO ${id}`);
    return await this.todoService.deleteTodo(id);
  }
}
