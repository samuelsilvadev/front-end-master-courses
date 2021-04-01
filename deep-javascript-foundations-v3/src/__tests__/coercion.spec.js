const { isValidName, hoursAttended } = require("../coercion");

describe("coercion", () => {
	describe("isValidName", () => {
		it("should return `true`", () => {
			expect(isValidName("Frank")).toBe(true);
		});

		[false, null, undefined, "", "  \t\n", "X"].forEach((value) => {
			it(`should return 'false' for ${value}`, () => {
				expect(isValidName(value)).toBe(false);
			});
		});
	});

	describe("hoursAttended", () => {
		it("should return true for `hoursAttended(6, 10)`", () => {
			expect(hoursAttended(6, 10)).toBe(true);
		});

		it(`should return true for 'hoursAttended(6, "10")`, () => {
			expect(hoursAttended(6, "10")).toBe(true);
		});

		it(`should return true for 'hoursAttended("6", 10)`, () => {
			expect(hoursAttended("6", 10)).toBe(true);
		});

		it(`should return true for 'hoursAttended("6", "10")`, () => {
			expect(hoursAttended("6", "10")).toBe(true);
		});

		it(`should return false for 'hoursAttended("", 6)`, () => {
			expect(hoursAttended("", 6)).toBe(false);
		});

		it(`should return false for 'hoursAttended(6, "")`, () => {
			expect(hoursAttended(6, "")).toBe(false);
		});

		it(`should return false for 'hoursAttended("", "")`, () => {
			expect(hoursAttended("", "")).toBe(false);
		});

		it(`should return false for 'hoursAttended("foo", 6)`, () => {
			expect(hoursAttended("foo", 6)).toBe(false);
		});

		it(`should return false for 'hoursAttended(6, "foo")`, () => {
			expect(hoursAttended(6, "foo")).toBe(false);
		});

		it(`should return false for 'hoursAttended("foo", "bar")`, () => {
			expect(hoursAttended("foo", "bar")).toBe(false);
		});

		it(`should return false for 'hoursAttended(null, null)`, () => {
			expect(hoursAttended(null, null)).toBe(false);
		});

		it(`should return false for 'hoursAttended(null, undefined)`, () => {
			expect(hoursAttended(null, undefined)).toBe(false);
		});

		it(`should return false for 'hoursAttended(undefined, null)`, () => {
			expect(hoursAttended(undefined, null)).toBe(false);
		});

		it(`should return false for 'hoursAttended(undefined, undefined)`, () => {
			expect(hoursAttended(undefined, undefined)).toBe(false);
		});

		it(`should return false for 'hoursAttended(false, false)`, () => {
			expect(hoursAttended(false, false)).toBe(false);
		});

		it(`should return false for 'hoursAttended(false, true)`, () => {
			expect(hoursAttended(false, true)).toBe(false);
		});

		it(`should return false for 'hoursAttended(true, false)`, () => {
			expect(hoursAttended(true, false)).toBe(false);
		});

		it(`should return false for 'hoursAttended(true, true)`, () => {
			expect(hoursAttended(true, true)).toBe(false);
		});

		it(`should return false for 'hoursAttended(10, 6)`, () => {
			expect(hoursAttended(10, 6)).toBe(false);
		});

		it(`should return false for 'hoursAttended(10, "6")`, () => {
			expect(hoursAttended(10, "6")).toBe(false);
		});

		it(`should return false for 'hoursAttended("10", 6)`, () => {
			expect(hoursAttended("10", 6)).toBe(false);
		});

		it(`should return false for 'hoursAttended("10", "6")`, () => {
			expect(hoursAttended("10", "6")).toBe(false);
		});

		it(`should return false for 'hoursAttended(6, 10.1)`, () => {
			expect(hoursAttended(6, 10.1)).toBe(false);
		});

		it(`should return false for 'hoursAttended(6.1, 10)`, () => {
			expect(hoursAttended(6.1, 10)).toBe(false);
		});

		it(`should return false for 'hoursAttended(6, "10.1")`, () => {
			expect(hoursAttended(6, "10.1")).toBe(false);
		});

		it(`should return false for 'hoursAttended("6.1", 10)`, () => {
			expect(hoursAttended("6.1", 10)).toBe(false);
		});

		it(`should return false for 'hoursAttended("6.1", "10.1")`, () => {
			expect(hoursAttended("6.1", "10.1")).toBe(false);
		});
	});
});
