
function isPalindrome(word) {
  // Write your algorithm here
  let left = 0;
  let right = word.length -1;
  while (left<right) {
    if (word[left] !== word[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
  
}
const input =("Enter a string: ");
console.log (isPalindrome(input));
/* 
  Add your pseudocode here
1.  2 pointers one at the start and one at the end
2. if the characters at the left and right dont match return false
3. If the loop completes without returning false, return true.
*/

/*
  Add written explanation of your solution here
  The function takes a word as input and checks if it is a palindrome and moves the pointers towards each other
  checking if the characters match. if they dont match  returns false else it returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
