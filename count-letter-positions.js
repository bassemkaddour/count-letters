var userInput = process.argv.slice(2);

function characterLetterPosition(userInput) {
  var lowerCaseString = userInput.join(' ').toLowerCase();
  console.log(lowerCaseString);
  var resultingCount = {};
  for (i = 0; i < lowerCaseString.length; i++) {
    if (resultingCount[lowerCaseString[i]] === undefined) {
      resultingCount[lowerCaseString[i]] = [i];
    } else {
      resultingCount[lowerCaseString[i]].push(i);
    }
  }
  delete resultingCount[' '];
  return resultingCount;
}
console.log(characterLetterPosition(userInput));


/*

countLetterPosition("lighthouse in the house")

{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]

}

*/