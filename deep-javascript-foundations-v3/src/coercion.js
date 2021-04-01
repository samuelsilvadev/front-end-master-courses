function isValidName(name) {
	return typeof name === "string" && name !== "" && name.trim().length >= 3;
}

module.exports = {
	isValidName,
};
