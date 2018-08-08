var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Items before push "+mytuple.length)    // returns the tuple size 
console.log();

mytuple.push(12)                                    // append value to the tuple 
console.log("Items after push "+mytuple.length) 
console.log("Items before pop "+mytuple.length) 
console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item
  console.log();
  
//update a tuple element 
mytuple[0] = 121     
console.log("Tuple value at index 0 changed to   "+mytuple[0])
console.log("Items after pop "+mytuple.length)
console.log();

//destructing 
var a =[10,"hello"] 
var [b,c] = a 
console.log( b )    
console.log( c )