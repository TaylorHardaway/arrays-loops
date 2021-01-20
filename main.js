const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
//console.log (students.length)

//**************accessing items in an array */
//console.log(students[1]);
//console.log(students[students.length - 1]); //Nathan

students[0] = 'Matthew';
//console.log(students);

const valuePrinter = (array, index) => {
  return (array[index]);
}

console.log(valuePrinter[1,2,3,4,5,6], 4);

const checkStudent = (array, students) => {
  return array.includes(students)
  
}
console.log(checkStudent(students, 'Greg'));
