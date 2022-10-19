import styled from 'styled-components'

export const FormContainer = styled.form`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	
	display: flex;
	flex-direction: column;
	
	width: 85%;
	max-width: 425px;
	
	border: 1px solid ${props => props.theme['base-border']};
	border-radius: 3px;
	padding: 1.2rem 1.6rem;
	
	> p {
		margin-bottom: 1.9rem;
		
		font-size: 1.6rem;
		text-align: center;
		color: ${props => props.theme['base-text']};
		color: #e7e7e7;
	}
	
	> input {
		border: 1px solid ${props => props.theme['base-border']};
		padding: 0.5rem 1.0rem;
		
		color: ${props => props.theme['base-span']};
		background-color: ${props => props.theme['base-input']};
		
		& + input {
			margin-top: 0.5rem;
		}
	}
	
	> span {
		margin-top: 0.5rem;
		
		font-size: 1.0rem;
		font-weight: 700;
		text-align: center;
		
		color: #fc0000;
	}
	
	> button {
		margin-top: 1.0rem;
		border: 1px solid ${props => props.theme['base-border']};
		padding: 0.6rem 1.4rem;
		
		text-align: center;
		text-transform: uppercase;
		
		color: ${props => props.theme['base-text']};
		background-color: transparent;
		
		&:hover {
			background-color: ${props => props.theme['base-input']};
			transition: all 250ms;
		}
	}
`