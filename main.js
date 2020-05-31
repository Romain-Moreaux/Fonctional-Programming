const rec = require('./recursivity.js')

let categories = [
  { id: 'animals', taxonomy: null },
  { id: 'mammals', taxonomy: 'animals' },
  { id: 'cats', taxonomy: 'mammals' },
  { id: 'dogs', taxonomy: 'mammals' },
  { id: 'chihuahua', taxonomy: 'dogs' },
  { id: 'labrador', taxonomy: 'dogs' },
  { id: 'labrador', taxonomy: 'dogs' },
  { id: 'persian', taxonomy: 'cats' },
  { id: 'siamese', taxonomy: 'cats' },
]

console.dir(rec.makeTreeByTaxonomy(categories, null), { depth: null })
// console.log(rec.sum(4))
// console.log(rec.sub(4))
// console.log(rec.fac(4))
// console.log(rec.sumDigit(1234))
