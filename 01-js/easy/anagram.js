/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const mySet = new Set();
  for (let i = 0; i < str1.length; i++) {
    mySet.add(str1[i].toLowerCase());
  }
  for (let i = 0; i < str2.length; i++) {
    if (!mySet.has(str2[i].toLowerCase())) {
      return false;
    }

    return true;
  }
}

module.exports = isAnagram;
