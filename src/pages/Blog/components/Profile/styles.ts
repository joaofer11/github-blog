import styled from 'styled-components'

import { Profile } from '../../../../components/Profile'

export const InheritedProfile = styled(Profile)`
	display: grid;
	grid-template-columns: repeat(4, auto);
	grid-template-rows: repeat(3, auto);
	align-items: center;
	column-gap: 1.9rem;
	
	grid-template-areas:
	"avatar		name			name			github-link"
	".....		bio			bio			bio"
	".....		name-user	followers	...";
	
	> h1 {
		grid-area: name;
		align-self: center;
	}
	
	> button {
		grid-area: github-link;
		justify-self: end;
	}
`

export const Avatar = styled.div`
	grid-area: avatar;
	
	width: 4.8rem;
	overflow: hidden;
	
	border: 1px solid #222;
	border-radius: 50%;
	
	background-color: ${props => props.theme['base-background']};
	
	> img {
		display: block;
		object-fit: cover;
		
		width: 100%;
		border-radius: inherit;
	}
`

export const Bio = styled.p`
	grid-area: bio;
	
	margin-bottom: 1.7rem;
	
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
	
	color: ${props => props.theme['base-text']}
`
