
//Task:Write a function that returns the multiplication table of 13  as output.

//একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 


function multiplicationTable(){
    console.log("Multiplication Table Of 13");
    console.log("**************************");
     for(var i = 1; i <= 10; i++){
        
        var baseNum = 13;
        console.log(baseNum, "*",i, "=", baseNum*i);
    };
 
};

multiplicationTable()

