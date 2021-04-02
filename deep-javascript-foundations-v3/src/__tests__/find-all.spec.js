const findAll = require("../find-all");

const obj = { a: 2 };

const values = [
	null,
	undefined,
	-0,
	0,
	13,
	42,
	NaN,
	-Infinity,
	Infinity,
	"",
	"0",
	"42",
	"42hello",
	"true",
	"NaN",
	true,
	false,
	obj,
];

describe("find All coercion possibilities", () => {
	it("should return [null,undefined] if value is null", () => {
		expect(findAll(null, values)).toEqual([null, undefined]);
	});

	it("should return [null,undefined] if value is undefined", () => {
		expect(findAll(undefined, values)).toEqual([null, undefined]);
	});

	it("should return [0,'0'] if value is 0", () => {
		expect(findAll(0, values)).toEqual([0, "0"]);
	});

	it("should return [-0] if value is -0", () => {
		expect(findAll(-0, values)).toEqual([-0]);
	});

	it("should return [13] if value is 13", () => {
		expect(findAll(13, values)).toEqual([13]);
	});

	it("should return [42,'42'] if value is 42", () => {
		expect(findAll(42, values)).toEqual([42, "42"]);
	});

	it("should return [NaN] if value is NaN", () => {
		expect(findAll(NaN, values)).toEqual([NaN]);
	});

	it("should return [-Infinity] if value is -Infinity", () => {
		expect(findAll(-Infinity, values)).toEqual([-Infinity]);
	});

	it("should return [Infinity] if value is Infinity", () => {
		expect(findAll(Infinity, values)).toEqual([Infinity]);
	});

	it("should return [''] if value is ''", () => {
		expect(findAll("", values)).toEqual([""]);
	});

	it("should return [0,'0'] if value is '0'", () => {
		expect(findAll("0", values)).toEqual([0, "0"]);
	});

	it("should return [42,'42'] if value is '42'", () => {
		expect(findAll("42", values)).toEqual([42, "42"]);
	});

	it("should return ['42hello'] if value is '42hello'", () => {
		expect(findAll("42hello", values)).toEqual(["42hello"]);
	});

	it("should return ['true'] if value is 'true'", () => {
		expect(findAll("true", values)).toEqual(["true"]);
	});

	it("should return [true] if value is true", () => {
		expect(findAll(true, values)).toEqual([true]);
	});

	it("should return [false] if value is false", () => {
		expect(findAll(false, values)).toEqual([false]);
	});

	it("should return [obj] if value is obj", () => {
		expect(findAll(obj, values)).toEqual([obj]);
	});

	it("should not return [null,0] if value is null", () => {
		expect(findAll(null, values)).not.toEqual([null, 0]);
	});

	it("should not return [NaN,0] if value is undefined", () => {
		expect(findAll(undefined, values)).not.toEqual([NaN, 0]);
	});

	it("should not return [0,-0] if value is 0", () => {
		expect(findAll(0, values)).not.toEqual([0, -0]);
	});
});
