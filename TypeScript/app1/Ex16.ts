function test(){
    console.log("Funtion called");
}
test();

function greet():string{
    return"Welcome to My world";
}
function caller(){
    var msg = greet();
    console.log(msg);
}
caller();

function test_param(n1, n2){
    console.log(n1);
    console.log(n2);
}
test_param(1234, "This is string param");