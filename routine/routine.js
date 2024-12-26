let http = require('http')
let fs = require('fs')

let server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,'ok',{'content-type' : 'text/html'})
        let data = fs.createReadStream('index.html','utf-8')
        data.pipe(res)
    }else if(req.url === '/json'){
        res.writeHead(200,'ok',{'content-type' : 'application/json'})
        fs.createReadStream('data.json','utf-8').pipe(res)
    }else if(req.url === '/css'){
        res.writeHead(200,'ok',{'content-type' : 'text/plain'})
        fs.createReadStream('style.css','utf-8').pipe(res)
    }
    else{
        res.end('404 NOT FOUND')
    }
})

server.listen(5001, err => {
    if(err) throw err
    console.log('server is started')
})