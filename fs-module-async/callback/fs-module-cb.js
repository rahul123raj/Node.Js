//! Async file system

//! write / create the file using asynchronous callback
//todo writeFile() ; this method is used to create new file & then add data to the file.
//? syntax : writeFile("file path","add data",cb)

let fs = require('fs')

// fs.writeFile('text.txt','javascript',(err)=>{
//     if(err) throw err
//     console.log("file is created and data is added")
// })

//! adding extra data to the same file / new file
//todo ; appendFile() : this method is used to add data to the existing file
//? syntax : appendFile('file path',"data",cb)

// fs.appendFile('text.txt','\n I love javascript',(err)=>{
//     if(err) throw err
//     console.log('data is added')
// })

//! read file using Asynchronous callback
//todo : readFile() : this method is used to read data from the file.
//? syntax : readFile("file path","utf-8",cb)

// fs.readFile('text.txt','utf8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

//?Example program 

// fs.readFile('text.txt','utf8',(err,data)=>{
//     if(err) throw err
//     fs.writeFile('text2.txt',data,(err)=>{
//         if(err) throw err
//         console.log('data is added to new file')

//         fs.appendFile('text2.txt','\n i love nodejs',err => {if(err) throw err
//             console.log(' extra data is added')
//         })
//     })
// })

//! deleting file using asynchronous callback
//todo : unlink() : this method is used to delete the file
//? syntax : unlink("file path",cb)

// fs.unlink("text.txt",err => {if(err) throw err 
//     console.log('file is deleted')
// })


//! creating folder by using asynchronous callback
//todo : mkdir() : this method is used to create the folder
//? syntax : mkdir('folder name',cb)

// fs.mkdir("newfolder",err => {if(err) throw err
//     console.log('folder is created')
// })

//? Example - creating nested folder

// fs.mkdir("newfolder/nestedfolder",err => {if(err) throw err
//     console.log('nested folder is created')
// })

//! delete folder using asynchronous callback
//todo : rmdir() ; this method is used to delete folder
//? syntax : rmdir("folder path",cb)

// fs.rmdir("newfolder/nestedfolder",err => {if(err) throw err
//     console.log('nested folder is deleted')
// })

//! renaming folder using asynchronous callback
//todo : rename() : this method is used to rename the folders or files
//? syntax ; rename("folder name","new folder name",cb)

// fs.rename("newfolder","javascript",err =>{if(err) throw err
//     console.log("folder is rename")
// })

//! renaming file using asynchronous callback

// fs.rename("text2.txt","text.txt",err =>{if(err) throw err
//     console.log("file  is rename")
// })

// fs.mkdir('./javascript/frontend',(err)=>{if(err) throw err
// fs.mkdir('./javascript/backend',(err)=>{if(err) throw err
//     fs.writeFile('./javascript/frontend/frontend.txt','frontend',(err)=>{
//         if(err) throw err
//         fs.writeFile('./javascript/backend/backend.txt','backend',(err)=>{
//             if(err) throw err
//             fs.readFile('./javascript/frontend/frontend.txt','utf8',(err,data)=>{
//                 if(err) throw err
//                 const frontend = data
//                 fs.readFile('./javascript/backend/backend.txt','utf8',(err,data)=>{
//                     if(err) throw err
//                     const backend = data
//                     fs.mkdir('./javascript/app',(err)=>{if(err) throw err
//                         fs.writeFile('./javascript/app/app.txt',`this is the result : ${frontend} and ${backend}`,(err) =>{if(err) throw err})
//                     })
//                 })
//             })
//         })
//     })
// })

// })

// fs.unlink('./javascript/frontend/frontend.txt',(err)=>{if(err) throw err
//     fs.unlink('./javascript/backend/backend.txt',(err)=>{if(err) throw err
//         fs.rmdir('./javascript/frontend',(err)=>{if(err) throw err
//             fs.rmdir('./javascript/backend',(err)=>{if(err) throw err
//                 fs.rename('./javascript/app','./javascript/data',(err)=>{if(err) throw err

//                 })
//             })
//         })
//     })
// })

// fs.readFile('./javascript/data/app.txt','utf8',(err,data)=>{
//     if(err) throw err
//     fs.unlink('./javascript/data/app.txt',(err)=>{if(err) throw err
//         fs.rmdir('./javascript/data',(err)=>{if(err) throw err
//             fs.writeFile('./javascript/app.txt',data,(err)=>{if(err) throw err})
//         })
//     })
// })

fs.mkdir('main',(err)=>{if(err) throw err
    fs.writeFile('main/text1.txt','this is first text',(err)=>{if(err) throw err
        fs.mkdir('main/folder1',(err)=>{if(err) throw err
            fs.writeFile('main/folder1/text2.txt',"this is second txt",(err)=>{if(err) throw err
                fs.mkdir('main/folder1/folder2',(err)=>{if (err) throw err
                    fs.readFile('main/text1.txt',(err,data1)=>{
                        if(err) throw err
                        fs.readFile('main/folder1/text2.txt',(err,data2)=>{
                            if(err) throw err
                            fs.writeFile('main/folder1/folder2/text3.txt',`this is third text : ${data1} and ${data2}`,(err)=>{if(err) throw err})
                        })
                    })
                })
            })
        })
    })
})