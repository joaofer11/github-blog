import styled from 'styled-components'

interface ITagProps {
	variant: string;
}

export const Tag = styled.div<ITagProps>`
	grid-area: ${props => props.variant};
	
	display: flex;
	align-items: center;
	gap: 0.8rem;
	
	svg {
		font-size: 1.6rem;
	}
	
	span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		
		font-size: 1.0rem;
		color: ${props => props.theme['base-subtitle']};
	}
`