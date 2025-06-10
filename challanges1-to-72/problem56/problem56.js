

let data = [
  {
    pHeroCourses: {
      "course-x": "web development",
    },
  },

  {
    pHeroCourses: {
      "course-y": "phitron",
    },
  },

  {
    pHeroCourses: {
      "course-z": "acc",
    },
  },

  {
    pHeroCourses: {
      "course-xyz": "level-2",
    },

    locationField: {
        "en-US": {
                lat: 19.28563,
                lon: 72.8691,
        },
    },
  },
];


/*

How will you get the output `[uses 2D matrix concept]`

1. level-2
2. 72.8621

 */


const firstOutput = data[3].pHeroCourses['course-xyz'];
console.log(firstOutput);

const secondOutput = data[3].locationField['en-US'].lon;
console.log(secondOutput);
