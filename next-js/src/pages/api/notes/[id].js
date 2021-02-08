import nc from 'next-connect';
import notes from '../../../data';

function find(id) {
	return notes.find((note) => note.id === parseInt(id, 10));
}

const handler = nc()
	.get((req, res) => {
		const note = find(req.query.id);

		if (!note) {
			res.status(404);
			res.end();

			return;
		}

		res.json({ data: note });
	})
	.patch((req, res) => {
		const note = find(req.query.id);

		if (!note) {
			res.status(404);
			res.end();

			return;
		}

		const index = notes.findIndex(
			(note) => note.id === parseInt(req.query.id)
		);
		const updatedNote = { ...note, ...req.body };

		notes[index] = updatedNote;

		res.json({ data: updatedNote });
	})
	.delete((req, res) => {
		const note = find(req.query.id);

		if (!note) {
			res.status(404);
			res.end();

			return;
		}

		const index = notes.findIndex(
			(note) => note.id === parseInt(req.query.id)
		);

		notes.splice(index, 1);

		res.json({ data: req.query.id });
	});

export default handler;
