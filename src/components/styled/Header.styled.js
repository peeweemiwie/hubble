import styled from 'styled-components';
import { Bp, FontFamily, FontSize } from '../variables';
const bp = Bp;
const fontFamily = FontFamily;
const fontSize = FontSize;

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.headerBg};
	padding: 60px 0 40px;
	h1,
	p {
		color: ${({ theme }) => theme.text};
	}
	p {
		font-size: ${fontSize.fontReg};
		font-family: ${fontFamily.roboto};
		margin-bottom: 4rem;
	}
`;

export const Logo = styled.img`
	@media (max-width: ${bp.sm}) {
		margin-bottom: 4rem;
	}
`;

export const Nav = styled.nav`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 4rem;

	@media (max-width: ${bp.sm}) {
		flex-direction: column;
	}
`;

export const Image = styled.img`
	width: 37.5rem;
	margin-left: 4rem;
	@media (max-width: ${bp.sm}) {
		margin: 4rem 0 3rem;
	}
`;
