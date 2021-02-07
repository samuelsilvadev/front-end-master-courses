/** @jsx jsx */

import { jsx } from 'theme-ui';
import Link from 'next/link';

const NOTES = new Array(15)
	.fill(1)
	.map((e, i) => ({ id: i, title: `This is my note ${i}` }));

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
	return (
		<div {...props}>
			<h1>My Notes</h1>
			<ul sx={styles.innerWrapper}>
				{NOTES.map((note) => (
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

export default Notes;
