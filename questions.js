var selectElementsStartingWithA = function(array) {
  function startWithA(word) {
    return word.charAt(0) === 'a';
 }
  return array.filter(startWithA);
};

var selectElementsStartingWithVowel = function(array) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  function startWithVowel(word) {
    var firstLetter = word.charAt(0);
    return vowels.indexOf(firstLetter) !== -1;
  }
  return array.filter(startWithVowel);
};

var removeNullElements = function(array) {
  function removeNull(word) {
    return word !== null;
  }
  return array.filter(removeNull);
};

var removeNullAndFalseElements = function(array) {
  function removeNullAndFalse(word) {
    return word !== null && word !== false;
  }
  return array.filter(removeNullAndFalse);
};

var reverseWordsInArray = function(array) {
  function reverseWords(word) {
    return word.split("").reverse().join("");
  }
  return array.map(reverseWords);
};

var everyPossiblePair = function(array) {
  return 'Write your method here';
};

var allElementsExceptFirstThree = function(array) {
  return array.slice(3, 8);
};

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
};

var sortByLastLetter = function(array) {
  function sortLastLetter(word1, word2) {
    return word1.slice(-1) > word2.slice(-1);
  }
  return array.sort(sortLastLetter);
};

var getFirstHalf = function(string) {
  return string.slice(0, 3);
};

var makeNegative = function(number) {
  return Math.abs(number) * -1;
};

var numberOfPalindromes = function(array) {
  function numberMatches(word) {
    if (word[0] === word.slice(-1)) {
     return word;
   }
  }
  return array.filter(numberMatches).length;
};

var shortestWord = function(array) {
  function returnMin(a, b) {
    return a.length < b.length ? a : b;
  }
  return array.reduce(returnMin);
};

var longestWord = function(array) {
  function returnMax(a, b) {
    return a.length > b.length ? a : b;
  }
  return array.reduce(returnMax);
};

var sumNumbers = function(array) {
  return 'Write your method here';
};

var repeatElements = function(array) {
  return 'Write your method here';
};

var stringToNumber = function(string) {
  return 'Write your method here';
};

var calculateAverage = function(array) {
  return 'Write your method here';
};

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
};

var convertArrayToObject = function(array) {
  return 'Write your method here';
};

var getAllLetters = function(array) {
  return 'Write your method here';
};

var swapKeysAndValues = function(object) {
  return 'Write your method here';
};

var sumKeysAndValues = function(object) {
  return 'Write your method here';
};

var removeCapitals = function(string) {
  return 'Write your method here';
};

var roundUp = function(number) {
  return 'Write your method here';
};

var formatDateNicely = function(date) {
  return 'Write your method here';
};

var getDomainName = function(string) {
  return 'Write your method here';
};

var titleize = function(string) {
  return 'Write your method here';
};

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
};

var squareRoot = function(number) {
  return 'Write your method here';
};

var factorial = function(number) {
  return 'Write your method here';
};

var findAnagrams = function(string) {
  return 'Write your method here';
};

var convertToCelsius = function(number) {
  return 'Write your method here';
};

var letterPosition = function(array) {
  return 'Write your method here';
};
