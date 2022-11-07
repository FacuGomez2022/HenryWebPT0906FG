var fs = require("fs");
var http = require("http");
//var imagenes = require("./images")

// Escribí acá tu servidor

http
  .createServer((req, res) => {
    let info = req.url;
    if (req.url){
      fs.readFile(`${__dirname}/images/${info}.jpg`, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Hubo un error, este perro no existe");
        } else {
          res.writeHead(200, { "Content-Type": "image/jpg" });
          res.end(data);
        }
      });
    }

   
  })
  .listen(3000, "127.0.0.1");
