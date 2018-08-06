var global_num = 12
class Numbers {
    num_val = 13;
    static sval = 120;

    storeNum():void{
        var local_num = 200;
    }
}

console.log("Global_num : " + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("Global num: " + obj.num_val);

