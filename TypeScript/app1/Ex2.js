var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Welcome to jungle");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
