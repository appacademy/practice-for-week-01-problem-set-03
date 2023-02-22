const { expect } = require('chai');

const removeEWords = require('../problems/04-remove-e-words');

describe('removeEWords()', function () {
	it('returns a filtered string from a string containing one "e" word', function () {
		const inputStrOne = 'TRY NOT. Do or do not. There is NO TRY.';
		const inputStrTwo = 'I am not a committee.';

		const outputStrOne = 'TRY NOT. Do or do not. is NO TRY.';
		const outputStrTwo = 'I am not a';

		expect(removeEWords(inputStrOne)).to.equal(outputStrOne);
		expect(removeEWords(inputStrTwo)).to.equal(outputStrTwo);
	});

	it('returns a filtered string from a string containing multiple "e" word', function () {
		const inputStrOne = 'I am one with the Force and the Force is with me';
		const inputStrTwo = 'Hello there';

		const outputStrOne = 'I am with and is with';
		const outputStrTwo = '';

		expect(removeEWords(inputStrOne)).to.equal(outputStrOne);
		expect(removeEWords(inputStrTwo)).to.equal(outputStrTwo);
	});

	it('returns a filtered string from a string containing zero "e" word', function () {
		const inputStrOne = 'Laugh it up, fuzzball!';
		const inputStrTwo = 'NOOOOOooOOoOooooooooo';

		const outputStrOne = 'Laugh it up, fuzzball!';
		const outputStrTwo = 'NOOOOOooOOoOooooooooo';

		expect(removeEWords(inputStrOne)).to.equal(outputStrOne);
		expect(removeEWords(inputStrTwo)).to.equal(outputStrTwo);
	});
});
