var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 200;
    };
    Numbers.sval = 120;
    return Numbers;
}());
console.log("Global_num : " + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
