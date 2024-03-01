var sinon=require('sinon')
var object=require('./server')
describe("hello mitch",function(){
    it("vhrck",function(){
        console.log("check me")
    })
it('spy',function(){
    var spy=sinon.spy(object)
    var a1=3
    var a2=6
    object.add(a1,a2)
})

it('double done', function (done) {
    // Calling `done()` twice is an error
    setImmediate(done);
    
  });})
  
  var assert = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
