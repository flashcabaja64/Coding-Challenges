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

function stairCase1(int) {
  for(let i=0; i < int; i++) {
    let spaces = new Array(int - i).join("");
    let hashes = new Array(2 + i).join("#")
    console.log(spaces + hashes)
  }
}

//console.log(stairCase(6))
stairCase1(6)