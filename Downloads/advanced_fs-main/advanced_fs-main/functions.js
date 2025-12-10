//anonymous function expression
let fun=function(name,pw){//functional parameters
    console.log(`This is a ${name} with password ${pw}`);
    return [10,20,30];
    return "hello";
    return null;
}
fun();
fun("Admin","1234");//actual parameters
//function with return type 
console.log(fun("User","abcd"));
console.table(fun())
//GEC-Global Execution Context
//1.Creation Phase
//  a. Global Object Creation
//  b. 'this' keyword initialization
//  c. Memory allocation for variables and functions
//2.Execution Phase
//  a. Line by line code execution
//console.log(window);//global object
console.log(this);//global object   
//console.log(name);//ReferenceError: name is not defined
var name="GEC";//declaration and initialization
console.log(name);//GEC
function demo(){//function declaration
    console.log("This is demo function");
}
demo();//function invocation

//normal function declaration
function add(emp_name,emp_role,emp_salary,emp_address){//functional parameters
    console.log(emp_name,emp_role,emp_salary,emp_address);
}   
add("Dheepisha","software engineer",150000,"123 Main St");
add("John","manager",200000,"456 Oak St");
add("Alice","developer",120000,"789 Pine St");
add("Bob","designer",110000,"321 Maple St");
add("Eve","analyst",130000,"654 Cedar St");
//actual parameters


//immediate invoked function expression(IIFE)
(function(){
    console.log("This is IIFE function");
})();
(function(name){
    console.log(`This is IIFE function with name ${name}`);
})("Dheepisha");
(function(name,pw){
    console.log(`This is IIFE function with name ${name} and password ${pw}`);
})("Admin","1234");

//arrow function
let arrowFun=(name,pw)=>{
    console.log(`This is arrow function with name ${name} and password ${pw}`);
}

arrowFun("User","abcd");
//arrow function with return type
let arrowFunReturn=(name,pw)=>{
    console.log(`This is arrow function with name ${name} and password ${pw}`);
    return [100,200,300];
}
console.log(arrowFunReturn("Guest","xyz"));
//Role of 'this' in arrow function
// 'this' keyword in arrow function refers to the lexical scope
// it does not create its own 'this' context
// it inherits 'this' from the parent scope
// hence it is not suitable for methods that require 'this' to refer to the object
// Example of 'this' in arrow function
//methods to print anything
// 1. console.log
// 2. console.table
// 3. console.warn
// 4. console.error
// 5. console.info
// 6. console.debug
let arrow=()=>{
    console.log(this);
    window.console.log("This is console log");
}
arrow()

// //nested function
// function outerFunction() {
//     let a=1;
//     function innerFunction() {
//         console.log(a++);
//         console.log(a);
//     }           
//     innerFunction(); // calling inner function
// }
// outerFunction(); // calling outer function
//closure scope
// closure is a function that has access to its own scope, the outer function's scope, and the global scope 
//if let a=10 //script scope or global scope
function outerFunction() {
    let a=10;
    return function(){ //local scope or block scope
        console.log(a++);
        
    }           
}
result=outerFunction();
result(); 
result();
result(); 

// calling outer function again to see the change in value of 'a'
//nested function with parameters
// function outerFunctionWithParams(name) {
//     console.log(`This is outer function with name ${name}`);
//     function innerFunctionWithParams(pw) {
//         console.log(`This is inner function with password ${pw}`);
//     }
//     innerFunctionWithParams("1234"); // calling inner function with parameter
// }
// outerFunctionWithParams("Dheepisha"); // calling outer function with parameter

//higher order function
//function passed as arguments to another function
function LandingPage(register,login){
    console.log("Landing");
}
function Register()
{
    console.log("register");
}
function Login()
{
     console.log("login");
}
LandingPage(Register(),Login());


//Generator function
//function* keyword is used to define a generator function
//generator function returns a generator object
//generator function can be paused and resumed using yield keyword
//generator function is used to generate a sequence of values on demand
function*  generatorFunc()
{
    console.log("Generator")
}
generatorFunc().next();


//generator with yield
function*  generatorFuncWithYield()
{
    yield a=1;
    yield b=2;
    yield c=3;
    console.log("Generator with yield");
}
let gen=generatorFuncWithYield();
console.log(gen.next().value);//.value to get the yielded value
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);//undefined
gen.next();