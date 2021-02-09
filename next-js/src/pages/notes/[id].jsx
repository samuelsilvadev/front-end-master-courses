import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

function Note(props) {
	const { note, ...remainingProps } = props;
	const { query } = useRouter();

	return (
		<div {...remainingProps}>
			<h1>Note {query.id}</h1>
			<p>{note.title}</p>
		</div>
	);
}

Note.propTypes = {
	note: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
	}),
};

export async function getServerSideProps({ params, res }) {
	const response = await fetch(`${process.env.API}/notes/${params.id}`);

	if (!response.ok) {
		res.writeHead(302, {
			Location: '/notes',
		});
		res.end();

		return {
			props: {},
		};
	}

	const { data = {} } = (await response.json()) || {};

	return { props: { note: data } };
}

export default Note;
