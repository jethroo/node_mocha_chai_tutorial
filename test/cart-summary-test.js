var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var Tax = require('./../src/tax');
var CartSummary = require('./../src/cart-summary');

describe('CartSummary', function() {
  describe('getSubtotal()', function() {
    it('should return 0 if no items present', function() {
      var cartSummary = new CartSummary([]);
      expect(cartSummary.getSubtotal()).to.equal(0);
    });

    it('should return the sum of the item prices times quantity', function() {
      var cartSummary = new CartSummary([
        { id: 1, quantity: 4, price: 50 },
        { id: 2, quantity: 2, price: 30 },
        { id: 3, quantity: 1, price: 40 }
      ]);

      expect(cartSummary.getSubtotal()).to.equal(300);
    });
  });

  describe('getTax()', function() {
    var calculate_stub;

    beforeEach(function() {
      calculate_stub = sinon.stub(Tax, 'calculate').callsFake(function(subtotal, state, done) {
        setTimeout(function() {
          done({ amount: 30 });
        });
      }, 0);
    });

    afterEach(function() {
      calculate_stub.restore();
    });

    it('should call the callback with the tax amount', function() {
      var cartSummary = new CartSummary([
        { id: 1, quantity: 4, price: 50 },
        { id: 2, quantity: 2, price: 30 },
        { id: 3, quantity: 1, price: 40 }
      ]);

      cartSummary.getTax('NY', function(taxAmount) {
        expect(taxAmount).to.equal(30);
        expect(Tax.calculate.getCall(0).args[0]).to.equal(300);
        expect(Tax.calculate.getCall(0).args[1]).to.equal('NY');
        done();
      });
    });
  });
});
