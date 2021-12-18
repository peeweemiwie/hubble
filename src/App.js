import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from './components/styled/Container.styled';
import GlobalStyles from './components/styled/Global';
import { theme } from './components/theme';
import content from './content';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>
					{content.map((item, index) => (
						<Card item={item} key={index} />
					))}
				</Container>
				<Footer />
			</>
		</ThemeProvider>
	);
}

export default App;
