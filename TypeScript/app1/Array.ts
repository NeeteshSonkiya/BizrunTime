var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);
console.log();

var nums:number[] = [1,2,3,3] 
console.log(nums[0]); 
console.log(nums[1]); 
console.log(nums[2]); 
console.log(nums[3]);
console.log();

var arr_names:number[] = new Array(4)  
for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}
console.log();


var names:string[] = new Array("Mary","Tom","Jack","Jill") 

for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}
console.log();

function isBigEnough(element, index, array) { 
    return (element >= 10); 
 }         
 var passed = [12, 5, 8, 130, 44].filter(isBigEnough); 
 console.log("Test Value : " + passed );
console.log();

 var arr:number[] = [12,13] 
var[x,y] = arr 
console.log(x) 
console.log(y)
console.log();

var multi:number[][] = [[1,2,3],[23,24,25]]  
console.log(multi[0][0]) 
console.log(multi[0][1]) 
console.log(multi[0][2]) 
console.log(multi[1][0]) 
console.log(multi[1][1]) 
console.log(multi[1][2])
console.log();

var names:string[] = new Array("Mary","Tom","Jack","Jill")  
function disp(arr_names:string[]) {
   for(var i = 0;i<arr_names.length;i++) { 
      console.log(names[i]) 
   }  
}  
disp(names)
console.log();

