const { expect } = require('chai');

const fibonacciSequence = require('../problems/02-fibonacci-sequence');

describe('fibonacciSequence()', function () {
	it('returns an array of the fibonacci sequence for low ranges', function () {
		const inputLengthOne = 0;
		const inputLengthTwo = 1;
		const inputLengthThree = 2;

		const outputSeqOne = [];
		const outputSeqTwo = [1];
		const outputSeqThree = [1, 1];

		expect(fibonacciSequence(inputLengthOne)).to.deep.equal(outputSeqOne);
		expect(fibonacciSequence(inputLengthTwo)).to.deep.equal(outputSeqTwo);
		expect(fibonacciSequence(inputLengthThree)).to.deep.equal(outputSeqThree);
	});

	it('returns an array of the fibonacci sequence for mid ranges', function () {
		const inputLengthOne = 6;
		const inputLengthTwo = 9;

		const outputSeqOne = [1, 1, 2, 3, 5, 8];
		const outputSeqTwo = [1, 1, 2, 3, 5, 8, 13, 21, 34];

		expect(fibonacciSequence(inputLengthOne)).to.deep.equal(outputSeqOne);
		expect(fibonacciSequence(inputLengthTwo)).to.deep.equal(outputSeqTwo);
	});

	it('returns an array of the fibonacci sequence for high ranges', function () {
		const inputLengthOne = 18;
		const inputLengthTwo = 28;

		const outputSeqOne = [
			1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
		];
		const outputSeqTwo = [
			1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
			4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811,
		];

		expect(fibonacciSequence(inputLengthOne)).to.deep.equal(outputSeqOne);
		expect(fibonacciSequence(inputLengthTwo)).to.deep.equal(outputSeqTwo);
	});
});
