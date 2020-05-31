const rec = require('./recursivity.js')

let categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' },
]

// console.log(JSON.stringify(rec.makeTree(categories, null), null, 2))

// console.log(rec.countdown(4))
// console.log(rec.sum(4))
console.log(rec.sub(5))
// console.log(rec.fac(4))
// console.log(rec.sumDigit(1234))
