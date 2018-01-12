function Tax() {
  return {
    calculate: function(subtotal, state, done) {
      done({ amount: 0 });
    }
  };
};

module.exports = new Tax();
