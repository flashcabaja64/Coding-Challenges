/*
Given a 6 x 6 2D Array, arr:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

Function Description

Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

hourglassSum has the following parameter(s):

arr: an array of integers

Top Hourglass: arr[i][j] + arr[i][j+1] + arr[i][j+2]

Middle Hourglass: arr[i+1][j+1]

Bottom Hourglass: arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]

*/

function hourglassSum(arr) {
  let row = 3; // max length to iterate in the 2D array row
  let column = 3; // max iterative length in the 2D array column
  let total = -63; // max total for negative sum

  for(let y = 0; y <= row; y++) {
    for(let x = 0; x <= column; x++) {
      // sum the top hourglass
      let sum;
      sum = arr[y][x] + arr[y][x+1] + arr[y][x+2]

      //sum the middle hourglass
      sum += arr[y+1][x+1]

      //sum the bottom hourglass
      sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]

      if(total < sum) total = sum;
    }
  }
  return total;
}