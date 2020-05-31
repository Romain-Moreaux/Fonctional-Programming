const rec = {
  countdown: function countdown(num) {
    if (num > 0) return countdown(num - 1)
  },

  sum: function sum(n) {
    return n === 1 ? 1 : n + sum(n - 1)
  },

  // wrong
  sub: function sub(n) {
    console.log('n =', n)

    if (n === 1) {
      return -1
    }

    return n + (n - sub(n - 1) * -1)
  },

  fac: function fac(n) {
    return n === 1 ? 1 : n * fac(n - 1)
  },

  sumDigit: function sumDigit(n) {
    n = Math.floor(n)
    if (n < 1) return 0
    else return (n % 10) + sumDigit(n / 10)
  },

  makeTree: function makeTree(categories, parent) {
    let node = {}
    categories
      .filter((c) => c.parent === parent)
      .forEach((c) => {
        node[c.id] = makeTree(categories, c.id)
      })

    return node
  },
}

module.exports = rec
