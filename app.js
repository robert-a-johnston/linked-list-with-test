const LinkedList = require('./LinkedList')

const ll = new LinkedList()
// console.log('ll new', ll)
ll.insertAtHead(10)
// console.log('ll +1', ll)
ll.insertAtHead(20)
ll.insertAtHead(30)
ll.insertAtHead(40)

// console.log(ll)
// console.log('index 2', ll.getByIndex(2))
// console.log('index 0', ll.getByIndex(0))

const lltwo = new LinkedList.fromValues(10, 20, 30, 40)
lltwo.insertAtIndex(2, 60)
lltwo.print()
console.log('index 2', lltwo.getByIndex(2).value)