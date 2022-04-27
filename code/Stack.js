class Stack {
    constructor() {
        this.items = []
    }

    // 入栈
    push(item) {
        this.items.push(item)
    }

    // 出栈
    pop() {
        return this.items.pop()
    }

    // 查看栈顶元素
    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.items.length - 1]
    }

    // 栈是否为空
    isEmpty() {
        return this.items.length === 0
    }

    // 清空栈
    clear() {
        this.items = []
    }

    // 栈长
    size() {
        return this.items.length
    }

    // 查看栈
    toArray() {
        return this.items
    }

    // 输出当前栈
    toString() {
        return this.items.toString()
    }
}

// test

let s = new Stack();

s.push(3)
s.push(4)

console.log(s.toString());
console.log(s.pop());
console.log(s.pop());