import Task from "./task";
import TaskList from "./task-list";

const task1 = new Task(1, "Buy groceries");
const task2 = new Task(2, "Finish project");

//Create tastList
const taskList = new TaskList([task1,task2]);


//Show users list of instructions they can input
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const horizontal:string = "--------------";
const option1:string = "1. List tasks";
const option2:string = "2. Add task";
const option3:string = "3. Mark task as completed";
const option4:string = "4. Remove task";
const option5:string = "5. Exit application";



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
                        const newTask = new Task(parseInt(taskId), taskTitle);
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


