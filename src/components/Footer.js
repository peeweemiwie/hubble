import { Container } from './styled/Container.styled';
import { Flex } from './styled/Flex';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { StyledHorizontalUl } from './styled/List.styled';
import { StyledFooter } from './styled/Footer.styled';

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<Flex>
					<div>
						<address>
							123 Santa Rd. North Pole 56789
							<br />
							<a href='mailto:santa@claus.com'>santa@claus.com</a>
							<br />
							<a href='tel:+19876543210'>(987)654-3210</a>
						</address>
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id
						consequatur provident sequi unde atque sed soluta. Illum,
						consectetur quisquam?
					</div>
					<StyledHorizontalUl>
						<li>
							<a href='https://facebook.com'>
								<FaFacebookF />
							</a>
						</li>
						<li>
							<a href='https://instagram.com'>
								<FaInstagram />
							</a>
						</li>
						<li>
							<a href='https://linkedin.com'>
								<FaLinkedinIn />
							</a>
						</li>
					</StyledHorizontalUl>
				</Flex>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
