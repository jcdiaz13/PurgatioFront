import { createGlobalStyle } from 'styled-components';
import Goddes from "./app/fonts/MGNGoddess.ttf"

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Goddes;
    src: url(${Goddes});
}
	body{
        font-family: Helvetica;
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }
`;