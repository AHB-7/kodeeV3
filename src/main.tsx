import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/global/global.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/global/theme";

// Ensure the root element is not null and render the app
const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </StrictMode>
    );
} else {
    console.error("Root element not found");
}
