var userInput = process.argv.slice(2);

function characterLetters(userInput) {
  var noSpacesString = userInput.slice(" ").join("").toLowerCase();
  var newString = "";
  var resultingCount = {};
  for (i = 0; i < noSpacesString.length; i++) {
    if (resultingCount[noSpacesString[i]] === undefined) {
      resultingCount[noSpacesString[i]] = 1;
    } else {
      resultingCount[noSpacesString[i]] += 1;
    }
  }
  return resultingCount;
}
console.log(characterLetters(userInput));