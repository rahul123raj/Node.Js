//! fs-module : asynchronous : using promises async await

// const { stat, read, write } = require('fs')

let fs = require('fs').promises


//todo : writeFile() : this method is used to create a file using async and await

// let createile = async () =>{
//     await fs.writeFile('data.txt','good morning')
//     console.log('file is created')
// }

// createile()

//! appendFile()
// let createile = async () =>{
//     await fs.appendFile('data.txt','\ngood morning, Have a nice day')
//     console.log('data is added')
// }

// createile()

//! readFile()
// let readfile = async () =>{
//     let data = await fs.readFile('data.txt','utf8')
//     console.log(data)
// }
// readfile()

//! deleteFile

// let deletefile = async () =>{
//     fs.unlink('data.txt')
//     console.log('file is deleted')
// }
// deletefile()

//! mkdir()

// let createfolder = async () =>{
//     await fs.mkdir('folder1')
//     console.log('folder is created')
// }
// createfolder()

//! rename()
// let renamefile = async () =>{
//     await fs.rename('folder1','folder2')
//     console.log('foler is renamed')
// }
// renamefile()

//! rmdir()

// let deletefolder = async () =>{
//     await fs.rmdir('folder2')
//     console.log('folder is deleted')
// }
// deletefolder()


//? example program

// let create = async () =>{
//     await fs.mkdir('App')
//     await fs.mkdir('App/Frontend')
//     await fs.mkdir('App/backend')
//     await fs.writeFile('App/Frontend/frontend.txt','hello this is frontend')
//     await fs.writeFile('App/backend/backend.txt','hello this is backend')
//    let data1 =  await fs.readFile('App/Frontend/frontend.txt')
//    let data2 =  await fs.readFile('App/backend/backend.txt')
//    await fs.writeFile('App/app.txt',`this is app file : ${data1} and ${data2}`)
// }
// create()


//? Example program 2

let {readFile,mkdir,writeFile,unlink,appendFile,rename,} = require('fs').promises

// let create = async () =>{
//     await mkdir('hospital')
//     await mkdir('hospital/file1')
//     await mkdir('hospital/file2')

//     await writeFile('hospital/result.txt','this is result')
//     await writeFile('hospital/file1/name.txt','thsi is name')
//     await writeFile('hospital/file2/name2.txt','this is name2')

//    let data1= await readFile('hospital/result.txt')
//    let data2 =  await readFile('hospital/file1/name.txt')
//     await appendFile('hospital/file2/name2.txt',`\n${data1} \n${data2}`)
//     await unlink('hospital/file1/name.txt')
//     await unlink('hospital/result.txt')

// }
// create()

//? Example program 3

// let create = async () =>{
//     await mkdir('main')
//     await mkdir('main/sub1')
//     await mkdir('main/sub2')
//     await mkdir('main/sub3')
//     await writeFile('main/file1.txt')
//     await writeFile('main/sub1/text1.txt','My')
//     await writeFile('main/sub2/text2.txt','name is')
//     await writeFile('main/sub3/text3.txt','Rahul')
//     let my = await readFile('main/sub1/text1.txt')
//     // await appendFile('main/sub2/text2',my)

//    let name =  await readFile('main/sub2/text2.txt')
//     let rahul = await readFile('main/sub3/text3.txt')

//     await appendFile('main/file1.txt',`\n${my} ${name} ${rahul}`)
// }
// create()

//? Assinfment

let mernDeveloper = async () =>{
    await mkdir('MERN-Developer')
    await mkdir('MERN-Developer/project')
    await mkdir('MERN-Developer/project/frontend')
    await mkdir('MERN-Developer/project/backend')
    await mkdir('MERN-Developer/project/frontend/static')
    await mkdir('MERN-Developer/project/frontend/dynamic')
    await mkdir('MERN-Developer/project/frontend/reactjs')
    await writeFile('MERN-Developer/project/frontend/static/html.txt','It is used the make the layout of the webpage')
    await writeFile('MERN-Developer/project/frontend/static/css.txt','It is used to apply the design')
    let html = await readFile('MERN-Developer/project/frontend/static/html.txt')
    let css = await readFile('MERN-Developer/project/frontend/static/css.txt')
    await writeFile('MERN-Developer/project/frontend/static/static.txt',`${html}\n${css}`)
    await writeFile('MERN-Developer/project/frontend/dynamic/dynamic.txt','it is used to make the webpage dynamic with the help of javacript')
    let static = await readFile('MERN-Developer/project/frontend/static/static.txt')
    let dynamic = await readFile('MERN-Developer/project/frontend/dynamic/dynamic.txt')
    await appendFile('MERN-Developer/project/frontend/frontend.txt',`this is frontend part :\n${static}\n${dynamic}`)
    let frontend = await readFile('MERN-Developer/project/frontend/frontend.txt')
    await appendFile('MERN-Developer/project/frontend/reactjs/spa.txt',`react is used to develop single page application :\n${frontend}`)
    let spa = await readFile('MERN-Developer/project/frontend/reactjs/spa.txt')
    await mkdir('MERN-Developer/project/backend/node')
    await mkdir('MERN-Developer/project/backend/express')
    await mkdir('MERN-Developer/project/backend/database')
    await writeFile('MERN-Developer/project/backend/node/node.txt','it is used in backend part')
    await writeFile('MERN-Developer/project/backend/express/expres.txt','it is a framework of nodejs')
    await writeFile('MERN-Developer/project/backend/database//mongodb.txt','it is used to store the data')
    let node = await readFile('MERN-Developer/project/backend/node/node.txt')
    let express = await readFile('MERN-Developer/project/backend/express/expres.txt')
    let mongodb = await readFile('MERN-Developer/project/backend/database//mongodb.txt')
    await appendFile('MERN-Developer/project/App.txt',`${spa}\n${node}\n${express}\n${mongodb}`)
}
mernDeveloper()