"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskList {
    constructor(taskList = []) {
        this.taskList = taskList;
    }
    // List Task
    listTasks() {
        for (const task of this.taskList) {
            console.log(task);
        }
    }
    // Add Task
    addTask(task) {
        this.taskList.push(task);
        console.log(`${task} has been added to the task list.`);
    }
    // Mark Task
    markTask(id) {
        for (const task of this.taskList) {
            if (task.id === id) {
                if (task.completed === false) {
                    task.completed = true;
                    console.log(`Task with id ${id} marked as completed!`);
                }
                else {
                    console.log(`Task with id ${id} is already completed!`);
                }
                return;
            }
        }
        console.log(`No task with id ${id} found`);
    }
    // Remove Task
    removeTask(id) {
        const currLen = this.taskList.length;
        this.taskList = this.taskList.filter(item => item.id !== id);
        if (currLen === this.taskList.length) {
            console.log(`No task with id ${id} found`);
        }
        else {
            console.log(`Task with id ${id} is already completed!`);
        }
    }
}
exports.default = TaskList;
