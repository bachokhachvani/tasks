const text =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const textArray = text.replace(/[^A-Za-z0-9\s]/g, "").split(" ");

var longest = textArray.sort(function (a, b) {
  return b.length - a.length;
})[0].length;

var longestWordArray = textArray.filter((word) => word.length === longest);
const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;

const mostVowels = () => {
  let vowelArray = [];
  if (longestWordArray.length > 1) {
    for (let i = 0; i < longestWordArray.length; i++) {
      vowelArray.push(countVowels(longestWordArray[i]));
    }
    let largestNum = vowelArray.reduce(function (
      accumulatedValue,
      currentValue
    ) {
      return Math.max(accumulatedValue, currentValue);
    });
    let index = vowelArray.indexOf(largestNum);
    return longestWordArray[index];
  } else {
    return longestWordArray[0];
  }
};

console.log(mostVowels());
