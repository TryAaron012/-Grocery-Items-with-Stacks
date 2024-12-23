class Stack {
    constructor() {
        this.stack = [];  
    }

    
    peek() {
        if (this.stack.length === 0) {
            console.log("The stack is empty.");
            return null;  
        } else {
            console.log("Top item in the stack:", this.stack[this.stack.length - 1]);
            return this.stack[this.stack.length - 1];  
        }
    }

    
    push(item) {
        this.stack.push(item);  
        console.log(`Added: ${item}`);
        this.printStack();  
    }

    
    pop() {
        if (this.stack.length > 0) {
            let removedItem = this.stack.pop();  
            console.log(`Removed: ${removedItem}`);
            this.printStack();  
        } else {
            console.log("The stack is already empty.");
        }
    }

    
    printStack() {
        console.log("Current Stack:", this.stack);
    }
}


let groceryStack = new Stack();


for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item #${i + 1}:`);
    groceryStack.push(item);  
}


groceryStack.peek();  
groceryStack.pop();   
groceryStack.peek();  
groceryStack.pop();   