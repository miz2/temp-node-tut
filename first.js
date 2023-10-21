var http=require('http')
var dt=require('./ex')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    // res.write("Current Date is "+dt.myDateTime())
    res.write(req.url)
    res.end('Hello World')
    
}).listen(8080)