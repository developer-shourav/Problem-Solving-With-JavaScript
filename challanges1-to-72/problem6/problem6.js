
/* তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো। 
 */

//Value Red
var signal = "red";
//Value Yellow
/* var signal = "yellow"; */
//Value Green
/* var signal = "green"; */


if(signal == "red" ){
    console.log("Danger!💀 Danger!💀 Please stop🛑🛑. It's not the time for crossing the road.");
}

else if(signal == "yellow"){
    console.log("Please stop🤚🤚. Wait for green.");
}

else if(signal == "green"){
    console.log("Go ahead. It's green it's safe for crossing the road.");
}
