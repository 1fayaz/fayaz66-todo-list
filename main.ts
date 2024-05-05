#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList: [];
let conditions = true;


let main = async () => {
  while (conditions) {
    let option = await inquirer.prompt([
      {
        name: "Choices",
        type: "list",
        message: "Select an option you want to do: ",
        choices: [
          "Add Task",
          "Delete Task",
          "Update Task",
          "View Todo-List",
          "Exit",
        ],
      },
    ]);
    if (option.choice === "Add Task") {
      await addTask();
    } 
    else if (option.choice === "Delete Task"){
        await deleteTask()
    }
    else if (option.choice === "View Todo-List") {
      await Viewtask();
    } 
    else if (option.choice === "Exit") {
      conditions = false;
    }
  }
}

let addTask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "Task",
      type: "input",
      message: "Enter your new Task: ",
    },
  ])

  todoList.push;{newTask.Task};
  console.log(`\n ${newTask.task} task added successfully in Todo-List`)
}

let Viewtask = () => {
  console.log("\n Your Todo-List: \n");
  todoList.forEach((task, index) => {
    console.log(`${index}:${task}`);
  });
}

let deleteTask = async () => {
  await Viewtask();
  let taskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index no.' of the task you want to delete :",
    },
  ]);
  let deletedTask = todoList.splice(taskIndex.index, 1)
  console.log(`\n ${deleteTask} "This task have been deleted from your list"`);
  
}
main();
