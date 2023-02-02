import { ThemeProvider } from "styled-components";
import withDarkMode, { useDarkMode } from "next-dark-mode";
import { lightTheme, darkTheme } from "../src/themes/default";
import GlobalStyles from "../src/styles/globals";

function MyApp({ Component, pageProps }) {
  const { switchToDarkMode} = useDarkMode();
  const theme = switchToDarkMode ? darkTheme : lightTheme;
  return (
    <>
    <ThemeProvider theme={{darkMode: switchToDarkMode, ...theme}}>
    <GlobalStyles />
        <Component {...pageProps} darkMode={ switchToDarkMode}/>
      </ThemeProvider>
    </>
  );
}

export default withDarkMode(MyApp);