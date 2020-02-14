/*
Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Sample Input
6 

Sample Output
     #
    ##
   ###
  ####
 #####
######
*/

function stairCase(int) {
  let output = "";
  for(let i=1; i <= int; i++) {
    output += " ".repeat(int - i) + "#".repeat(i)
  }
  return output;
}

console.log(stairCase(6))