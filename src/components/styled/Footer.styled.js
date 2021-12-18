import styled from 'styled-components';

export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.color.lightGray};
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.fontSm};
	padding: 3rem 0;
	a {
		color: ${({ theme }) => theme.color.white};
	}
	ul {
		justify-content: flex-end;
		li {
			margin-right: 1rem;
			svg {
				height: 3rem;
				width: 3rem;
				border: 1px solid gray;
				border-radius: 50%;
				padding: 0.5rem;
			}
		}
	}
`;
