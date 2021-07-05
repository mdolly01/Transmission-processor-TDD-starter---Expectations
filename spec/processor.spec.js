const processor = require('../processor.js')

describe("transmission processor", function() {

  it("takes a string and returns an object", function() {
    let result = processor("9701::<489584872710>");
    expect(typeof result).toEqual("object")
  });

  it("returns -1 if '::' not found", function(){
    let result = processor("9701<489584872710>");
    expect(result).toEqual(-1);
  });

});