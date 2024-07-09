import { createGlobalStyle } from 'styled-components';
import Goddes from '../fonts/MGNGoddess.ttf';
import Title from '../fonts/Crang.ttf';
import Pixellari from '../fonts/Pixellari.ttf';


export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */
     @font-face {
    font-family: Goddes;
    src: url(${Goddes});
}
@font-face {
    font-family: Title;
    src: url(${Title});
}
@font-face {
    font-family: Pixellari;
    src: url(${Pixellari});
}
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: Pixellari;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Global Styles */
  html, body {
    height: 100%;
    line-height: 1.6;
    //background-color: #fff;
    color: #333;
    background-image: url('https://i.pinimg.com/originals/37/6a/39/376a3925f8b6d181006e1f9750870735.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

export default GlobalStyle;
