let http = require('http')
let url = require('url')
let fs = require('fs')

const PORT = 5000

let  server = http.createServer((req,res)=>{ 
    let obj = url.parse(req.url, true)
    // console.log(obj)
    // console.log(obj.path)

    let filepath = `.${obj.pathname}text.txt`
    fs.readFile(filepath,'utf8',(err,data)=>{
        if (err)
            res.end('file not found')
            console.log(`error ${+1} : ${err}`)
        res.end(data)
        console.log(`data ${+1} : ${data}`)
    })

})

server.listen(PORT,err =>{
    if (err) throw err
    console.log(`server is started on port : ${PORT}`)
})

