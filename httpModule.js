const http = require('http');
// importing the http module    
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        
        res.write("Welcome to the home page!");
    }else if (req.url === '/about') {
        res.write("Welcome to the about page!");
    } else {
        res.write("Page not found!");
    }

    res.end();
});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
