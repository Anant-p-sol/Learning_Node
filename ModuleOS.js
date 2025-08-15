const os = require('os');
// importing the os module
const osInfo = {
    platform: os.platform(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    cpuCount: os.cpus().length,
    uptime: os.uptime()
};
console.log('OS Information:', osInfo);

if (os.platform() === 'linux') {
    console.log('You are using a Linux operating system.');
}else if (os.platform() === 'win32') {
    console.log('You are using a Windows operating system.');
}else if (os.platform() === 'darwin')   {
    console.log('You are using an Mac operating system.');
}else {
    console.log('Unknown operating system.');
}