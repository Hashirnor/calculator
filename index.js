#! /usr/bin/env node 
import inquirer from "inquirer";
const result = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    { message: "select one of the operator to perform your operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiply", "division"],
    },
]);
// condition
if (result.operator === "addition") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator === "subtraction") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator === "multiply") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator === "division") {
    console.log(result.firstNumber / result.secondNumber);
}
else {
    console.log("please select valid operator");
}
