function countLetters(string) {
  var noSpaceString = string.split(' ').join('').toLowerCase()
  var letters = {}
  letters[noSpaceString[0]] = 1

  for (var i = 1; i < noSpaceString.length; i ++) {
      for (var letter in letters) {
        if (noSpaceString[i] === letter) {
        letters[letter] += 1
        } else {
        letters[letter] = 1
      }
    }
  }
  return letters
}
console.log(countLetters("Hello I love you"))