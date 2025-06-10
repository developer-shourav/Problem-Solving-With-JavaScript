/* You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal


[View problem source 📤](https://drive.google.com/file/d/1bfxye7A1p-BBJCQCXaiUetl_qyS2Vc1E/view) */


var sideOfTriangle1 = 9;
var sideOfTriangle2 = 8;
var sideOfTriangle3 = 9;


if( sideOfTriangle1 == sideOfTriangle2 || sideOfTriangle1 == sideOfTriangle3 ||  sideOfTriangle2 == sideOfTriangle3){
    console.log("The triangle is Isosceles");
}

else{
    console.log("The triangle is not Isosceles");
}

