#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
for (let i = 0; i < 4;) {
    let answer = await inquirer_1.default.prompt([{
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
    function sum(a, b) {
        return a + b;
    }
    function divide(num1, num2) {
        return num1 / num2;
    }
    function diff(num1, num2) {
        return num1 - num2;
    }
    function product(num1, num2) {
        return num1 * num2;
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
    let contineu = await inquirer_1.default.prompt({
        message: "do you want to continue",
        type: "list",
        choices: ["yes", "No"],
        name: "i"
    });
    if (contineu.i == "No") {
        break;
    }
}
