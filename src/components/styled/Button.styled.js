import styled from 'styled-components';
import { Color, FontSize } from '../variables';
const colors = Color;
const fontSize = FontSize;
// const white = ({ theme }) => theme.color.white;
// const gray = ({ theme }) => theme.color.gray;

export const BaseButton = styled.button`
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 2rem;
	color: ${({ color }) => color || colors.white};
	font-size: ${fontSize.fontReg};
	padding: 0.5em 1em;
	transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
	&:hover {
		opacity: 0.8;
		transform: scale(0.95);
	}
`;

export const FilledButton = styled(BaseButton)`
	background-color: ${({ bg }) => bg || 'transparent'};
	border: 1px solid ${({ borderColor }) => borderColor || 'transparent'};
	color: ${({ color }) => color || colors.white};
`;

export const BorderButton = styled(BaseButton)`
	border-color: ${({ borderColor }) => borderColor || 'transparent'};
	color: ${({ color }) => color || colors.gray};
`;
