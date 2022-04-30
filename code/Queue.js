class Queue {
    constructor() {
        this.count = 0; // 队列长度
        this.queueLeader = 0; // 队首位置
        this.items = {}; // 队列
    }
    // 向队列中添加元素
    enqueue(e) {
        this.items[this.count++] = e;
    }
    // 向队列中移除元素
    dequeue() {
        if (this.isEmpty()) return null;
        return this.items[this.queueLeader++];
    }
    // 查看队首元素
    peek() {
        return this.items[this.queueLeader];
    }
    // 判断队列是否为空
    isEmpty() {
        return this.count - this.queueLeader === 0;
    }
    // 查看队列个数
    size() {
        return this.count - this.queueLeader;
    }
    // 清空队列
    clear() {
        this.count = 0;
        this.queueLeader = 0;
        this.items = {};
    }
    /** 拓展-输出当前队列 */
    toString() {
        if (this.isEmpty()) return '';

        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

// test
const xxx = new Queue()
xxx.enqueue('111')
xxx.enqueue('222')
xxx.enqueue('333')
console.log('dequeue', xxx.dequeue());
console.log('peek', xxx.peek());
console.log('size', xxx.size());
console.log('toString', xxx.toString());

setTimeout(() => {
    xxx.clear()
    console.log(xxx);
}, 1000)

console.log(xxx);