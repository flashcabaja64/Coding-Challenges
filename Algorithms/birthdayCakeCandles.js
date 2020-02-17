/*

Function Description

Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

birthdayCakeCandles has the following parameter(s):

ar: an array of integers representing candle heights
Input Format

The first line contains a single integer, n, denoting the number of candles on the cake.
The second line contains 'n' space-separated integers, where each integer 'i' describes the height of candle 'i'.

*/

//Iterative solution
function birthdayCakeCandles(ar) {
  let sortMax = ar.sort((a, b) => b - a);
  let candles = 0;

  for(let i=0; i<ar.length; i++) {
    if(ar[i] === sortMax[0]) {
      candles++
    }
  }
  return candles;
}

//Higher-order function solution
function birthdayCakeCandles1(ar) {
  let max = Math.max(...ar)

  return ar.filter(el => el === max).length
}

birthdayCakeCandles();
birthdayCakeCandles1();