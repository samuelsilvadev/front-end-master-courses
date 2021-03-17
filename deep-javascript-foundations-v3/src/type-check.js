function isNegativeZero(value) {
	return 1 / value === -Infinity;
}

/**
 * Polyfill to `Object.is`
 *
 * @param {*} value1
 * @param {*} value2
 *
 * @returns {boolean}
 */
function is(value1, value2) {
	if (isNegativeZero(value1) || isNegativeZero(value2)) {
		return isNegativeZero(value1) && isNegativeZero(value2);
	}

	if (Number.isNaN(value1) && Number.isNaN(value2)) {
		return true;
	}

	if (value1 === value2) {
		return true;
	}

	return false;
}

module.exports = is;
