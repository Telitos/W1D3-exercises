/* modify this function to return a object containing arrays
listing the positions at which it is found*/


function countLetters(string) {
  var noSpaceString = string.split(' ').join('').toLowerCase()
  console.log(noSpaceString)
  var letters = {}

  for (var i = 0; i < noSpaceString.length; i ++) {
      if (letters.hasOwnProperty(noSpaceString[i])) {
      letters[noSpaceString[i]].push(i)
      } else {
      letters[noSpaceString[i]] = [i]
      }
    }
  return letters
}
console.log(countLetters("Lighthouse in the house"))