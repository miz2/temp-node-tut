const http=require('http')
const server=http.createServer((req,res)=>{
    // below req will return when we refresh the page
    console.log(req);
    if(req.url==='/'){
        res.end('Hello and Welcome to home page')
    }
    if(req.url==='/about'){
        res.end("Welcome to about US!")
    }
    // error page
    res.end(`
    <h1>Oops!</h1>
    <p>We can not find the page where u wanna go<p>
    <a href="/">Back Home</a>
    `)
})
server.listen(8000)