const rec = {
  countdown: function countdown(num) {
    console.log(num)
    if (num >= 1) return countdown(num - 1)
  },

  sum: function sum(n) {
    return n === 1 ? 1 : n + sum(n - 1)
  },

  // As substraction isn't commutative,
  // you have to calculate first the number to substract
  sub: (n) => n - rec.sum(n - 1),

  fac: function fac(n) {
    return n === 1 ? 1 : n * fac(n - 1)
  },

  sumDigit: function sumDigit(n) {
    n = Math.floor(n)
    if (n < 1) return 0
    else return (n % 10) + sumDigit(n / 10)
  },

  makeTreeByTaxonomy: function makeTree(arr, taxonomy) {
    let node = {}
    arr
      .filter((c) => c.taxonomy === taxonomy)
      .forEach((c) => {
        node[c.id] = makeTree(arr, c.id)
      })

    return node
  },
}

module.exports = rec
