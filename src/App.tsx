import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GithubApiDataProvider } from './contexts/GithubApiDataContext'

import { defaultTheme } from './styles/themes/default'

import { GlobalStyles } from './styles/global';
import { Router } from './Router'

export const App = () => {
   return (
      <ThemeProvider theme={defaultTheme}>
         <GlobalStyles />
         
         <BrowserRouter>
         	<GithubApiDataProvider>
         		<Router />
         	</GithubApiDataProvider>
         </BrowserRouter>
      </ThemeProvider>
   );
};