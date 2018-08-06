var num = 0;
var count:number = 0;

for (num = 0; num<= 20; num++){
    if (num % 2 == 0){
        continue
    }
    count++;
}
console.log("The count of odd values between 0 to 20 : " + count);
