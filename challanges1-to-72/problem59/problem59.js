let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,
  additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming er coddogosti"],
    moreDetails: {
      favoriteBasketballTeam: "XYZ",
      isYoungest: true,
      hometown: {
        city: "ABC",
        state: "VW",
      },
      countriesLivedIn: ["Bangladesh", "New York"],
    },
  },
};


/* 
How will you display
- programming er coddogosti
- VW
- Bangladesh 

*/


const firstDisplayItem = instructor['additionalData']['books'][1];
console.log(firstDisplayItem);

const secondDisplayItem = instructor.additionalData.moreDetails.hometown.state;
console.log(secondDisplayItem);

const thirdDisplayItem = instructor['additionalData']['moreDetails']['countriesLivedIn'][0];
console.log(thirdDisplayItem);

