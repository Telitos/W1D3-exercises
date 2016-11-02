function countLetters(string) {
  var noSpaceString = string.split(' ').join('').toLowerCase()
  var letters = {}
  letters[noSpaceString[0]] = 1

  for (var i = 1; i < noSpaceString.length; i ++) {
      for (var y = 0; y < Object.keys(letters).length; y ++) {
        console.log(Object.keys(letters).length)
        if (noSpaceString[i] === Object.keys(letters)[y]) {
        letters[noSpaceString[i]] += 1
        } else {
        letters[noSpaceString[i]] = 1
      }
      // console.log(letters)
    }
  }
  return letters
}
console.log(countLetters("Hello I love you"))