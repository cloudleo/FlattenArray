var Flattener = require("./flattenArray.js");

describe("FlattenArray", function() {
	var flattener = new Flattener();

	it('flattens Array with null and numbers', function(){
		flattener.clear();
		expect(flattener.flatten([0, 2, [[2, 3], 8, 100, null, [[null]]], -2])).toEqual([0, 2, 2, 3, 8, 100, -2]);
	});


	it('flattens Array with just numbers', function(){
		flattener.clear();
		expect(flattener.flatten([1,[2,3,4,5,6,7],8])).toEqual([1,2,3,4,5,6,7,8]);
	});
	it('flattens Array and it doesnt take null', function(){
		flattener.clear();
		expect(flattener.flatten([null,[[[null]]],null,null,[[null,null],null],null])).toEqual([]);
	});  

});