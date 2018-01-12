var chai = require('chai');
var expect = chai.expect;
var CartSummary = require('./../src/cart-summary');

describe('CartSummary', function() {
  describe('getSubtotal()', function() {
    it('should return 0 if no items present', function() {
      var cartSummary = new CartSummary([]);
      expect(cartSummary.getSubtotal()).to.equal(0);
    });
  });
});
