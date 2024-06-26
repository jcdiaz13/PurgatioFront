import { createGlobalStyle } from 'styled-components';
import Punish from './pages/Home/Punish.otf';

export const GlobalStyle = createGlobalStyle`
	body {
		@font-face {
    font-family: Punish;
    src: url(${Punish.otf});
  }
	}
`;