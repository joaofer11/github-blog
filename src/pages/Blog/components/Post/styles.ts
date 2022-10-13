import styled from 'styled-components'

export const Post = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-template-rows: repeat(2, auto);
	grid-gap: 1.7rem 1.0rem;
	
	border-radius: 6px;
	padding: 2.5rem 2.2rem;
	background-color: ${props => props.theme['base-post']};
	
	> h1 {
		font-size: 1.8rem;
		font-weight: 700;
		color: ${props => props.theme['base-title']};
	}
	
	> span {
		font-size: 1.2rem;
		color: ${props => props.theme['base-span']};
	}
	
	> p {
		grid-column: span 2;
		
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		
		
		color: ${props => props.theme['base-text']};
	}
`