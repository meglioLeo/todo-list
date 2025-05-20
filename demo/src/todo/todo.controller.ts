import { Controller, Get, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';

@Controller('todos')
export class TodoController {

    constructor(private readonly todoService: TodoService) {} // inject the TodoService

    @Get()
    getAllTodos(): Todo[] {
        return this.todoService.readTodos(); // return all todos
    }

    @Get(':id')
    getTodoById(@Param('id') id:string): Todo | null {
        return this.todoService.readTodoById(id); // return todo by id
    }
}