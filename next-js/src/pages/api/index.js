import nc from 'next-connect';

const handler = nc().get((_, response) => {
	response.json({ isAlive: true });
});

export default handler;
