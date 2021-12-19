import styled from 'styled-components';
import { Bp } from '../variables';
const bp = Bp;

export const Flex = styled.div`
	display: flex;
	align-items: center;
	& > * {
		flex: 1;
	}

	@media (max-width: ${bp.sm}) {
		flex-direction: column;
		text-align: center;
		row-gap: 1rem;
	}
`;
