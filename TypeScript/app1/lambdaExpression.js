var foo = function (x) { return 10 + x; };
console.log(foo(100));
var foo1 = function (x) {
    x = 10 + x;
    console.log(x);
};
foo1(100);
