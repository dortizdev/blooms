// Bit size and hash count set for ease of use. Can use these formulas for better precision.

// bitsize formula: m = -(n * math.log(p))/(math.log(2)**2)
// n = number of items
// p = false positive probability in decimal

// Hash count formula: k = (m/n) * math.log(2)
// m = size of bit array

const { stringToHash } = require('./hashed')
class BloomFilter {

  constructor(arrayBitSize = 1024, hashNumber = 8) {

    this.bits = new Array(arrayBitSize).fill(false)
    this.hashes = new Array(hashNumber)
      .fill(Number.MAX_SAFE_INTEGER)
      .map(max => Math.floor(Math.random() * max))
      .map(seed => string => stringToHash(string, seed))
  }

  get bitSize() {
    return this.bits.length
  }

  get hashCount() {
    return this.hashes.length
  }

  add(string) {
    this.determineHashes(string)
      .forEach(n => this.bits[n] = true)
  }

  check(string) {
    return this.determineHashes(string)
      .every(n => this.bits[n])
  }

  determineHashes(string) {
    return this.hashes
      .map(fn => fn(string))
      .map(n => n % this.bitSize)
  }

}

exports.BloomFilter = BloomFilter