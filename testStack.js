const winston = require('winston');
const chalk = require('chalk')
const fs = require('fs');
const logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.Console()
        ]
  });

function stack(){

    let items = []

    return {
        push: (inputData) => {
            items[items.length] = inputData
            logger.info(`Pushed data is ${inputData}`)
            // try{
            //     fs.writeFileSync('text.txt', items)
            // }catch{
            //     console.error(chalk.red('Error happened'))
            // }
        },
        writeToFile: function (input) {
            fs.writeFile('text.txt', input, (err) => {
                return console.log('done')
            })
        },
        pop: () => {
            let outputData = items[items.length-1]
            logger.info('data poped')
            items = items.splice(0, items.length-1)
            return outputData
        },
        length: () => {
            let lengthNumber = items.length
            logger.info(`Array length number is ${lengthNumber}`)
        }
    }
     
}

// stack.prototype.writeToFile = ()=>{
//     fs.writeFile('text.txt', "sdkfhkashdfkjaskjfd", (err)=>{
//         if (err) throw err;
//         console.log('The file has been saved!');
//         })
// }

module.exports = stack