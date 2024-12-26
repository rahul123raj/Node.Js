// //! 1st step : importing http
// let http = require('http')
// // console.log(http)

// //! 2nd step : creating server
// let server = http.createServer((req,res)=>{
//     //todo : create or set header
//     res.writeHead(200,'ok',{'content-type' : 'text/plain'})

//     //todo : end msg to the cycle
//     res.end('This msg is from server side') //? output will display in browser
// })

// //! 3rd step : listen to server
// server.listen(5000,(err)=>{
//     if(err) throw err
//     console.log('server is started with port no 5000') //? out will display in terminal
// })


// //? In cmd / terminal : node filename.js
// //? in browser url : to run(localhost : 5000)


// let http = require('http')
// let {readFile} = require('fs')

// let server = http.createServer((req,res)=>{
//     // res.writeHead(200,'ok',{'content-type' : 'text/plain'})
//     // res.end('this is from server side')
//     readFile('index.html','utf-8',(err,data)=>{
//         if (err) {
//             throw err
//         }else{
//                 res.writeHead(200,'ok',{'content-type' : 'text/html'})
//                 res.end(data)
//         }

//     })
    
// })

// server.listen(5000, err =>{
//     if(err) throw err
//     console.log('server is started')
// })

//! example of reading json file in seerver

// let http = require('http')
// let {readFile} = require('fs')

// let server = http.createServer((req,res)=>{

//     readFile('data.json','utf-8',(err,data)=>{
//         if (err) {
//             throw err
//         }else{
//                 res.writeHead(200,'ok',{'content-type' : 'application/json'})
//                 res.end(data)
//         }

//     })
    
// })

// server.listen(5000, err =>{
//     if(err) throw err
//     console.log('server is started on port no 5000')
// })


//! example : reading html file in server with createReadStream

// let http = require('http')
// let fs = require('fs')

// let server = http.createServer((req,res)=>{

//     res.writeHead(200,'ok',{'content-type' : 'text/html'})
//   let data = fs.createReadStream('index.html','utf8')
//     data.pipe(res)
// })

// server.listen(5000, err =>{
//     if(err) throw err
//     console.log('server is started on port no 5000')
// })

// let http = require('http')
// let fs = require('fs')

// let server = http.createServer((req,res)=>{

//     res.writeHead(200,'ok',{'content-type' : 'application/json'})
//   let data = fs.createReadStream('data.json','utf8')
//     data.pipe(res)
// })

// server.listen(5000, err =>{
//     if(err) throw err
//     console.log('server is started on port no 5000')
// })

//! 

let http = require('http')
let fs = require('fs')

let server = http.createServer((req,res)=>{

  if(req.url === '/'){
    res.writeHead(200,'ok',{'content-type' : 'application/json'})
    let data = fs.createReadStream('data.json','utf8')
      data.pipe(res)
  }else if(req.url === '/about'){
    res.writeHead(200,'ok',{'content-type' : 'text/html'})
    fs.createReadStream('index.html','utf-8').pipe(res)
  }else{
    // console.log('not found')
    res.end('not found')
  }
  

})

server.listen(5000, err =>{
    if(err) throw err
    console.log('server is started on port no 5000')
})