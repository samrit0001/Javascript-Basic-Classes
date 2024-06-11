// so we task to other function along with callback function
// once delegated function is completed it is given back and we pick it up and complete it

//A Promise in JavaScript is like a placeholder for a value that you expect to have in the future
//Promises are syntatical sugar that make this code readable, or we can say pretty

//how we can write async function of our own ?

// ugly way

// this is wrapper on top of another async function , we will mostly do this 
const fs=require("fs");
 //my async function
 function amritReadFile(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        cb(data);
    });
 }

 //callback function to call
function onDone(data){
    console.log(data);
}

amritReadFile(onDone);


// Cleaner way (Promises)
//to use result of Promise we use (.then) for success and (.catch) for failures

function amritpromiseread(){
    return new Promise(function (resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}
 
//callbackfunction
function whenDone(data){
    console.log(data);
}

amritpromiseread().then(whenDone);