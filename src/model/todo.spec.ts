import { Todo } from './todo.entity';

describe('Todo', () => {
  it('should be defined', () => {
    expect(new Todo()).toBeDefined();
  });
});
