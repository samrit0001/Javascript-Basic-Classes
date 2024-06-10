// classes, objects
class Animal{
    constructor(name,legcount,speakes){
        this.name=name;
        this.legcount=legcount;
        this.speaks = speakes;
    }
    //static for this class, can we called without object
    static myType(){   
        console.log("Animal Class");
    }

    speak(){
        console.log("hi there "+ this.speaks);
    }
}
console.log(Animal.myType());
let dog= new Animal("dog",4,"bhow bhow");
let cat= new Animal("cat",4,"meow");

cat.speak();


//Date

const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());

