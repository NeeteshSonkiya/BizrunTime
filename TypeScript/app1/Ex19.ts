var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);

function factorial(number) {
    if (number <= 0) {         // termination case
       return 1; 
    } else {     
       return (number * factorial(number - 1));     // function invokes itself
    } 
 }; 
 console.log(factorial(6)); 

 (function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()