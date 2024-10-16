import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300..700&display=swap');
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Teko", sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    max-width: ${(props) => props.theme.breakpoints.lg};
    margin: 0 auto;
  }
  a {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
  }
`;
