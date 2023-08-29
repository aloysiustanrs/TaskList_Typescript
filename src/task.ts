// // Longer Syntax
// class Task {
//     id:number;
//     title:String;
//     completed:Boolean;

//     constructor(id:number,title:String){
//         this.id = id;
//         this.title = title;
//         this.completed = false;
//     }
// }


//Shorter Syntax
class Task {
    constructor(public id:number,public title:String,public completed:Boolean = false) {}

    toString(): string {
        return `Task(id:${this.id},title:${this.title},completed:${this.completed})`;
    }


}

export default Task;