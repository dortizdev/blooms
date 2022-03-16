const chai = require('chai')
const expect = chai.expect

const BloomFilter = require('../bloomFilter').BloomFilter

describe("BloomFilter", function() {

  let bloom

  context("Generate default bloom filter", function() {

    beforeEach(function() {
      bloom = new BloomFilter()
    })

    it("No element present", function() {
      expect(bloom.check("bloom")).to.be.false
      expect(bloom.check("filters")).to.be.false
      expect(bloom.check("are")).to.be.false
      expect(bloom.check("cool")).to.be.false
    })

    context("When an element is added", function() {

      beforeEach(function() {
        bloom.add("bloom")
      })
  
      it("Element stored", function() {
        expect(bloom.check("bloom")).to.be.true
      })
    
      it("Other elements not added", function() {
        expect(bloom.check("filters")).to.be.false
        expect(bloom.check("are")).to.be.false
        expect(bloom.check("cool")).to.be.false
      }) 
    
      context("Adding the rest of the elements", function() {

        beforeEach(function() {
          bloom.add("filters")
          bloom.add("are")
          bloom.add("cool")
        })
    
        it("All elements stored", function() {
          expect(bloom.check("bloom")).to.be.true
          expect(bloom.check("filters")).to.be.true
          expect(bloom.check("are")).to.be.true
          expect(bloom.check("cool")).to.be.true
        })

        it("Checks if element is not present", function() {
            expect(bloom.check("I")).to.be.false
            expect(bloom.check("can")).to.be.false
            expect(bloom.check("has")).to.be.false
            expect(bloom.check("cheeseburger")).to.be.false
          })

      })

    })
  
  })

})
