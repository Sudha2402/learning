// console.log("Hello, world!");

// import {v4 as uuidv4} from 'uuid';



// let myuuid = uuidv4();

// const myuuid = require('uuid').v4(); //every time it gives unique number

// output
// PS C:\Sudhadocuments\Shanaya_bazaar> cd "c:\Sudhadocuments\Shanaya_bazaar"
// PS C:\Sudhadocuments\Shanaya_bazaar> node "c:\Sudhadocuments\Shanaya_bazaar\nodeTry.js"
// Hello, world!
// Your UUID is: a108a1b9-46d4-408a-ba85-1b15e49ea408
// PS C:\Sudhadocuments\Shanaya_bazaar> cd "c:\Sudhadocuments\Shanaya_bazaar"
// PS C:\Sudhadocuments\Shanaya_bazaar> node "c:\Sudhadocuments\Shanaya_bazaar\nodeTry.js"
// Hello, world!
// Your UUID is: 8d359f52-2932-4a81-881a-6a3557475cd1
// PS C:\Sudhadocuments\Shanaya_bazaar>

export const myuuid = require('uuid').v1();
console.log('Your UUID is: ' + myuuid);