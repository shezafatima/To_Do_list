#! /usr/bin/env node

import inquirer from "inquirer"
let todos:string[]=[];
let condition = true;
while (condition){
    let  addTask = await inquirer.prompt([
        {
            name:"todo",
            type:"input",
            message:"What you want to add in your todos?",
        },
        {
            name:"addMore",
            message:"Do you want to add more?",
            type:"confirm",
            default:"true"
        }
    ]);

    todos.push(addTask.todo),
    condition=addTask.addMore
    console.log(todos);
}