const fs = require('fs');

fs.readFile('alicequotes.txt', 'utf8', (err, content) => {
    if (err) console.log(err);
    console.log(content);
});
