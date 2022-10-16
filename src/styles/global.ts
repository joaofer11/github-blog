import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	:focus {
		outline: 0;
		box-shadow: 0 0 0 1px ${props => props.theme['blue']};
	}
	
	html {
		height: 100%;
		height: -webkit-fill-available;
		
		font-size: 62.5%;
	}
	
	body {
		width: 100%;
		height: 100%;
		
		min-height: 100vh;
		min-height: -moz-available;
		min-height: -webkit-fill-available;
		
		-webkit-font-smoothing: antialiased;
		
		color: white;
		background-color: ${props => props.theme['base-background']};
	}
	
	body, input, button {
		font-family: 'Nunito', sans-serif;
		font-weight: 400;
		font-size: 1.4rem;
		line-height: 1.6;
		
		@media (min-width: 480px) {
			font-size: 1.5rem;
		}
		
		@media (min-width: 768px) {
			font-size: 1.6rem;
		}
	}
	
	#root {
		width: 100%;
		height: 100%;
	}
`;
