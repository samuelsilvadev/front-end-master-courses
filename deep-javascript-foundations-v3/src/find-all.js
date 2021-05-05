function findAll(match, values) {
	const coerciveValues = [];

	for (const valueItem of values) {
		if (Object.is(match, valueItem)) {
			coerciveValues.push(valueItem);
		} else if (match == null && valueItem == null) {
			coerciveValues.push(valueItem);
		} else if (
			(typeof match == "number" &&
				!Object.is(match, -0) &&
				typeof valueItem == "string" &&
				valueItem.trim().length > 0) ||
			(typeof valueItem == "number" &&
				!Object.is(valueItem, -0) &&
				typeof match == "string" &&
				match.trim().length > 0)
		) {
			if (match == valueItem) {
				coerciveValues.push(valueItem);
			}
		}
	}

	return coerciveValues;
}

module.exports = findAll;
