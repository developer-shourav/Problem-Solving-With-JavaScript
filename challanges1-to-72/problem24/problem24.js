/* Write a function called foo() which prints "foo" 
and a function called bar() which prints "bar". 
Call function bar() in the foo() function after printing. 
What will be the output? Now call the foo() to see the output. */




function bar(){

    return "bar";
};

function foo(){
    
    console.log( "foo");
    return bar();
};

console.log(foo());

