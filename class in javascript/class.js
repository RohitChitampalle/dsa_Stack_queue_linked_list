// class Father{
//     constructor(lastname){
       
//         this.Fname="Rahul"
//         this.lastname=lastname
//     }

//     chaFullName(){
//         return this.name +" "+this.lastname
//     }
// }
// // let Rahul=new Father("Rahul","Chitampalle")
// // console.log(Rohit.chaFullName())

// class Child extends Father{
//     constructor(Fname,Pname,PlastName){
//         super(Fname)
//         this.Pname=Pname
//         this.PlastName=PlastName
          

//     }
//     getFullNameOfChild(){
//         return this.Pname + ' ' + this.Fname + ' ' + this.PlastName
//     }


// }

// let chikku=new Child("Ram","sangmesh","chitampalle")

// console.log(chikku.getFullNameOfChild())

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    // ...
}

class Rabbit extends Animal {

    constructor(name, earLength) {
        this.speed = 0;
        this.name = name;
        this.earLength = earLength;
    }

    // ...
}

// Doesn't work!
let rabbit = new Rabbit("White Rabbit", 10);
