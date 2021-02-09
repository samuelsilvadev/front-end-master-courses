/** @jsx jsx */

import { jsx } from 'theme-ui';
import Link from 'next/link';
import PropTypes from 'prop-types';

const styles = {
	innerWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
		listStyle: 'none',
		p: 0,
		m: 0,
	},
	noteWrapper: {
		width: ['100%', '33%'],
		p: 2,
	},
	link: {
		textDecoration: 'none',
		cursor: 'pointer',
	},
	card: {
		variant: 'containers.card',
	},
};

function Notes(props) {
	const { notes = [], ...remainingProps } = props;

	return (
		<div {...remainingProps}>
			<h1>My Notes</h1>
			<ul sx={styles.innerWrapper}>
				{notes.map((note) => (
					<li key={note.id} sx={styles.noteWrapper}>
						<Link href="/notes/[id]" as={`/notes/${note.id}`}>
							<a sx={styles.link}>
								<div sx={styles.card}>
									<strong>{note.title}</strong>
								</div>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

Notes.propTypes = {
	notes: PropTypes.array,
};

export async function getServerSideProps() {
	const response = await fetch(`${process.env.API}/notes`);

	if (response.ok) {
		const { data } = (await response.json()) || {};

		if (data) {
			return { props: { notes: data } };
		}
	}

	return { props: { notes: [] } };
}

export default Notes;
