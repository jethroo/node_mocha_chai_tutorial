var Tax = require('./tax');

function CartSummary(items) {
  return {
    _items: items,
    getSubtotal: function() {
      if (this._items.length) {
        return this._items.reduce(function(subtotal, item) {
          return subtotal += (item.quantity * item.price);
        }, 0);
      }

      return 0;
    },
    getTax: function(country, done) {
      Tax.calculate(this.getSubtotal(), country, function(taxInfo) {
        done(taxInfo.amount);
      });
    }
  };
};

module.exports = CartSummary;
