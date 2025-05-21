import { Controller, Get, Param, Post, Body, Delete, NotFoundException, Patch } from '@nestjs/common';
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
    getTodoById(@Param('id') id:string): void {
        const found =  this.todoService.readTodoById(id); 
        if(!found){
            throw new NotFoundException(`${id} not found`); // throw an error if not found
        }
    }

    @Post()
    createTodo(@Body() todoData: any): Todo{
        return this.todoService.createTodo(todoData); // create a new todo
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string): void {
        const deleted = this.todoService.deleteTodo(id); // delete todo by id
        if(!deleted){
            throw new NotFoundException(`${id} not found`); // throw an error if not found
        }
    }

    @Patch(':id/status')
    toggleStatus(@Param('id') id: string): void {
        const updated = this.todoService.toggleStatus(id); // toggle the status of the todo
        if(!updated){
            throw new NotFoundException(`${id} not found`); // throw an error if not found
        }
    }

}