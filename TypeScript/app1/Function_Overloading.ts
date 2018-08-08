function disp1(s1:string):void; 
function disp1(n1:number,s1:string):void; 

function disp1(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
disp1("abc") 
disp1(1,"xyz");