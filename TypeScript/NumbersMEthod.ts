var num1 = 1225.30 
var val = num1.toExponential(); 
console.log(val)

var num3 = 177.234 
console.log("num3.toFixed() is "+num3.toFixed()) 
console.log("num3.toFixed(2) is "+num3.toFixed(2)) 
console.log("num3.toFixed(6) is "+num3.toFixed(6))

var num2 = new Number(177.1234); 
console.log( num2.toLocaleString());

var num4 = new Number(7.123456); 
console.log(num4.toPrecision()); 
console.log(num4.toPrecision(1)); 
console.log(num4.toPrecision(2));

var num5 = new Number(10); 
console.log(num5.toString()); 
console.log(num5.toString(2)); 
console.log(num5.toString(8));

var num6 = new Number(10); 
console.log(num6.valueOf());