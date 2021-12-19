import styled from 'styled-components';
import { Color } from '../variables';
const color = Color;

export const StyledSwitch = styled.div`
	position: absolute;
	right: 1rem;
	top: 1rem;

	button {
		background-color: ${color.primary};
		border: 1px solid ${color.primary};
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 4rem;
		width: 4rem;
		padding: 0;
		margin: 0;
	}

	svg {
		fill: ${color.lightGray};
		height: 3rem;
		width: 3rem;
	}
`;
