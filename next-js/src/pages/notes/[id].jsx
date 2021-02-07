import React from 'react';
import { useRouter } from 'next/router';

function Note(props) {
	const { query } = useRouter();

	return (
		<div {...props}>
			<h1>Note {query.id}</h1>
		</div>
	);
}

export default Note;
