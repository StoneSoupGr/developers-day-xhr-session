var http = require("http"),
    path = require("path"),
    fs = require("fs")

var server = http.createServer(function(req, res) {


  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    })
    var htmlPath = path.join(__dirname, "index.html"),
        stream = fs.createReadStream(htmlPath)
    stream.pipe(res)

  } else if (req.url === "/message") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    })
    res.write('{ "message": "Hello it now is ' + new Date() + 'on the server " }')
    res.end()  
    
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain"
    })
    res.write("File Not Found")
    res.end()
  }
})

server.listen(8081, "0.0.0.0")

