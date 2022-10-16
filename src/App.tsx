import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GithubUserLoginProvider } from './contexts/GithubUserLoginContext'
import { GithubIssuesProvider } from './contexts/GithubIssuesContext'

import { defaultTheme } from './styles/themes/default'

import { GlobalStyles } from './styles/global';
import { Router } from './Router'

export const App = () => {
   return (
      <ThemeProvider theme={defaultTheme}>
         <GlobalStyles />
         
         <BrowserRouter>
         	<GithubUserLoginProvider>
	         	<GithubIssuesProvider>
	         		<Router />
	         	</GithubIssuesProvider>
         	</GithubUserLoginProvider>
         </BrowserRouter>
      </ThemeProvider>
   );
};