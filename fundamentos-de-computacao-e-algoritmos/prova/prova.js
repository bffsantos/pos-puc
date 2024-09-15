var x = 0
var n = 0

while(n<3){
    n=n+1;
    x=n+x;
}

console.log(x)

function doSomething(value){
    if(value == 0)
        return 0;
    else
        return value+doSomething(value-1);
}

console.log(doSomething(3));