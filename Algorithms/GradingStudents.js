/*

Complete the function gradingStudents in the editor below. 
It should return an integer array consisting of rounded grades.

gradingStudents has the following parameter(s):

grades: an array of integers representing grades before rounding
Input Format

The first line contains a single integer, n, the number of students.
Each line 'i' of the 'n' subsequent lines contains a single integer, grades[i],
denoting student i's grade.
*/

let arr = [4, 73, 67, 38, 33]

function gradingStudents(grades) {
  return grades.map(num => {
    let diff = 5 - (num % 5);
    if (num >= 38 && diff < 3) {
      num += diff
    }
    return num
  })
}

gradingStudents(arr)