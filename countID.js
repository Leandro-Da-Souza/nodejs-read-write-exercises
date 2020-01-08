const fs = require('fs');

fs.readFile('style.css', 'utf8', (err, content) => {
    if (err) console.log(err);
    // console.log(content);
    const styleString = content.toString();

    const IDS = styleString.split('#').length - 1;
    console.log(IDS);
});
