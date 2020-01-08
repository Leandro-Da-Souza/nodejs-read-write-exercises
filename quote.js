const fs = require('fs');

const alice = `"Why, sometimes I've believed as many as six impossible things before breakfast."`;

fs.writeFile('alicequotes.txt', alice, err => {
    if (err) console.log(err);
    console.log('File written...');
});
