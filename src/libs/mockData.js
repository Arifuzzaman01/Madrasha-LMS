export const CLASSES = ["10", "9", "8", "7", "5"];

export const studentsData = [
  // Class 10
  
  {
    id: "S1004",
    name: "Sumaiya Akter7",
    class: "7",
    marks: { math: 98, english: 95, science: 97 },
    total: 290,
    grade: "A+",
  },
  {
    id: "S1005",
    name: "Sumaiya Akter5",
    class: "5",
    marks: { math: 98, english: 95, science: 97 },
    total: 290,
    grade: "B",
  },
  {
    id: "S1006",
    name: "Sumaiya Akter5",
    class: "5",
    marks: { math: 98, english: 95, science: 97 },
    total: 290,
    grade: "B",
  },
  {
    id: "S1007",
    name: "Sumaiya Akter7",
    class: "7",
    marks: { math: 98, english: 95, science: 97 },
    total: 290,
    grade: "A",
  },
  {
    id: "S1008",
    name: "Sumaiya Akter7",
    class: "7",
    marks: { math: 98, english: 95, science: 97 },
    total: 290,
    grade: "c",
  },
  {
    id: "S1009",
    name: "Sumaiya Akter8",
    class: "10",
    marks: { math: 98, english: 95, science: 97 },
    total: 390,
    grade: "A+",
  },
  {
    id: "S1010",
    name: "Sumaiya Akter10",
    class: "10",
    marks: { math: 98, english: 95, science: 97 },
    total: 290,
    grade: "F"},
  {
    id: "S1011",
    name: "Sumaiya Akter10",
    class: "10",
    marks: { math: 98, english: 95, science: 97 },
    total: 290,
    grade: "F",
  },
];

export const getStudentsByClass = (className) => {
  return studentsData
    .filter((s) => s.class === className)
    .sort((a, b) => b.total - a.total); // Highest to Lowest (A-Z rank)
};
