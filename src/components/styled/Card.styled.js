import styled from 'styled-components';

export const StyledCard = styled.div`
	align-items: center;
	border-radius: 1rem;
	box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
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

	@media (max-width: ${({ theme }) => theme.bp.sm}) {
		flex-direction: column;
	}
`;
