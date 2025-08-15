const path = require('path');
// importing the path module
const modulePath = path.join(__dirname, 'ModulePath.js');
console.log('Module Path:', modulePath);

console.log('Current Directory:', __dirname);
console.log('Current filename:', __filename);

console.log('Path Separator:', path.sep);
console.log('Path Delimiter:', path.delimiter); 
console.log('Base Name:', path.basename(modulePath));
console.log('Directory Name:', path.dirname(modulePath));
console.log('File Extension:', path.extname(modulePath));   
console.log('Parsed Path:', path.parse(modulePath));
console.log('Resolved Path:', path.resolve(modulePath));    
console.log('Normalized Path:', path.normalize(modulePath));
console.log('Is Absolute Path:', path.isAbsolute(modulePath));
console.log('Relative Path:', path.relative(__dirname, modulePath));    
console.log('Joined Path:', path.join(__dirname, 'ModulePath.js'));
console.log('Formatted Path:', path.format({
    dir: __dirname,
    base: 'ModulePath.js'
}));
console.log('Path to URL:', path.toNamespacedPath(modulePath));
console.log('Path with Windows Style:', path.win32.join(__dirname, 'ModulePath.js'));
console.log('Path with POSIX Style:', path.posix.join(__dirname, 'ModulePath.js'));
 