"use strict";
// // Longer Syntax
// class Task {
//     id:number;
//     title:String;
//     completed:Boolean;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(id:number,title:String){
//         this.id = id;
//         this.title = title;
//         this.completed = false;
//     }
// }
//Shorter Syntax
class Task {
    constructor(id, title, completed = false) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
    toString() {
        return `Task(id:${this.id},title:${this.title},completed:${this.completed})`;
    }
}
exports.default = Task;
