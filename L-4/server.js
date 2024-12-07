const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;


const myServer = http.createServer((req,res)=>{
    res.end("<h1>First Server</h1>");
});

myServer.listen(hostname,port, ()=>{
    console.log(`Server is running successfully at http://${hostname}:${port}`);
});

