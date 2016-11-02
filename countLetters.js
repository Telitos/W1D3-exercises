/* countLetters returns all unique character that exist in
a string and counts the number of times that letters appears
in the string.

str --> object

test case:

countLetters ("hello") returns : {h = 1, e = 2, l = 2, o = 1}

1) create an empty object (e.g. output)
2) Go trhu each char in the string and for the first assign the
string as a key value, for each subsequent charaters, check
wether it is already a key, if so add 1 to existing ket, else
create new key.
*/

function countLetters(string) {
  var noSpaceString = string.split(' ').join('').toLowerCase()
  console.log(noSpaceString)
  var letters = {}

  for (var i = 0; i < noSpaceString.length; i ++) {
      if (letters.hasOwnProperty(noSpaceString[i])) {
      letters[noSpaceString[i]] += 1
      } else {
      letters[noSpaceString[i]] = 1
      }
    }
  return letters
}
console.log(countLetters("Lighthouse in the house"))