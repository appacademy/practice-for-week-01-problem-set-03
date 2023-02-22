const { expect } = require('chai');

const rotateRight = require('../problems/03-rotate-right');

describe('rotateRight()', function () {
	it('returns a new array of elements rotated to the right', function () {
		const inputArrOne = ['a', 'b', 'c', 'd', 'e'];
		const inputArrTwo = ['Jedi', 'Lightsaber', 'The Force', 'Starship'];
		const inputNumOne = 3;
		const inputNumTwo = 1;

		const outputArrOne = ['c', 'd', 'e', 'a', 'b'];
		const outputArrTwo = ['Starship', 'Jedi', 'Lightsaber', 'The Force'];

		expect(rotateRight(inputArrOne, inputNumOne)).to.deep.equal(outputArrOne);
		expect(rotateRight(inputArrTwo, inputNumTwo)).to.deep.equal(outputArrTwo);
	});

	it('returns a new array of elements rotated to the right many times', function () {
		const inputArrOne = ['a', 'b', 'c', 'd', 'e'];
		const inputArrTwo = ['Jedi', 'Lightsaber', 'The Force', 'Starship'];
		const inputNumOne = 8;
		const inputNumTwo = 5;

		const outputArrOne = ['c', 'd', 'e', 'a', 'b'];
		const outputArrTwo = ['Starship', 'Jedi', 'Lightsaber', 'The Force'];

		expect(rotateRight(inputArrOne, inputNumOne)).to.deep.equal(outputArrOne);
		expect(rotateRight(inputArrTwo, inputNumTwo)).to.deep.equal(outputArrTwo);
	});

	it('does not modify original input array', function () {
		const inputArr = [1, 2, 3, 4];
		const inputNum = 2;

		const outputArr = [3, 4, 1, 2];

		expect(rotateRight(inputArr, inputNum)).to.deep.equal(outputArr);
		expect(inputArr).to.deep.equal([1, 2, 3, 4]);
	});
});
