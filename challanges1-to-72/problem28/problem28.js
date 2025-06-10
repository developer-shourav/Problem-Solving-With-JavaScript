/* You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. 
In this situation, if you try to cross the road, you may be in danger.
If you notice a yellow coloured traffic signal, you should stop. 
If you notice a green coloured traffic signal, you should cross the road. 
So write a JS code, where there is a variable called signal. 
Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up */


// Solving the problem with if else conditions

var signal = "yellow";

if( signal == "red"){
    console.log("💀⚡💀Don't move it's Dangerous!! Please wait for Green.");
}

else if ( signal == "yellow"){
    console.log("⚠️⚠️ Don't Crass the road it's not safe!! Wait for Green.");
}

else{
    console.log("🟢🟢Now it's safe . You can go now.");
}

// Solving the problem with switch

switch(signal){
    case "red":
        console.log("💀⚡💀Don't move it's Dangerous!! Please wait for Green.");
        break;
    case "yellow":
        console.log("⚠️⚠️ Don't Crass the road it's not safe!! Wait for Green.");
        break;
    default :
         console.log("🟢🟢Now it's safe . You can go now.");
        
};


