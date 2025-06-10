/* Create an array with the names of all the mobile phone models you have used so far. Then show the elements of that array as output one by one with a while loop */


var myPhones = ["Maximus", "Nokia-120", "Nokia-expres music", "Nokia-N70", "Symphany-w21", "Sumsung-Dose", "HUAWI-Y5II", "Samsung-j5", "Realme-C3"];

var i = 0;

while( i < myPhones.length){
    var phone = myPhones[i];
    console.log(phone);
    i++;
}