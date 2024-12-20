const prompt = require('prompt-sync')();

let groceryStack = [];

function peek() {
  if (groceryStack.length === 0) {
    return "Stack is empty";
  } else {
    return groceryStack[groceryStack.length - 1]; // Return top element
  }
}

function push(item) {
  groceryStack.push(item);
  console.log("Stack after push:", groceryStack);
  peek(); // Invoke peek after push (as per requirement)
}

function pop() {
  if (peek() === "Stack is empty") {
    console.log("Stack is empty. Cannot pop.");
    return;
  }
  groceryStack.pop();
  console.log("Stack after pop:", groceryStack);
  peek();// Invoke peek after pop (as per requirement)

}

// Get 5 grocery items from the user
for (let i = 0; i < 5; i++) {
  let item = prompt("Enter grocery item:");
  push(item);
}

// Example of additional pushes and pops (optional)
push("Milk");
pop();
push("Bread");
pop();
pop();
pop();
pop();