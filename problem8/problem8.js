/* You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using if-else.



[View problem source 📤](https://drive.google.com/file/d/1bfxye7A1p-BBJCQCXaiUetl_qyS2Vc1E/view) */


var myResult = 85;
var tomsResult = 66;
var janesResult = 95;
var petersResult = 56;
var johnsResult = 40;


/* ---------------------------------------------------------------------------
         Program for finding my and my friends’ grades using if-else.
-------------------------------------------------------------------------- */


/* -----------------------------
          For my result
--------------------------------- */

if( myResult <= 39){
    console.log("Sorry !! Shourav😞😥 you failed in the exam. You got " + myResult + " out of 100. So your Grad is 'F' ") ;
}

else if( 40 <= myResult && myResult < 50 ){
    console.log("Congratulations Shourav🥳💐💐 !!  you passed  the exam. You got " + myResult + " out of 100. So your Grad is 'D' ") ;
}

else if( 50 <= myResult && myResult < 60 ){
    console.log("Congratulations Shourav🥳💐💐 !!  you passed  the exam. You got " + myResult + " out of 100. So your Grad is 'C' ") ;
}

else if( 60 <= myResult && myResult < 80 ){
    console.log("Congratulations Shourav🥳💐💐 !!  you passed  the exam. You got " + myResult + " out of 100. So your Grad is 'B' ") ;
}

else {
    console.log("Congratulations Shourav, It's Awesome🥳💖💕 !!  you are the Best. You got " + myResult + " out of 100. So your Grad is 'A' ") ;
}


/* -----------------------------
          For Tom's Result
--------------------------------- */

if( tomsResult <= 39){
    console.log("Sorry !! Tom😞😥 you failed in the exam. You got " + tomsResult + " out of 100. So your Grad is 'F' ") ;
}

else if( 40 <= tomsResult && tomsResult < 50 ){
    console.log("Congratulations tom🥳💐💐 !!  you passed  the exam. You got " + tomsResult + " out of 100. So your Grad is 'D' ") ;
}

else if( 50 <= tomsResult && tomsResult < 60 ){
    console.log("Congratulations Tom🥳💐💐 !!  you passed  the exam. You got " + tomsResult + " out of 100. So your Grad is 'C' ") ;
}

else if( 60 <= tomsResult && tomsResult < 80 ){
    console.log("Congratulations Tom🥳💐💐 !!  you passed  the exam. You got " + tomsResult + " out of 100. So your Grad is 'B' ") ;
}

else {
    console.log("Congratulations Tom, It's Awesome🥳💖💕 !!  you are the Best. You got " + tomsResult + " out of 100. So your Grad is 'A' ") ;
}


/* -----------------------------
          For Jane's Result
--------------------------------- */

if( janesResult <= 39){
    console.log("Sorry !! Jane😞😥 you failed in the exam. You got " + janesResult + " out of 100. So your Grad is 'F' ") ;
}

else if( 40 <= janesResult && janesResult < 50 ){
    console.log("Congratulations Jane🥳💐💐 !!  you passed  the exam. You got " + janesResult + " out of 100. So your Grad is 'D' ") ;
}

else if( 50 <= janesResult && janesResult < 60 ){
    console.log("Congratulations Jane🥳💐💐 !!  you passed  the exam. You got " + janesResult + " out of 100. So your Grad is 'C' ") ;
}

else if( 60 <= janesResult && janesResult < 80 ){
    console.log("Congratulations Jane🥳💐💐 !!  you passed  the exam. You got " + janesResult + " out of 100. So your Grad is 'B' ") ;
}

else {
    console.log("Congratulations Jane, It's Awesome🥳💖💕 !!  you are the Best. You got " + janesResult + " out of 100. So your Grad is 'A' ") ;
}

/* -----------------------------
      For Peter's Result
--------------------------------- */

if( petersResult <= 39){
    console.log("Sorry !! Peter😞😥 you failed in the exam. You got " + petersResult + " out of 100. So your Grad is 'F' ") ;
}

else if( 40 <= petersResult && petersResult < 50 ){
    console.log("Congratulations Peter🥳💐💐 !!  you passed  the exam. You got " + petersResult + " out of 100. So your Grad is 'D' ") ;
}

else if( 50 <= petersResult && petersResult < 60 ){
    console.log("Congratulations Peter🥳💐💐 !!  you passed  the exam. You got " + petersResult + " out of 100. So your Grad is 'C' ") ;
}

else if( 60 <= petersResult && petersResult < 80 ){
    console.log("Congratulations Peter🥳💐💐 !!  you passed  the exam. You got " + petersResult + " out of 100. So your Grad is 'B' ") ;
}

else {
    console.log("Congratulations Peter, It's Awesome🥳💖💕 !!  you are the Best. You got " + petersResult + " out of 100. So your Grad is 'A' ") ;
}



/* -----------------------------
      For John's Result
--------------------------------- */

if( johnsResult <= 39){
    console.log("Sorry !! Johns😞😥 you failed in the exam. You got " + johnsResult + " out of 100. So your Grad is 'F' ") ;
}

else if( 40 <= johnsResult && johnsResult < 50 ){
    console.log("Congratulations Johns🥳💐💐 !!  you passed  the exam. You got " + johnsResult + " out of 100. So your Grad is 'D' ") ;
}

else if( 50 <= johnsResult && johnsResult < 60 ){
    console.log("Congratulations John🥳💐💐 !!  you passed  the exam. You got " + johnsResult + " out of 100. So your Grad is 'C' ") ;
}

else if( 60 <= johnsResult && johnsResult < 80 ){
    console.log("Congratulations John🥳💐💐 !!  you passed  the exam. You got " + johnsResult + " out of 100. So your Grad is 'B' ") ;
}

else {
    console.log("Congratulations John, It's Awesome🥳💖💕 !!  you are the Best. You got " + johnsResult + " out of 100. So your Grad is 'A' ") ;
}


