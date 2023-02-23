let data = {
  data: [
    {
      bookId: 1,
      bookDetails: { name: "habluder adda", category: "XYZ", price: "20$" },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};


/* ======== Display `habluder adda` and `Beginner` ============ */

const firstDisplay = data.data[0].bookDetails.name;
console.log(firstDisplay);

const secondDisplay = data.data[1].bookCategory;
console.log(secondDisplay);
