/** @jsx jsx */

import { jsx } from 'theme-ui';
import Link from 'next/link';

import styles from './Header.styles';

function Header() {
	return (
		<header sx={styles.header}>
			<nav sx={styles.nav}>
				<Link href="/">
					<a sx={styles.mainLink}>Note App</a>
				</Link>
				<Link href="/notes">
					<a sx={styles.link}>notes</a>
				</Link>
			</nav>
		</header>
	);
}

export default Header;
