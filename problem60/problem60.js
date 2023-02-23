const studentData = [
  {
    class: 10,
    details: [
      {
        studentId: "1",
        gradingDetails: [{ grade: "A" }],
      },
      {
        studentId: "2",
        gradingDetails: [{ grade: "B" }],
      },
    ],
  },
  {
    class: 11,
    details: [
      {
        studentId: 3,
        gradingDetails: [{ grade: "B" }],
      },
      {
        studentId: 4,
        gradingDetails: [{ grade: "D" }],
      },
    ],
  },
];

/* ===========Display B , D =========== */


const displayB10 = studentData[0].details[1].gradingDetails[0].grade;
console.log(displayB10);

const displayB11 = studentData[1].details[0].gradingDetails[0].grade;
console.log(displayB11);

const displayD = studentData[1].details[1].gradingDetails[0].grade;

console.log(displayD);

