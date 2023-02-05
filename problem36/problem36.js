/* কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।  */




function gpa(num){

    if( num >= 0 && num <= 100){

         if((num >= 0) && ( num < 33)){
            const massage = "Your number is " + num + " so your GPA is 'F' means you failed in the exam ";
            return massage;
        }

        else if((num >= 33) && ( num < 40)){
            const massage = "Your number is " + num + " so your GPA is 'D' ";
            return massage;
        }
    
        else if((num >= 40) && ( num < 50)){
            const massage = "Your number is " + num + " so your GPA is 'C' ";
            return massage;
        }
    
        else if ((num >= 50) && (num < 60)){
            const massage = "Your number is " + num + " so your GPA is 'B' ";
            return massage;
        }
        else if ( (num >= 60) && (num < 70)){
            const massage = "Your number is " + num + " so your GPA is 'A-' ";
            return massage;
        }
    
        else if ((num >= 70) && (num < 80)){
            const massage = "Your number is " + num + " so your GPA is 'A' ";
            return massage;
        }
        else{
            const massage = "Congratulations💐💐 !! Your number is " + num + " so your GPA is 'A+' ";
            return massage;
        }
    }

    else{
        const warningMassage = "⚠️⚠️You input an invalid number. Please input number between 0 to 100.";
        return warningMassage;
    }
};



const result = 79;
const resultInGrade = gpa(result);
console.log(resultInGrade);