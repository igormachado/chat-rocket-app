import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./Pages/Home";
import { MessagesChatProvider } from "./Contexts";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <MessagesChatProvider>
        <Home />
      </MessagesChatProvider>
    </ThemeProvider>
  );
}

export default App;
