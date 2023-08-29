import Task from "./task";

class TaskList {
    constructor(public taskList : Task[] = []){}

    // List Task
    listTasks(){
        for (const task of this.taskList){
            console.log(task);
        }
    }

    // Add Task
    addTask(task : Task){
        this.taskList.push(task);
        console.log(`${task} has been added to the task list.`)
    }



    // Mark Task
    markTask(id:number){
        for (const task of this.taskList){
            if (task.id === id){
                if (task.completed === false){
                    task.completed = true;
                    console.log(`Task with id ${id} marked as completed!`);
                } 
                else{
                    console.log(`Task with id ${id} is already completed!`);
                } 
                return;
            }
            
        }
        console.log(`No task with id ${id} found`)
    }

    // Remove Task
    removeTask(id:number){
        const currLen: number = this.taskList.length;

        this.taskList = this.taskList.filter(item => item.id!== id);

        if (currLen === this.taskList.length){
            console.log(`No task with id ${id} found`)
        }
        else{
            console.log(`Task with id ${id} is already completed!`);
        }
    }
    




}












export default TaskList;