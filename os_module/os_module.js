// ! OS : oerating System

let os = require("os")
// console.log(os)

// ! returns the CPU Architecture
let arch = os.arch()
console.log(`CPU Architechture : ${arch}`)

let total_mem = os.totalmem()
console.log(`total memory : ${total_mem}`)

let free_mem = os.freemem()
console.log(`free memory : ${free_mem}`)

let host = os.hostname()
console.log(`Hostname : ${host}`)

let temp = os.tmpdir()
console.log(`Temp file path : ${temp}`)

let typ = os.type()
console.log(`type of OS : ${typ}`)

let home = os.homedir()
console.log(`home path : ${home}`)

let sys_os = os.platform() 
console.log(`Platform : ${sys_os}`)

let ver = os.release()
console.log(`Release : ${ver}`)

let user_info = os.userInfo()
// console.log(`user information : ${user_info}`)
console.log(user_info)

let ntwrk = os.networkInterfaces()
console.log(ntwrk)