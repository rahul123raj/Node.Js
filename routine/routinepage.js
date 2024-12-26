const fs = require('fs')
const http = require('http')

const PORT = 5000
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.writeHead(200,'ok',{'content-type':'text/html'})
        fs.createReadStream('index.html','utf-8').pipe(res)
    }else if(req.url == '/about'){
        res.writeHead(200,'ok',{'content-type' : 'text/html'})
        fs.createReadStream('about.html','utf-8').pipe(res)
    }else{
        res.end('not found')
    }
})

server.listen(PORT, err =>{
    if(err) throw err
    console.log(`server is started on port : ${PORT}`)
})