/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let number = 0;
  let wordTracker = 0;
  let abbrTracker = 0;

  while (wordTracker < word.length && abbrTracker < abbr.length) {
    if (!isNaN(abbr[abbrTracker])) {
      number = number * 10 + Number(abbr[abbrTracker]);
      if (number === 0) return false;
      abbrTracker++;
    } else if (number > 0) {
      wordTracker += number;
      number = 0;
    } else if (word[wordTracker] == abbr[abbrTracker]) {
      wordTracker++;
      abbrTracker++;
    } else {
      return false;
    }
  }
  return abbrTracker === abbr.length && wordTracker + number === word.length;
};

console.log(validWordAbbreviation("leetcode", "l1e5"));
