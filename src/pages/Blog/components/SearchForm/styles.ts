import styled from 'styled-components'

export const SearchForm = styled.form`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, auto);
	align-items: center;
	row-gap: 0.8rem;
	
	margin-bottom: 3.2rem;
	
	> h2 {
		justify-self: start;
		
		font-size: 1.6rem;
		font-weight: 700;
		
		color: ${props => props.theme['base-subtitle']};
	}
	
	> span {
		justify-self: end;
		color: ${props => props.theme['base-span']};
	}
	
	> input {
		grid-column: span 2;
		
		border: 1px solid ${props => props.theme['base-border']};
		border-radius: 6px;
		padding: 1.0rem 1.4rem;
		
		color: ${props => props.theme['base-text']};
		background-color: ${props => props.theme['base-input']};
		
		&:focus {
			outline: 0;
			border: 1px solid ${props => props.theme['blue']};
		}
		
		&::placeholder {
			color: ${props => props.theme['base-label']};
		}
	}
`