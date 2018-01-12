# node_mocha_chai_tutorial

taking a look into mocha and chai following a tutorial by [David Tang](https://www.codementor.io/davidtang/unit-testing-and-tdd-in-node-js-part-1-8t714s877)

## stumbling blocks

### Missing CartSummary file raises exception

```
mocha tests
module.js:472
    throw err;
    ^

Error: Cannot find module './../../src/cart-summary'
    at Function.Module._resolveFilename (module.js:470:15)
    at Function.Module._load (module.js:418:25)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/cwirth/Workspace/node_mocha_chai_tutorial/tests/cart-summary-test.js:5:19)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at /usr/local/lib/node_modules/mocha/lib/mocha.js:231:27
    at Array.forEach (native)
    at Mocha.loadFiles (/usr/local/lib/node_modules/mocha/lib/mocha.js:228:14)
    at Mocha.run (/usr/local/lib/node_modules/mocha/lib/mocha.js:536:10)
    at Object.<anonymous> (/usr/local/lib/node_modules/mocha/bin/_mocha:573:18)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:418:7)
    at startup (bootstrap_node.js:139:9)
    at bootstrap_node.js:533:3
```

fix: create a minimal CartSummary module 

### Mocha default test folder is assumed in test not tests

fix: rename to default test (without the 's')

### Mocha should be part of the package as development dependency

fix: install mocha via `npm install --save-dev mocha

### Module methods should be in its on describe block

Nest methods in their own describe block will make the output way
more readable. One will see the method specific tests due to the
output indentation. 

fix: add a new describe block for each method

```javascript
describe('CartSummary', function() {
  describe('getSubtotal()', function() {
  });

describe('anotherMethod()', function() {

  });
});
```
