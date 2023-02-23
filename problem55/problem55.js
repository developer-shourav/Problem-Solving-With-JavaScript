


/* How will you access Sophia’s secondary school location? */

let data = {
  Sophia: {
        id: 33,
        study: [
                {
                    primary: [
                    { school_name: "ABC primary school" },
                    { location: "Peters burg" },
                    ],
                },
                {
                    secondary: [
                    { school_name: "ABC secondary school" },

                    { location: "St Lorence" },
                    ],
                },
        ],
  },

};

/* ==================================================
      Method One: Using Dot(.) Notation
===================================================== */
const secondarySchoolLocation1 = data.Sophia.study[1].secondary[1].location;

console.log(secondarySchoolLocation1);
/* ==================================================
      Method Two: Using Bracket[] Notation
===================================================== */

const secondarySchoolLocation2 = data['Sophia']['study'][1]['secondary'][1]['location'];
console.log(secondarySchoolLocation2);
