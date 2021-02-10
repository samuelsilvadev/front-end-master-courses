const notes = new Array(15).fill().map((_, index) => ({
	id: Date.now() + index,
	title: `Note ${index + 1}`,
}));

module.exports = notes;
