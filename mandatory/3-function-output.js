// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  return Math.random() * 10;
}
// Function getRandomNumber generates random number between 0 and 1, and multiplies the result by 10. So output of this function is random number between 0 and 10.

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2);
}

// Function combine2Words concatinates two strings, that were given to this function as the parameters. If word1 is string "Hello" and word2 is "World", the output of function combine2Words will be "HelloWorld".

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  return firstWord.concat(' ', secondWord, ' ', thirdWord);
}

/*
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 3-function-output` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test('concatenate example #1', () => {
  expect(concatenate('code', 'your', 'future')).toEqual('code your future');
});

test('concatenate example #2', () => {
  expect(concatenate('I', 'like', 'pizza')).toEqual('I like pizza');
});

test("concatenate doesn't only accept strings", () => {
  expect(concatenate('I', 'am', 13)).toEqual('I am 13');
});
