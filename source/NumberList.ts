import { Sortable } from './Sortable'

export class NumberList extends Sortable {
  constructor(private sortableList: number[]) {
    super()
  }
  get size() {
    return this.sortableList.length
  }
  compare(indexOne: number, indexTwo: number) {
    const valueOne = this.sortableList[indexOne]
    const valueTwo = this.sortableList[indexTwo]
    return valueOne > valueTwo
  }
  swap(indexOne: number, indexTwo: number) {
    const { sortableList } = this
    const tmp = sortableList[indexTwo]
    sortableList[indexTwo] = sortableList[indexOne]
    sortableList[indexOne] = tmp
  }
  show() {
    console.log(`[${this.sortableList.join(',')}]`)
  }
}
