"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("./task"));
const task_list_1 = __importDefault(require("./task-list"));
const task1 = new task_1.default(1, "Buy groceries");
const task2 = new task_1.default(2, "Finish project");
//Create tastList
const taskList = new task_list_1.default([task1, task2]);
//Show users list of instructions they can input
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const horizontal = "--------------";
const option1 = "1. List tasks";
const option2 = "2. Add task";
const option3 = "3. Mark task as completed";
const option4 = "4. Remove task";
const option5 = "5. Exit application";
function askQuestion() {
    rl.question(`${horizontal}\n${option1}\n${option2}\n${option3}\n${option4}\n${option5}\n${horizontal}\n`, (userInput) => {
        switch (userInput) {
            case "1":
                console.log("You have selected option 1.");
                taskList.listTasks(); // Call the listTasks() method
                askQuestion();
                break;
            case "2":
                console.log("You have selected option 2.");
                rl.question('Enter task ID: ', (taskId) => {
                    rl.question('Enter task title: ', (taskTitle) => {
                        const newTask = new task_1.default(parseInt(taskId), taskTitle);
                        taskList.addTask(newTask); // Call the addTask() method
                        askQuestion();
                    });
                });
                break;
            case "3":
                console.log("You have selected option 3.");
                rl.question('Enter task ID to mark as completed: ', (taskId) => {
                    taskList.markTask(parseInt(taskId)); // Call the markTask() method
                    askQuestion();
                });
                askQuestion();
                break;
            case "4":
                console.log("You have selected option 4.");
                rl.question('Enter task ID to remove: ', (taskId) => {
                    taskList.removeTask(parseInt(taskId)); // Call the removeTask() method
                    askQuestion();
                });
                break;
            case "5":
                console.log("You have selected option 5.");
                rl.close();
                break;
            default:
                console.log("No such option, please try again.");
                askQuestion();
        }
    });
}
askQuestion(); // Start asking the question
