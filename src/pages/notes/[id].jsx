import React from 'react';
import { useRouter } from 'next/router';

function Note(props) {
	const { query } = useRouter();

	return <div {...props}>Note {query.id}</div>;
}

export default Note;
