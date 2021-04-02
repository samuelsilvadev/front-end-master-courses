function _isNegativeZero(value) {
	return 1 / value === -Infinity;
}

function findAll(value, values) {
	const coerciveValues = [];

	for (const valueItem of values) {
		if (
			(typeof value == "string" || typeof value == "number") &&
			typeof valueItem != "string" &&
			typeof valueItem != "number"
		) {
			continue;
		}

		if (
			typeof value == "number" &&
			typeof valueItem == "string" &&
			valueItem == ""
		) {
			continue;
		}

		if (
			typeof value == "string" &&
			value == "" &&
			typeof valueItem == "number"
		) {
			continue;
		}

		if (
			(!_isNegativeZero(value) && _isNegativeZero(valueItem)) ||
			(_isNegativeZero(value) && !_isNegativeZero(valueItem))
		) {
			continue;
		}

		if (typeof value == "boolean" && typeof valueItem != "boolean") {
			continue;
		}

		if (
			value == valueItem ||
			(Number.isNaN(value) && Number.isNaN(valueItem))
		) {
			coerciveValues.push(valueItem);
		}
	}

	return coerciveValues;
}

module.exports = findAll;
