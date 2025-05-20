import { Injectable } from "@nestjs/common";        // makes the class injectable in Node.js
import { Todo } from "./entities/todo.entity";    // import the Todo entity
import * as fs from "fs";                           // allows to work with file 
import * as path from "path";                       // allows to work with path

const DB_FILE = path.join(__dirname, 'todo.json');  // path to the database file

@Injectable()
export class TodoService {
    
    private readTodos(): Todo[]{
        if(!fs.existsSync(DB_FILE)){
            return []
        }
        const data = fs.readFileSync(DB_FILE, 'utf-8'); 
        return JSON.parse(data) as Todo[];                       
    }

}