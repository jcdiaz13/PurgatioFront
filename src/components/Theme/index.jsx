import { ThemeProvider } from "styled-components";
import { verdugoTheme } from "./themes/verdugoTheme";
import { magoTheme } from "./themes/magoTheme";
import { hadaTheme } from "./themes/hadaTheme";

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={magoTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;