const fs = require('fs');
// importing the file system module

const data = fs.readdirSync("./");
console.log(data)
// console.log('File System Module:', fs);

// Reading a file synchronously
const fileContent = fs.readFileSync('fileSystemModule.js', 'utf8');
console.log('File Content:', fileContent);

fs.readdir("./", (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
    } else {
        console.log('Files in directory:', files);
    }
});
