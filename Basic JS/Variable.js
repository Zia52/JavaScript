/*variables are used to store data.
JavaScript, you can declare the variables in 4 ways −
Using the 'var' keyword.
Using the 'let' keyword.
Using the 'const' keyword.
*/


var x = 10; //Re-declare & Re-update possible
let y = 20; //Re-declare not possivle but Re-update possible
const z = 970; //Re-declare and Re-update not possible
console.log("const: " +z)
console.log("let: " +y)
console.log("var: " +x)

/*the variable can hold the value of the dynamic data type. For example, you can store the value of number(5), string("java"), boolean(true/false), object, etc. data type values in JavaScript variables.
var num = 50; //Number
var str = "JavaScript" //String
var bool = True; //Bollean
*/


/*Undefined Variable Value in JavaScript:
When you don't initialize the variable after declaring, it contains the undefined value*/
var num;
      document.write("The value of num is: " + num + "<br/>"); //The value of num is undefined

/* Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.
Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function. */




 