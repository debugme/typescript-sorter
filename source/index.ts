import { LetterList } from './LetterList'
import { LinkedList } from './LinkedList'
import { NumberList } from './NumberList'

const numberList = new NumberList([10, 3, -5, 0])
numberList.sort().show()

const letterList = new LetterList('Xaybks')
letterList.sort().show()

const linkedList = new LinkedList()
linkedList.add(5).add(1).add(3).add(0).sort().show()
