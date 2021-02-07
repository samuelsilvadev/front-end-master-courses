/** @jsx jsx */

import { jsx, ThemeProvider } from 'theme-ui';
import PropTypes from 'prop-types';

import Header from '../components/header';

import theme from '../theme';

function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Component sx={{ variant: 'containers.page' }} {...pageProps} />
		</ThemeProvider>
	);
}

App.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.any,
};

export default App;
