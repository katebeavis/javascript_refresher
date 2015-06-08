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
  function addNumbers(a, b) {
    return a += b;
  }
  return array.reduce(addNumbers, 0);
};

var repeatElements = function(array) {
  return array.concat(array);
};

var stringToNumber = function(string) {
  return parseInt(string);
};

var calculateAverage = function(array) {
  return sumNumbers(array) / array.length;
};

var getElementsUntilGreaterThanFive = function(array) {
  var a = array.indexOf(6);
  return array.splice(0, a);
};

var convertArrayToObject = function(array) {
    var go = {};
    for (i = 0; i < array.length; i += 2) {
      go[array[i]] = array[i + 1];
    }
  return go;
};

var getAllLetters = function(array) {
  function onlyUnique(arr, letter) {
    if (arr.indexOf(letter) === -1) arr.push(letter); {
      return arr;
    }
  }
  return array.join("").split("").sort().reduce(onlyUnique, []);
};

var swapKeysAndValues = function(object) {
    var obj = {};
    for(var key in object) {
      obj[object[key]] = key;
    }
  return obj;
};

var sumKeysAndValues = function(object) {
  return 'Write your method here';
};

var removeCapitals = function(string) {
  function isCapital(letter) {
    return ((letter === letter.toLowerCase() ? true : false));
  }
  return string.split("").filter(isCapital).join("");
};

var roundUp = function(number) {
  return Math.ceil(number);
};

var formatDateNicely = function(date) {
  var myDate = date
  return ("0" + myDate.getDate() + "/" + "0" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear());
};

var getDomainName = function(string) {
  var patternMatch = /^.+@(.+)\..+$/
  return string.match(patternMatch)[1];
};

var titleize = function(string) {
  return string.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  return string;
};

var checkForSpecialCharacters = function(string) {
  function containsSpecial(character) {
    var code = character.charCodeAt(0);
    if (code < 48 || code > 122 ) {
      return false;
    } else {
      return true;
    }
  }
  return !(string.split("").every(containsSpecial));
};

var squareRoot = function(number) {
  return Math.sqrt(number);
};

var factorial = function(number) {
  if (number == 0) {
    return '1'
  } else {
    return number * factorial(number - 1)
  }
  return factorial(number);
};

var findAnagrams = function(string) {
  return 'Write your method here';
};

var convertToCelsius = function(number) {
  return Math.round((number - 32) / 1.8);
};

var letterPosition = function(array) {
  return 'Write your method here';
};
