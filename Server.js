const express = require('express');
const app = express();
const fs = require('fs');


app.use(express.static(__dirname)); 

app.get('/', (req, res) => {
    fs.readFile('./index.html', function(error, data) {
        if (error) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('Error: File Not Found!');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        }
        res.end();
    });
    console.log("Hello");
});

const port = 3000;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});
