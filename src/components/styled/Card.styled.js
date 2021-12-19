import styled from 'styled-components';
import { Color, Bp } from '../variables';
const colors = Color;
const bp = Bp;

export const StyledCard = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.bg};
	border-radius: 1rem;
	box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
	color: ${({ theme }) => theme.text};
	display: flex;
	flex-direction: ${({ layout }) => layout || 'row'};
	padding: 1.6rem;
	margin: 3.2rem 0;
	width: 100%;

	figure {
		margin: 0;
		img {
			width: 80%;
		}
	}

	& > div,
	& > figure {
		flex: 1;
	}

	@media (max-width: ${bp.sm}) {
		flex-direction: column;
	}
`;
