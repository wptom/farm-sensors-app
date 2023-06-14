import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from "@mui/material";

const root = document.getElementById("root");

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

if (root) {
    ReactDOM.createRoot(root).render(
        // <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline enableColorScheme/>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
        // </React.StrictMode>
    );
}
