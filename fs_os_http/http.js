let http = require('http')

let server = http.createServer((req, res) => {
    res.write("hello aiub");
    res.end();
})


// http://localhost:2000/

server.listen(2000, () => {
    console.log("Server is running on 2000");
})