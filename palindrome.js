 //1. // Prompt user for input
let word1 = prompt("Enter the first word (e.g., RACECAR):");
let word2 = prompt("Enter the second word (e.g., RECORDER):");

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Reverse the strings
let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

// Log original and reversed strings
console.log("Original Word 1:", word1);
console.log("Reversed Word 1:", reversedWord1);
console.log("Original Word 2:", word2);
console.log("Reversed Word 2:", reversedWord2);

// Check and log if the words are palindromes
console.log(`Is "${word1}" a palindrome?`, word1 === reversedWord1);
console.log(`Is "${word2}" a palindrome?`, word2 === reversedWord2);
