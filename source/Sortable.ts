export abstract class Sortable {
  constructor() {}
  abstract get size(): number
  abstract compare(indexOne: number, indexTwo: number): boolean
  abstract swap(indexOne: number, indexTwo: number): void
  abstract show(): void
  sort() {
    for (let i = 0; i < this.size; ++i) {
      for (let j = 0; j < this.size - (i + 1); ++j) {
        if (this.compare(j, j + 1)) this.swap(j, j + 1)
      }
    }
    return this
  }
}
