function isValidName(name) {
	return typeof name === "string" && name !== "" && name.trim().length >= 3;
}

function isNumberOrString(value) {
	const valueType = typeof value;

	return valueType === "string" || valueType === "number";
}

function isEmptyString(value) {
	return typeof value === "string" && value === "";
}

function hoursAttended(attended, length) {
	if (!isNumberOrString(attended) || !isNumberOrString(length)) {
		return false;
	}

	if (isEmptyString(attended) || isEmptyString(length)) {
		return false;
	}

	const parsedAttended = +attended;
	const parsedLength = +length;

	if (
		typeof parsedAttended === "number" &&
		typeof parsedLength === "number" &&
		Number.isInteger(parsedAttended) &&
		Number.isInteger(parsedLength) &&
		parsedAttended >= 0 &&
		parsedLength >= 0 &&
		parsedAttended <= parsedLength
	) {
		return true;
	}

	return false;
}

module.exports = {
	isValidName,
	hoursAttended,
};
