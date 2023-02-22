const { expect } = require('chai');

const doubler = require('../problems/01-doubler');

describe('doubler()', function () {
	it('return an array of doubled positive integers', function () {
		const inputArr = [2, 3, 10, 200];
		const outputArr = [4, 6, 20, 400];

		expect(doubler(inputArr)).to.deep.equal(outputArr);
	});

	it('return an array of doubled negative integers', function () {
		const inputArr = [-1, 1, 0, -6, -5];
		const outputArr = [-2, 2, 0, -12, -10];

		expect(doubler(inputArr)).to.deep.equal(outputArr);
	});

	it('does not modify original input array', function () {
		const inputArrOne = [2, 3, 10, 200];
		const inputArrTwo = [-1, 1, 0, -6, -5];

		doubler(inputArrOne);
		doubler(inputArrTwo);

		expect(inputArrOne).to.deep.equal([2, 3, 10, 200]);
		expect(inputArrTwo).to.deep.equal([-1, 1, 0, -6, -5]);
	});
});
