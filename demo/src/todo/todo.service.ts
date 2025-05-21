import { Injectable } from "@nestjs/common";        // makes the class injectable in Node.js
import { Todo } from "./entities/todo.entity";    // import the Todo entity
import * as fs from "fs";                           // allows to work with file 
import * as path from "path";                       // allows to work with path

const DB_FILE = path.resolve(process.cwd(), 'data', 'todo.json');  // path to the database file

@Injectable()
export class TodoService {
    
    public readTodos(): Todo[]{          // read the todos from the database file
        if(!fs.existsSync(DB_FILE)){      // check if the file exists
            return []
        }
        const data = fs.readFileSync(DB_FILE, 'utf-8');   // read the file synchronously
        return JSON.parse(data) as Todo[];                // parse the file content to Todo array
    }

    public readTodoById(id: string) :Todo | null{
        const todos = this.readTodos();   // read the todos from the database file
        const todo = todos.find(todo => todo.id === Number(id));  // find the todo by id
        return todo || null;               // return the todo or null if not found
    }

    public createTodo(todoData: Omit<Todo, 'id'>): Todo {      // parameter todoData is a Todo without the id property
        const todos = this.readTodos();   // read the todos from the database file

        const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1; // get the new id

        const newTodo: Todo = {
            id: newId,
            ...todoData
        };

        todos.push(newTodo); // add the new todo to the array

        fs.writeFileSync(DB_FILE, JSON.stringify(todos, null, 2)); // write the todos to the file

        return newTodo; // return the new todo

    }

    public deleteTodo(id: string): boolean{
        const todos = this.readTodos();
        const todoIndex = todos.findIndex(todo => todo.id === Number(id)); // find the index of the todo by id

        if(todoIndex === -1){ // check if the todo was found
            return false;
        }

        todos.splice(todoIndex, 1); // remove the todo from the array

        fs.writeFileSync(DB_FILE, JSON.stringify(todos, null, 2)); // write the todos to the file
        return true;
    }
}