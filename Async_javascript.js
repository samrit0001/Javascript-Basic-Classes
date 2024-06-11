// async vs sync functions

// synchronous : together, one after other, sequential, only one thing happening at a time

//asynchronous : happens in part, multiple things happening along with context switching 

 //setTimeout  is async operation 


 function sum(a,b){
    return a+b;
 }

 function getsum(){
    ans=sum(5,10);
    console.log(ans);
 }

 setTimeout(getsum,1000);
 console.log("this will print first");

 //some async functions in js : 
 //fs.readfile : to read file from file system
 //fetch : get data from API endpoint 


const fs = require("fs");  // fs is filesystem

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("this will be printed before file data ");


//  http://latentflip.com/loupe/     
// use this site to find the working of async 
// call stack :  where current work is carried out
//WebApis : delegated tasks here, in parallel to do our work carried by browser , not part of javascript
// Callback queue : after completion of task from webapis wait here , and run when thread is free  