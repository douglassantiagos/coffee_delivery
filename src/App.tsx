import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';

import { Router } from "./Router";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />        
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyles />    
    </ThemeProvider>
  )
}
