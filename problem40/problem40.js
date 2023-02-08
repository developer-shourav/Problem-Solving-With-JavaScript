/*  Can you find out who will get the delicious cake?
    (Part II)
This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

**Input: The input line has three values, x (The marks Jim has got), y (The marks Dela has got) and z (The marks Chinku has got)**

**Output: Print the name of the topper.**

1. Sample Input-1: 84 99 77
- Sample Output-1: Dela

2. Sample Input-2: 69 97 99
- Sample Output-2: Chinku */



function findingTopper(x, y, z){
    if((typeof x === "number") && (typeof y === "number") && (typeof y === "number") ){
        if ( x > y && x > z) {
            const cakeWinner = "Jim";
            return cakeWinner;
        }

        else if( y > x && y > z){
            const cakeWinner = "Dela";
            return cakeWinner;
        }

        else{
            const cakeWinner = "Chinku";
            return cakeWinner;
        }

    }

    else{
        const errorMassage = "Please inter number value (marks)";
        return errorMassage;
    }

};


const jimsMarks = 69;
const delasMarks = 97;
const chinkusMarks = 99;

const theCakeWillGet = findingTopper(jimsMarks, delasMarks, chinkusMarks);
console.log(theCakeWillGet);