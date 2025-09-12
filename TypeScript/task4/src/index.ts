/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

const cTeacher: Subjects.Teacher = { firstName: "Ada", lastName: "Lovelace", experienceTeachingC: 1 };
const rTeacher: Subjects.Teacher = { firstName: "Dan", lastName: "Abramov", experienceTeachingReact: 2 };
const jTeacher: Subjects.Teacher = { firstName: "James", lastName: "Gosling" };

const cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const react = new Subjects.React();
react.setTeacher(rTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

const java = new Subjects.Java();
java.setTeacher(jTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
