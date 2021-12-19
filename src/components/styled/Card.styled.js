import styled from 'styled-components';
import { Bp } from '../variables';
const bp = Bp;

export const StyledCard = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.bg};
	border-radius: 1rem;
	box-shadow: 0.5rem 0.5rem 0.5rem ${({ theme }) => theme.shadow};
	color: ${({ theme }) => theme.text};
	display: flex;
	flex-direction: ${({ layout }) => layout || 'row'};
	padding: 1.6rem;
	margin: 3.2rem 0;
	width: 100%;
	img {
		width: 50%;
	}

	& > div,
	& > figure {
		flex: 1;
	}

	@media (max-width: ${bp.sm}) {
		flex-direction: column;
	}
`;
