#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bgYellowBright.bold("\n \t Wellcome to CodeWithAliya - Todo-List Application \n"));
// while(conditions){
//     let addTask = await inquirer.prompt([
//         {
//             name: "task",
//             type : "input",
//             message : chalk.bgGreenBright.bold("Enter your New Task:")
//         }
//     ]);
//     todoList.push(addTask.task);
//     console.log(chalk.greenBright.bold`${addTask.task} added in Todo-List successfully`);
//     let addMoreTask = await inquirer.prompt([
//         {
//             name : "addmore",
//             type: "confirm",
//             message: chalk.bgHex("Do you want to add more task ?"),
//             default: "False",
//         }
//     ]);
//     conditions = addMoreTask.addmore
// };
// console.log(chalk.cyanBright.bold("Your updated Todo-List 
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choices",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choices === "Add Task") {
            await addTask();
        }
        else if (option.choices === "Delete Task") {
            await deletTask();
        }
        else if (option.choices === "Update Task") {
            await updateTask();
        }
        else if (option.choices === "View Todo-List") {
            await viewTasks();
        }
        else if (option.choices === "Exit") {
            conditions = false;
        }
    }
    ;
};
//function to add new task
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added succesfullyin todo list.`);
};
//function to add view all todo  list task
let viewTasks = () => {
    console.log("\n Your todo list \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1} : ${task}`);
    });
};
//function to dlt a task
let deletTask = async () => {
    await viewTasks();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the `index no` of the task you want to dlete:",
        }
    ]);
    let deletTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletTask} this task has been deleted successdfully from your  Todo-list\n`);
};
// function to update a task
let updateTask = async () => {
    await viewTasks();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            tyype: "number",
            message: "Enter the `index no` of the task you want to update:"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name:"
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [for updated list check option: "view Todo-List" ]`);
};
main();
