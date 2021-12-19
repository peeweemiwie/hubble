import styled from 'styled-components';
import { FontSize, Color } from '../variables';

const fontSize = FontSize;
const color = Color;

export const StyledFooter = styled.footer`
	background-color: ${color.lightGray};
	color: ${color.white};
	font-size: ${fontSize.fontSm};
	padding: 3rem 0;
	a {
		color: ${color.white};
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
