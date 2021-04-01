const { isValidName } = require("../coercion");

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
});
