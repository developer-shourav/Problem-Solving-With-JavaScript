/* প্রাকটিস চ্যালেঞ্জ-১

প্রতিদিন তোমার কাজ কি? 

১) রাত ৮ টা বাজে মডিউল আনলক করো  

২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো

৩) ভিডিও দেখতে দেখতে নোটস নাও 

৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 

৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 

এখন তোমার কাজ হচ্ছে একটা for লুপ 5 বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো।  */


/* var myDayTask = ["1. Unlock videos 8pm","2. Watch these videos", "3. Taking Notes", "4. Practice the module", "5. If confused take help"];

for( var i = 0; i < myDayTask.length; i++){

    var myTask=myDayTask[i];
    console.log(myTask);
}
 */

/* প্রাকটিস চ্যালেঞ্জ-২: 

আবার একই জিনিস while লুপ চালিয়ে দেখানো।  */


/* var myDayTask = ["1. Unlock videos 8pm","2. Watch these videos", "3. Taking Notes", "4. Practice the module", "5. If confused take help"];

var i = 0 ;

while( i < myDayTask.length){
    var myTask = myDayTask[i];
    console.log(myTask);

    i++;
} */




// প্রাকটিস চ্যালেঞ্জ-৩: 

// উপরের প্রব্লেমটাই while লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও 

/* 
var myDayTask = ["1. Unlock videos 8pm","2. Watch these videos", "3. Taking Notes", "4. Practice the module", "5. If confused take help"];

var i = myDayTask.length - 1;

while( i >= 0){
    var myTask = myDayTask[i];
    console.log(myTask);
    i--;
} */



//প্রাকটিস চ্যালেঞ্জ-৪: 

//উপরের প্রব্লেমটাই for লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও 

var myDayTask = ["1. Unlock videos 8pm","2. Watch these videos", "3. Taking Notes", "4. Practice the module", "5. If confused take help"];


for( var i = myDayTask.length - 1; i >= 0; i--){
    var myTask = myDayTask[i];

    console.log(myTask);
}