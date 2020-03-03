/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 * https://leetcode.com/problems/most-common-word/
 */
var mostCommonWord = function(paragraph, banned) {
    let obj = {}, res = '', max = -1;
    let words = paragraph.split(/[\!\?\'\,\;\.\s]/)
    console.log(words)

    words.forEach(w => {
      let word = w.toLowerCase()
      //negates punctuation with word.length
      if(word.length && !banned.includes(word)) {
        obj[word] = obj[word] == undefined ? 1 : obj[word]+1 
      }
    })

    for(let key in obj) {
      if(obj[key] > max) {
        //console.log(obj[key])
        max = obj[key]
        res = key
      }
    }
    return res;
};
mostCommonWord('Hello, my. friend. i am, hello', 'i')