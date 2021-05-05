const is = require("../type-check");

describe("Object.is polyfill", () => {
	[
		[42, 42, true],
		["foo", "foo", true],
		[false, false, true],
		[null, null, true],
		[undefined, undefined, true],
		[NaN, NaN, true],
		[0, NaN, false],
		[NaN, 0, false],
		[42, "42", false],
		["42", 42, false],
		["foo", "bar", false],
		[false, true, false],
		[null, undefined, false],
		[undefined, null, false],
	].forEach(([value1, value2, result]) => {
		it(`should '${value1}' with '${value2}' comparison returns '${result}'`, () => {
			expect(is(value1, value2)).toBe(result);
		});
	});

	it(`should '-0' with '-0' comparison returns 'true'`, () => {
		expect(is(-0, -0)).toBe(true);
	});

	it(`should '-0' with '0' comparison returns 'false'`, () => {
		expect(is(-0, 0)).toBe(false);
	});

	it(`should '0' with '0' comparison returns 'true'`, () => {
		expect(is(0, 0)).toBe(true);
	});

	it(`should '0' with '-0' comparison returns 'true'`, () => {
		expect(is(0, -0)).toBe(false);
	});
});
