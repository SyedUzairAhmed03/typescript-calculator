#!/usr/bin/env node

import inquirer from "inquirer";

for (let i = 0; i < 4;) {
    let answer = await inquirer.prompt([{
            message: "enter your first number",
            type: "number",
            name: "num1",
        },
        {
            message: "enter your second number",
            type: "number",
            name: "num2",
        },
        {
            message: "select operater",
            type: "list",
            choices: ["+", "-", "/", "*"],
            name: "operater"
        }]);
        function sum(a:number , b:number) {
            return a + b;
        }
        function divide(num1:number, num2:number) {
            return num1 / num2;
        }
        function diff(num1 : number, num2: number) {
            return num1- num2
        }
        function product(num1 : number, num2: number) {
            return num1* num2
        }
        
    if (answer.operater === "+") {
        let result = sum(answer.num1, answer.num2);
        console.log(result);
    }
    else if (answer.operater === "-") {
        let sub = diff(answer.num1, answer.num2);
        console.log(sub);
    }
    else if (answer.operater === "*") {
        let pro = product(answer.num1, answer.num2);
        console.log(pro);
    }
    else if (answer.operater === "/") {
        let div = divide(answer.num1, answer.num2);
        console.log(div);
    }
    ;
    let contineu = await inquirer.prompt({
        message: "do you want to continue",
        type: "list",
        choices: ["yes", "No"],
        name: "i"
    });
    if (contineu.i == "No") {
        break;
    }
}
