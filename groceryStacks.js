// Stack array to hold grocery items
let groceryStack = [];

// Peek function: shows top item or notifies if empty
function peek() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty.");
        return null;
    } else {
        let topItem = groceryStack[groceryStack.length - 1];
        console.log("Top of Stack (peek):", topItem);
        return topItem;
    }
}

// Push function: adds item to the top (end of array)
function push(item) {
    groceryStack.push(item);
    console.log(`Item pushed: ${item}`);
    peek(); // Show current top
}

// Pop function: removes item from the top
function pop() {
    if (groceryStack.length === 0) {
        console.log("Cannot pop. Stack is empty.");
        return null;
    }
    let removedItem = groceryStack.pop();
    console.log(`Item popped: ${removedItem}`);
    peek(); // Show current top
    return removedItem;
}

// Prompt user for 5 grocery items and push them to the stack
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item ${i + 1}:`);
    push(item);
}

// Example pop call (can be removed or modified as needed)
pop(); // Remove last item
pop(); // Remove next item
