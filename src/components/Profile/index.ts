import styled from 'styled-components'

export const Profile = styled.header`
	transform: translateY(-12.5%);
	
	border-radius: 10px;
	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
	padding: 1.8rem 2.4rem;
	
	background-color: ${props => props.theme['base-profile']};
	
	> h1 {
		font-size: 1.8rem;
		font-weight: 700;
		line-height: 1.3;
		
		color: ${props => props.theme['base-title']};
	}
	
	> button {
		position: relative;
		
		display: flex;
		align-items: center;
		gap: 0.8rem;
		
		border: 0;
		
		font-size: 1.0rem;
		font-weight: 700;
		line-height: none;
		
		color: ${props => props.theme['blue']};
		background-color: transparent;
		
		&::after {
			content: "";
			
			position: absolute;
			left: 0;
			bottom: 0;
			
			width: 0;
			height: 1px;
			
			background-color: ${props => props.theme['blue']};
			transition: all 0.2s;
		}
		
		&:hover {
			&::after {
				width: 100%;
			}
		}
		
		svg {
			color: currentColor;
		}
		
		span, a {
			text-transform: uppercase;
			text-decoration: none;
			color: currentColor;
		}
	}
	
	svg {
		color: ${props => props.theme['base-label']};
	}
	
	span {
		color: ${props => props.theme['base-subtitle']};
	}
`