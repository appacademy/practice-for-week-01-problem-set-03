const { expect } = require('chai');

const snakeToPascal = require('../problems/05-snake-to-pascal');

describe('snakeToPascal()', function () {
	it('returns a PascalCased string from a string containing one "_"', function () {
		const inputStrOne = 'SNAKE_CASE';
		const inputStrTwo = 'camel_Case';

		const outputStrOne = 'SnakeCase';
		const outputStrTwo = 'CamelCase';

		expect(snakeToPascal(inputStrOne)).to.equal(outputStrOne);
		expect(snakeToPascal(inputStrTwo)).to.equal(outputStrTwo);
	});

	it('returns a PascalCased string from a string containing multiple "_"', function () {
		const inputStrOne = 'really_COMPLICATED_Function_That_Works_gud';
		const inputStrTwo = 'special_variable_that_is_awesome';

		const outputStrOne = 'ReallyComplicatedFunctionThatWorksGud';
		const outputStrTwo = 'SpecialVariableThatIsAwesome';

		expect(snakeToPascal(inputStrOne)).to.equal(outputStrOne);
		expect(snakeToPascal(inputStrTwo)).to.equal(outputStrTwo);
	});

	it('returns a PascalCased string from a string containing many "_"', function () {
		const inputStrOne =
			'SO_manY_little_TINY_underscores_ALL_over_The_place_for_NO_Reason';
		const inputStrTwo =
			'thiS_is_A_very_specific_variable_that_does_MANY_important_things_that_are_SpeciaL';

		const outputStrOne =
			'SoManyLittleTinyUnderscoresAllOverThePlaceForNoReason';
		const outputStrTwo =
			'ThisIsAVerySpecificVariableThatDoesManyImportantThingsThatAreSpecial';

		expect(snakeToPascal(inputStrOne)).to.equal(outputStrOne);
		expect(snakeToPascal(inputStrTwo)).to.equal(outputStrTwo);
	});
});
