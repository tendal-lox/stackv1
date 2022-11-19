const stack = require('./testStack')
const chalk = require('chalk')

const newStack = new stack()

newStack.length()

newStack.push(10)
newStack.push(20)

newStack.length()

const outputData1 = newStack.pop()

newStack.length()

console.log(chalk.blue.bgWhite.bold('poped data is', outputData1))

newStack.writeToFile(1234)