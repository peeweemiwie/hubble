import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: #e6f7fc;
	padding: 40px 0;
	h1,
	p {
		color: ${({ theme }) => theme.color.gray};
	}
	p {
		font-size: ${({ theme }) => theme.fontSize.fontReg};
		font-family: ${({ theme }) => theme.fontFamily.roboto};
		margin-bottom: 4rem;
	}
`;

export const Logo = styled.img`
	@media (max-width: ${({ theme }) => theme.bp.sm}) {
		margin-bottom: 4rem;
	}
`;

export const Nav = styled.nav`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 4rem;

	@media (max-width: ${({ theme }) => theme.bp.sm}) {
		flex-direction: column;
	}
`;

export const Image = styled.img`
	width: 37.5rem;
	margin-left: 4rem;
	@media (max-width: ${({ theme }) => theme.bp.sm}) {
		margin: 4rem 0 3rem;
	}
`;
