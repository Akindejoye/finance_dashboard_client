import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return ( 
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1 style={{color:'white'}}>App Components</h1>
      </ThemeProvider>
    </div>
   );
}
 
export default App;