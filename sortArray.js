// Prompt for numbers (comma-separated)
let numberInput = prompt("Enter numbers separated by commas (e.g., 24,65,21,5,9,32,42,80,57):");
let nameInput = prompt("Enter names separated by commas (e.g., Zenvo,Erica,Jordie,Alicia,Redon):");

// Convert string input to arrays
let numbers = numberInput.split(",").map(num => parseInt(num.trim()));
let names = nameInput.split(",").map(name => name.trim());

// Merge both arrays
let mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse (descending)
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Sorted Numbers (Descending):", sortedNumbers);

// Sort names alphabetically
let sortedNames = [...names].sort();
console.log("Sorted Names (Alphabetical):", sortedNames);
