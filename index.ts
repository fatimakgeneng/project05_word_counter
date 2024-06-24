#! /usr/bin/env node

import inquirer from 'inquirer'

//const wordCounter = (paragraph:string) => paragraph.replace(/\s/g,'').length
 
function wordCounter(paragraph: string): number {
    let freeWhiteSpace = paragraph.replace(/\s/g, ''); // To remove all Whitespaces
    return freeWhiteSpace.length;
}

async function startCounter(counter: (text: string) => number) {
    while (true) {
        let User = await inquirer.prompt({
            type: 'input',
            message: 'Write your paragraph here',
            name: 'paragraph'
        });

        console.log(counter(User.paragraph));

        // A way to exit the loop, such as checking for a specific input
        let exit = await inquirer.prompt({
            type: 'confirm',
            message: 'Do you want to enter another paragraph?',
            name: 'continue'
        });

        if (!exit.continue) {
            break;
        }
    }
}

startCounter(wordCounter);