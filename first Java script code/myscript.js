console.log("My first js from an external file");
var x=5;
var y=9;
console.log(x*y);

function sum(a,b) {
    return a+b;
}
console.log(sum(x,y));

//you can assign functions to var/ store var in func
//output will be the function
var mysum=sum;
console.log(mysum);