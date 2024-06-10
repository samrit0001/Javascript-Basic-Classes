// it is intrpreted language , running line by line 
// js is interpreted by all the browsers 

//static vs dynamic languages 
// c++ is static , more strit code 
// javascript is dynamic , it can move fast 

// single threaded nature of JS means it uses single core of CPU 
// we make it use all cores using parallel 

var a=1;
console.log(a);

let b=5;
console.log(b);

const x=20;   //cannot be changed 
console.log(x);


// datatypes

let myname = "jeff";
let age = 21;
let isMarried = false;

console.log("this person is " + myname +" and age is "+age);

// if else

if(isMarried== true){
    console.log("congrats bro");
}
else{
    console.log("hope you get married soon");
}


//for loop
 for(i=0;i<10;i++){
    console.log(i);
 }

 //arrays
 const preson_array = ["Amrit","jeff","kailey"];
console.log(preson_array[0]);
console.log(preson_array.length);


//objects
const user1 = {
    firstName:"Amrit",
    gender:"male"
}
console.log(user1["gender"]);


// array of objects

const users = [{
    firstName: "Amrit",
    gender: "male",
    metaata:{
        age:25,
        address:"xxx"
    }
},
    {
        firstName: "kailey",
        gender: "female",
        metaata: {
            age: 22,
            address: "yyy"
        }
}]

console.log(users[1]["firstName"]);
console.log(users[0]["metaata"]["age"]);

//functions

function findSum(a,b){
    return a+b;
}
ans = findSum(5,20);
console.log(ans);

 //callbacks
// third variable : i am passing a function itself 
 function getsum(a,b,fnToCall){
    let result = a+b;
    fnToCall(result);
 }

 function foo(data){
    console.log("foo result is "+data);
 }

 function bar(data){
    console.log("bar result is "+ data);
 }
// in callback we will just give name of function
 const sum_answer= getsum(50,10,foo);

 //setTimeout
 function hey(){
    console.log("this is wait function")
 }
 setTimeout(hey, 3*1000);
 
 setInterval(hey, 1*1000);  // this keeps printing after interval of 1 sec