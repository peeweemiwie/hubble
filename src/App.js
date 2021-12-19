import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from './components/styled/Container.styled';
import GlobalStyles from './components/styled/Global';
import { darkTheme, lightTheme } from './components/theme';
import Switch from './components/Switch';
import content from './content';
import { StyledPage } from './components/styled/Page.styled';

function App() {
	const [currentTheme, setCurrentTheme] = useState('dark');
	const onReceivedTheme = (theme) => {
		setCurrentTheme(theme);
	};
	return (
		<ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
			<StyledPage>
				<GlobalStyles />
				<Switch onReceivedTheme={onReceivedTheme} />
				<Header />
				<Container>
					{content.map((item, index) => (
						<Card item={item} key={index} />
					))}
				</Container>
				<Footer />
			</StyledPage>
		</ThemeProvider>
	);
}

export default App;
