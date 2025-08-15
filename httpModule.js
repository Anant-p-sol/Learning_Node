const http = require('http');
// importing the http module    
const server = http.createServer((req, res) => {
    res.write("Hello, World from server !");
    res.end();
});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
