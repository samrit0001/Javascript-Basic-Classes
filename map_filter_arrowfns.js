//map, filter , arrow fns


// normal function
function sum(a,b){
    return a+b;
}

//arrow function
const sum1 = (a,b)=>{
    return a+b;
}


//map
// so we have array [1,2,3,4,5] 
// i want to multiply by 2 and get  [2,4,6,8,10]
// now we can go over array and multipy each item by 2 but
// if we have transform function we can call that function usig maps on our input
// similar to    function f(arr,transform);
const input = [1, 2, 3, 4, 5];
function transform(i){
    return i*2;
}

const ans = input.map(transform);
console.log(ans);

// filter

// we hav array give me even values from array
// easy way transverse using loop and use if statement
// we can create filterlogic and use it as function inside filter on the array
function filterlogic(n){
    if (n % 2 == 0){
        return true;
    } else{
        return false;
    }
}

const even = input.filter(filterlogic);

const even1=input.filter(function(n){
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
})
console.log(even);
console.log(even1);   
