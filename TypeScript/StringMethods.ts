var str = new String("This is string"); 
console.log("str.charAt(0) is:" + str.charAt(0)); 
console.log("str.charAt(1) is:" + str.charAt(1)); 
console.log("str.charAt(2) is:" + str.charAt(2)); 
console.log("str.charAt(3) is:" + str.charAt(3)); 
console.log("str.charAt(4) is:" + str.charAt(4)); 
console.log("str.charAt(5) is:" + str.charAt(5));


var str1 = new String("This is string"); 
console.log("str.charAt(0) is:" + str1.charCodeAt(0)); 
console.log("str.charAt(1) is:" + str1.charCodeAt(1)); 
console.log("str.charAt(2) is:" + str1.charCodeAt(2)); 
console.log("str.charAt(3) is:" + str1.charCodeAt(3)); 
console.log("str.charAt(4) is:" + str1.charCodeAt(4)); 
console.log("str.charAt(5) is:" + str1.charCodeAt(5));

var str1 = new String( "This is string one" ); 
 
var index = str1.indexOf( "string" ); 
console.log("indexOf found String :" + index );   

var index = str1.indexOf( "one" ); 
console.log("indexOf found String :" + index );

var str1 = new String( "This is string one and again string" ); 
var index = str1.lastIndexOf( "string" );
console.log("lastIndexOf found String :" + index ); 
  
index = str1.lastIndexOf( "one" ); 
console.log("lastIndexOf found String :" + index );