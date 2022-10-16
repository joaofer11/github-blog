import styled from 'styled-components'

import { Profile } from '../../../../components/Profile'

export const InheritedProfile = styled(Profile)`
	display: grid;
	grid-template-columns: repeat(4, auto);
	grid-template-rows: repeat(3, auto);
	
	grid-template-areas: 
	"back-btn		.....		github-link			github-link"
	"title			title		title					..........."
	"github-user	date		comments				comments";
	
	> button {
		&:nth-child(1) {
			grid-area: back-btn;
		}
		
		&:nth-child(2) {
			grid-area: github-link;
			justify-self: end;
		}
	}
	
	> h1 {
		grid-area: title;
		margin: 1.6rem 0 1.3rem;
	}
	
	> div + div {
		margin-left: 1.9rem;
	}
`