class Node {
    constructor(v0, v1, v2) {
        this.v = []
        this.v[0] = v0
        this.v[1] = v1
        this.v[2] = v2

        this.left = null
        this.right = null
    }

    calcNext(num) {
        return num + 1 == 4 ? 1 : num + 1       
    }

    buildNext() {
        this.left = new Node(this.calcNext(this.v[0]), this.calcNext(this.v[1]), this.v[2])
        this.right = new Node(this.v[0], this.calcNext(this.v[1]), this.calcNext(this.v[2]))
    }

    isEqual(arr) {
        for (let x=0; x<3; x++) {
            if (this.v[x] !== arr[x]) return false
        }
        return true
    }
}

class Stack {
    constructor() {
        this.s = []
    }

    add(node) {
        this.s.push(node.v)
    }

    print() {
        let string = this.s[0].toString()
        for (let x=1; x<this.s.length; x++) {
            string += ' -> ' + this.s[x]
        }
        console.log(string)
    }

    isPresent(node) {
        for (const v of this.s) {
            if (node.isEqual(v)) return true
        }
        return false
    }

    pop() {
        this.s.pop()
    }
}

const stack = new Stack()

function navigate(node) {

    if (stack.isPresent(node)) {
        return
    }

    if (node.isEqual([2, 2, 1])) {
        console.log('FOUND!!')
        process.exit()
    }

    stack.add(node)
    stack.print()
    node.buildNext()
    navigate(node.left)
    navigate(node.right)
    stack.pop()
}

const node = new Node(3, 3, 3)
navigate(node)