// Prompt user for names and ages (comma-separated)
let nameInput = prompt("Enter names separated by commas (e.g., Genevieve,Juan,Luna,Gabriel,Elise):");
let ageInput = prompt("Enter corresponding ages separated by commas (e.g., 24,65,21,5,9):");

// Convert input to arrays
let subArray1 = nameInput.split(",").map(name => name.trim());
let subArray2 = ageInput.split(",").map(age => parseInt(age.trim()));

// Combine into multi-dimensional array
let multiDimensionalArray = [subArray1, subArray2];

// Restructure to [name, age] pairs
let restructuredArray = subArray1.map((name, index) => [name, subArray2[index]]);

// Log each [name, age] pair
console.log("Restructured Array:");
restructuredArray.forEach(pair => console.log(pair));
