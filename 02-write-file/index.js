const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const stream = fs.createWriteStream(filePath);

process.stdin.pipe(stream);
