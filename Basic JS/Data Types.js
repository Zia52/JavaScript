/*  seven primitive data types:
Strings
Number
Boolean
null
undefined
BigInt
Symbol

The Object data type contains the 3 sub-data types:
Object
Array
Date
*/

let a = 500;
let b = 499; //number
let add = a+b;
console.log(add)

 let sub = a-b;
 console.log(sub) 
 
 let multi = a*b;
 console.log(multi)

 let test = a**b; //a^b
 console.log(test)


 let str1 = "Hello World"
 let str2 = "Hello People" //string
 console.log(str1)
 console.log(str2)



 /*JavaScript Symbol:
 It is used to create unique primitive, and immutable values.
 The Symbol() constructor can be used to create a unique symbol, and you may pass the string as a parameter of the Symbol() constructor. */
/*
 const x = symbol("Java");
 console.log(x.description)*/


//JavaScript Object: object data type allows us to store the collection of the data in the key-value format.
let car = {
    BrandName: "BMW",
    Color: "Black",
    Tire: 4,
}
for(let key in car) {
    console.log(key + ": " + car[key]);
}


let animal = {
    Tiger: "Panthera tigris",
    Lion: "Panthera leo",
    Deer: "Cervidae",
}
for (let key in animal) {
    console.log(key + ": " + animal[key]);
}


//JavaScript Array: array is a list of elements of the different data types. You can create an array using two square brackets '[]' and insert multiple comma seprated values inside the array.

const arr = ["Clementine", "Date Plums", "Dates", "Orange", "Banana", "Apple"];
document.write("Winter Fruits is"+ ": " + arr);

//Using for loop
let Fruits = ["Clementine", "Date Plums", "Dates", "Orange", "Banana", "Apple"];
for(let i=0; i<Fruits.length; i++) //Fruits.lenth: it automatically calculate the arry length
    { 
    console.log("Helthy Fruits"+ ": " + Fruits[i]); 
    console.log(i+ ": "+arr[i]); //print arr value with index
}

let number = [500, 100, 200, 300, 800, 900, 1000]
for (let i=0; i<10; i++)//i<10: in arry index less than 10 print, than stop
    {
    console.log(number[i])
}

