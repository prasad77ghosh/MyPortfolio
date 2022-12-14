import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --primary-color: #007bff;
    --primary-color-hover: #0357b2;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

html{
  font-size: 10px;
}

body{
  font-family: 'Nunito', sans-serif;
  background-color: var(--background-dark-color);
  color: var(--font-light-color);
  /* font-family: 'Noto Serif', serif; */
}

li{
  list-style: none;
}

a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
    text-decoration: none;
}

button{
  border: none;
  outline: none;
}

h1{
  font-size: 4rem;
}

h2{
  font-size: 3rem;
}

`;

export default GlobalStyle;
