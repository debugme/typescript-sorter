import { Sortable } from './Sortable'

export class LetterList extends Sortable {
  sortableList: string[]
  constructor(sortableValue: string) {
    super()
    this.sortableList = sortableValue.split('')
  }
  get size() {
    return this.sortableList.length
  }
  compare(indexOne: number, indexTwo: number) {
    const valueOne = this.sortableList[indexOne].toLowerCase()
    const valueTwo = this.sortableList[indexTwo].toLowerCase()
    return valueOne > valueTwo
  }
  swap(indexOne: number, indexTwo: number) {
    const { sortableList } = this
    const tmp = sortableList[indexTwo]
    sortableList[indexTwo] = sortableList[indexOne]
    sortableList[indexOne] = tmp
  }
  show() {
    console.log(this.sortableList.join(''))
  }
}
