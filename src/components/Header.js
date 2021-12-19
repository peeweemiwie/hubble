import { FilledButton } from './styled/Button.styled';
import { Container } from './styled/Container.styled';
import { Flex } from './styled/Flex';
import { StyledHeader, Nav, Logo, Image } from './styled/Header.styled';

const Header = ({ theme }) => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src={theme.imgSrc} alt='' />
					<FilledButton bg='#00a1fa'>Try It Free</FilledButton>
				</Nav>
				<Flex>
					<section>
						<h1>Build The Community Your Fans Will Love</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Dignissimos laudantium alias quos magni error officia deserunt,
							non praesentium odio! Eius.
						</p>
						<FilledButton bg='#d351db'>Get Started For Free</FilledButton>
					</section>
					<Image src='./images/illustration-mockups.svg' alt='' />
				</Flex>
			</Container>
		</StyledHeader>
	);
};

export default Header;
