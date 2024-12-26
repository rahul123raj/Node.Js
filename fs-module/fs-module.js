//! fs-module synchronous

let fs = require('fs')

//! file sysytem synchronous method

//todo writeFileSync : This method is used to create file and add data to the file
//* syntax : writefileSync('file path',"data")

// fs.writeFileSync('text.txt','welcome')
// console.log('file is created and data is created')

//? NOTE : old data is deleted/ vanished & new data is added(updated

//! synchronously appending data tothe file
//todo : appendFileSync : This method is used to add extra data / append the data tothe new file / same file
//* syntax : appendFileSync("file path","data")

// fs.appendFileSync("text.txt","\nI love JavaScript")
// console.log('data is added')

//! synchronously reading the data from the file.
//todo : readFileSync() : This method is used to read the data from another file & it returns the readed data.
//* syntax : readFileSync("file path")

//? example 1 ;
// let data = fs.readFileSync('text.txt')
// console.log('data is readed')
// console.log(data) //? data is readed in the form of buffer
// console.log(data.toString()) //? converting buffer data to string by using toString()

//? example 2 :

// let data = fs.readFileSync("text.txt","utf-8")
//? utf-8 (unicode transformation formate) : It is used to convert unicode / buffer data to string data
// console.log('data is readed')
// console.log(data)

//? Example program

// let data = fs.readFileSync("text.txt","utf8")
// console.log('data is readed')

// fs.writeFileSync("newfile.txt", data)
// console.log('new file is created and data is added')

// let text = ` 
//     I love nodejs
// `
// fs.appendFileSync("newfile.txt",text)
// console.log('new data is added')

//! synchronously deleting the file
//todo : unlinkSync() : It is used to delete the file
//* syntax : fs.unlinkSync("file path")

// fs.unlinkSync("text.txt")
// console.log('file is deleted')

//! synchronously create the folder
//todo : mkdirSync() : It is used to create the folder
//* syntax : fs.mkdirSync("folder path")

// fs.mkdirSync("newfolder")
// console.log('folder is created')

//! synchronously deleting the folder
//todo : rmdirSync() : It is used to delete the folder
//* syntax : fs.rmdirSync("folder path")

// fs.rmdirSync("newFolder")
// console.log("folder is deleted")

//! synchronously rename file/folder
//todo : renameSync() : It is used to rename the file/folder
//* syntax : fs.renameSync("old file/folder path","new file/folder")

// fs.renameSync("newfolder","Demo")
// console.log('folder is renamed')

// fs.renameSync("Demo","Demon")
// console.log('folder is renamed')

//? Example Program
//! synchronously create nested folder

// fs.mkdirSync('./Demon/text')
// console.log('folder is created')
//! synchronously create file in nested folder
// fs.writeFileSync("./Demon/text/testing.txt","testing nested file")
// console.log('file is created')

// fs.writeFileSync("./Demon/tests.txt","testing nested file")
// console.log('file is created')

// fs.mkdirSync('./Fs-module/test')
// console.log('folder is created')

// fs.mkdirSync("Demon/text2")
// console.log('folder is created')
// let read = fs.readFileSync("Demon/text/testing.txt","utf8")
// console.log('file is readed')
// fs.appendFileSync('Demon/texts.txt',read)

// fs.writeFileSync("Demon/text2/n1.txt",read)
// console.log('file is created')

// fs.mkdirSync('../node/node1')
// console.log('created')

// fs.mkdirSync('course')
// fs.mkdirSync('course/java')
// fs.mkdirSync('course/python')
// fs.mkdirSync('course/js')
// fs.writeFileSync('course/java/t1.txt','text1')
// fs.writeFileSync('course/python/t2.txt','text2')



// fs.appendFileSync('course/js/result.txt', )

// fs.mkdirSync('folder')
// fs.mkdirSync('folder/folder1')
// fs.mkdirSync('folder/folder2')

// fs.writeFileSync('folder/folder1/folder1.txt','hello')
// let read = fs.readFileSync('folder/folder1/folder1.txt','utf8')

// fs.writeFileSync('folder/folder2/folder2.txt',read)
// console.log('file is created')
// fs.renameSync("folder/folder2/folder2.txt",'folder/folder2/folder3.txt')

// fs.unlinkSync('./folder/folder1/folder1.txt')
// fs.rmdirSync('./folder/folder1')




