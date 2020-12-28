import { Sortable } from './Sortable'

export class Node {
  constructor(public data: number, public next: Node | null = null) {}
}

export class LinkedList extends Sortable {
  size: number = 0
  constructor(private head: Node | null = null) {
    super()
  }
  add(data: number) {
    const node = new Node(data)
    if (this.head) {
      let tail = this.head
      while (tail.next) tail = tail.next
      tail.next = node
    } else {
      this.head = node
    }
    this.size++
    return this
  }
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds')
    }
    let counter = 0
    let node: Node | null = this.head
    while (node) {
      if (counter === index) {
        return node
      }
      ++counter
      node = node.next
    }
    throw new Error('Index out of bounds')
  }
  compare(indexOne: number, indexTwo: number) {
    if (!this.head) {
      throw new Error('List is empty')
    }
    const nodeOne = this.at(indexOne)
    const nodeTwo = this.at(indexTwo)
    return nodeOne.data > nodeTwo.data
  }
  swap(indexOne: number, indexTwo: number) {
    if (!this.head) {
      throw new Error('List is empty')
    }
    const nodeOne = this.at(indexOne)
    const nodeTwo = this.at(indexTwo)
    const tmp = nodeOne.data
    nodeOne.data = nodeTwo.data
    nodeTwo.data = tmp
  }
  show() {
    if (!this.head) {
      console.log('LinkedList is empty')
    }
    let dataList = []
    let node = this.head
    while (node) {
      dataList.push(node.data)
      node = node.next
    }
    console.log(`[${dataList.join(',')}]`)
    return this
  }
}
