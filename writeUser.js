const fs = require('fs');
const stdin = process.stdin;

let file = fs.createWriteStream('userinput.txt');

// console.log(stdin);
const stdinCallback = input => {
    let text = input.toString();
    if (text.indexOf('exit') !== -1) {
        console.log('Exiting...');
        file.end();
    } else {
        file.write(text);
    }
};

stdin.addListener('data', stdinCallback);
