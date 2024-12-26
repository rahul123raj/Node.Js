let fs = require('fs')

// let readstream = fs.createReadStream('./text.txt','utf8')

// let txt = ''

// readstream.on('data',(chunk)=>{
//     // txt +=chunk
//     // console.log(txt)
//     console.log(chunk)
// })

// readstream.on('end',()=>{
//     // console.log(txt)
// })

// readstream.on('error',err =>{
//     console.log(err)
// })

// let writestream = fs.createWriteStream('text2.txt')
// let str = 'i enjoy javascript and nodejs'
// writestream.write(str)
// writestream.end()
// writestream.on('finish',()=>{
//     console.log('data is added')
// })


// let readstream = fs.createReadStream('text.txt','utf8')
// let writestream = fs.createWriteStream('text1.txt')
// readstream.pipe(writestream)

let readed = fs.createReadStream('text.txt',{highWaterMark : 20})
readed.on('data',chunk => {
    console.log(chunk.toString())
})