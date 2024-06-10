// length of string 
const str ="Amrit";
console.log(str.length);


//find index of 
 const  str1 = "hello jeff whatsup";
 console.log(str1.indexOf("jeff"));

 // lastindex of 
 const str2= "hello world world world";
 console.log(str2.lastIndexOf("world"));

 //slice 
str3 = "hello world world world";
console.log(str3.slice(0,7)) // start index, last index

//substr  : now deprecated
str4 = "hello world world world";
console.log(str4.substr(2, 7)) // start, start+size

//split  - it splits into array
console.log(str4.split(" ")); 

//trim  - trim spaces from front and back only 
str5 ="    Amrit    singh    ";
console.log(str5.trim());

//toUpperCase
console.log(str4.toUpperCase());


//ParseInt
console.log(parseInt("40"));
console.log(parseInt("40px"));
console.log(parseInt("abc40"));  //wont do this 

//push ,pop , shift, unshift in array
const nums=[1,2,3];
nums.push(5);
console.log(nums);
nums.pop();  // removes from end
console.log(nums);
nums.shift(); //removes from front
console.log(nums); 
nums.unshift(500); //add to front of arrray
console.log(nums); 

//concat array
const nums1 = [1, 2, 3];
const nums2 = [4,5,6];
console.log(nums1.concat(nums2));

//foreach   - this takes function
function logthing(str){
    console.log(str);
}
nums1.forEach(logthing);





