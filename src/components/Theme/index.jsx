import { ThemeProvider } from "styled-components";
import { verdugoTheme } from "./themes/verdugoTheme";
import { magoTheme } from "./themes/magoTheme";
import { hadaTheme } from "./themes/hadaTheme";

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={magoTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
