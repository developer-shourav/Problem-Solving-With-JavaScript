/*

## Practice Problem 45

**Write an arrow function where it will do the following:**

1. It will take an array where the array elements will be the
name of your friends

2. Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.



*/


const findEven = nameList => {
    
    const evenLengthName = [];
    for(let i = 0; i < nameList.length; i++){

        const friendName = nameList[i];
        if(friendName.length % 2 == 0){
            evenLengthName.push(friendName);
        }
    }
   
    return evenLengthName;
}


const friendsName = ["Shourav", "Nirob", "Alal", "Jala", "Ashim", "Shipta", "Pritom", "Arko", "Alu"];

const evenLengthFriendsNameList = findEven(friendsName);
console.log(evenLengthFriendsNameList);