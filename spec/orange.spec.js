const Orange = require('../orange');

describe('Orange', () => {
	let orange, desiredDiameterRange;

	beforeEach(() => {
		orange = new Orange();
		desiredDiameterRange = [2, 3.2]
	});

	test('has a diameter more than 2', () => {
		expect(orange.diameter >= desiredDiameterRange[0]).toBeTruthy();
	});

	test('has a diameter less than 3.2', () => {
		expect(orange.diameter <= desiredDiameterRange[1]).toBeTruthy();
	});

});
